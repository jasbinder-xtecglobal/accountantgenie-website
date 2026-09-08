"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger offset in ms — use on siblings to cascade them in. */
  delay?: number;
  /** Distance travelled on the way in, in px. */
  y?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Fades and lifts its children into view once they scroll into the viewport.
 * The hidden/shown state lives on `data-reveal`; the actual transition is in
 * globals.css, which also unhides everything under `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support — unhide via the DOM rather than a cascading render.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "shown";
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "shown" : "hidden"}
      className={className}
      style={
        {
          "--reveal-y": `${y}px`,
          transitionDelay: `${delay}ms`,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
