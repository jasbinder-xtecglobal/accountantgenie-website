import HomePage from "@/components/HomePage";
import ComingSoon from "@/components/ComingSoon";
import { COMING_SOON } from "@/lib/site";

export default function Page() {
  if (COMING_SOON) return <ComingSoon />;
  return <HomePage />;
}
