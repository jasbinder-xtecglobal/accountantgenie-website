import type { Metadata } from "next";
import FeaturesPage from "@/components/FeaturesPage";

export const metadata: Metadata = {
  title: "Features",
  description: "Automated reconciliation, intelligent insights, and multi-entity visibility — built for the Australian market.",
};

export default function Page() {
  return <FeaturesPage />;
}
