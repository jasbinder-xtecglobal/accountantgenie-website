import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PolicyPage from "@/components/PolicyPage";
import { getPolicy, policies } from "@/lib/policies";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return {};
  return { title: policy.title, description: policy.summary };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();
  return <PolicyPage policy={policy} />;
}
