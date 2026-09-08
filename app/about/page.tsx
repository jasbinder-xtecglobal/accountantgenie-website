import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "AussieBooks was founded by accountants, engineers, and product builders who spent years watching finance teams struggle with fragmented tools and manual work.",
};

export default function Page() {
  return <AboutPage />;
}
