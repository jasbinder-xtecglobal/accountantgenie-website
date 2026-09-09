import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have questions about Accountant Genie? Want to see a live demo? Talk to our team.",
};

export default function Page() {
  return <ContactPage />;
}
