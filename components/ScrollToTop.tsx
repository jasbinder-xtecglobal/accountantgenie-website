"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets the window to the very top on every route change (unless the URL
 * carries a hash). Next.js otherwise scrolls the new page's first element into
 * view, which lands it underneath the sticky navbar when you navigate from a
 * scrolled position.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
