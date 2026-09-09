import type { Metadata } from "next";
import PoliciesPage from "@/components/PoliciesPage";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "The terms, privacy and security policies that govern how Accountant Genie handles your firm's and your clients' data.",
};

export default function Page() {
  return <PoliciesPage />;
}
