"use client";

type SpotlightCardProps = {
  children: React.ReactNode;
  /** Use the dark palette for cards sitting on a navy section. */
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * A card that lifts on hover and tracks the cursor with a soft mint highlight.
 * The pointer position is published as --mx/--my; `.ab-card` in globals.css
 * turns that into the radial gradient.
 */
export default function SpotlightCard({
  children,
  dark = false,
  className,
  style,
}: SpotlightCardProps) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={["ab-card", dark ? "ab-card-dark" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
