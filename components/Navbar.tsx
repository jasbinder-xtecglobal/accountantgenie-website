"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAVY = "#0D2137";
const MUTED = "#64748B";
const GRAD = "linear-gradient(135deg, #0A66F5 0%, #0233A8 100%)";
const GRAD_HOVER = "linear-gradient(135deg, #0855D8 0%, #01277F 100%)";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const activeIndex = navLinks.findIndex(({ href }) => isActiveLink(href));

  /* ── Sliding pill: rests on the active link, glides to whichever link is
        hovered, and returns on mouse-out. ───────────────────────────────── */
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [animate, setAnimate] = useState(false);

  const target = hovered ?? (activeIndex >= 0 ? activeIndex : null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const el = target == null ? null : itemRefs.current[target];
    if (!track || !el) {
      setPill(null);
      return;
    }
    const a = el.getBoundingClientRect();
    const b = track.getBoundingClientRect();
    setPill({ left: a.left - b.left, width: a.width });
  }, [target]);

  useEffect(() => {
    measure();
    // Skip the transition on the very first placement so the pill doesn't
    // fly in from the left on page load.
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    // Re-measure once webfonts land, since they change the label widths.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  /* ── Scroll state + reading progress ───────────────────────────────────── */
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 24);
        setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ── Mobile menu: close on navigation, lock scroll, close on Escape ────── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "box-shadow 0.3s ease",
        background: "#fff",
        boxShadow: scrolled
          ? "0 1px 0 0 rgba(226,232,240,0.9), 0 8px 24px rgba(13,33,55,0.04)"
          : "none",
      }}
    >
      {/* Reading progress */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          transformOrigin: "left center",
          transform: `scaleX(${progress})`,
          background: "linear-gradient(90deg, #035AE4, #22B4FD)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: 104,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Accountant Genie home"
          className="nav-logo"
          style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <Image
            src="/logo.svg"
            alt="Accountant Genie"
            width={174}
            height={68}
            priority
            style={{ height: 68, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav — segmented track with the sliding pill */}
        <div
          ref={trackRef}
          className="hidden-mobile"
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 4,
            borderRadius: 999,
            background: "rgba(13,33,55,0.035)",
            border: "1px solid rgba(13,33,55,0.05)",
          }}
        >
          {pill && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                width: pill.width,
                transform: `translateX(${pill.left}px)`,
                borderRadius: 999,
                background: "#fff",
                boxShadow:
                  "0 1px 2px rgba(13,33,55,0.08), 0 3px 10px rgba(13,33,55,0.07)",
                transition: animate
                  ? "transform 0.32s cubic-bezier(0.22,1,0.36,1), width 0.32s cubic-bezier(0.22,1,0.36,1)"
                  : "none",
                pointerEvents: "none",
              }}
            />
          )}

          {navLinks.map(({ href, label }, i) => {
            const active = i === activeIndex;
            const lit = i === target;
            return (
              <Link
                key={href}
                href={href}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                style={{
                  position: "relative",
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: active ? 600 : 500,
                  fontSize: 14.5,
                  color: lit || active ? NAVY : MUTED,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 14,
              color: NAVY,
              textDecoration: "none",
              padding: "9px 18px",
              borderRadius: 999,
              background: "#fff",
              border: "1px solid #E2E8F0",
              transition:
                "border-color 0.18s ease, background 0.18s ease, transform 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.background = "#F8FAFC";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "none";
            }}
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="ab-sweep"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: 999,
              background: GRAD,
              boxShadow: "0 4px 14px rgba(29,78,216,0.28)",
              transition:
                "background 0.18s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GRAD_HOVER;
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(29,78,216,0.38)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = GRAD;
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(29,78,216,0.28)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Get Started
            <span className="ab-sweep-shine" aria-hidden />
          </Link>
        </div>

        {/* Mobile hamburger — the two bars morph into a cross */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="show-mobile nav-burger"
          style={{
            position: "relative",
            width: 42,
            height: 42,
            borderRadius: 999,
            background: menuOpen ? "rgba(13,33,55,0.06)" : "transparent",
            border: "1px solid",
            borderColor: menuOpen ? "rgba(13,33,55,0.10)" : "transparent",
            cursor: "pointer",
            padding: 0,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s ease, border-color 0.2s ease",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              width: 17,
              height: 1.8,
              borderRadius: 2,
              background: NAVY,
              transform: menuOpen ? "rotate(45deg)" : "translateY(-4px)",
              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <span
            aria-hidden
            style={{
              position: "absolute",
              width: 17,
              height: 1.8,
              borderRadius: 2,
              background: NAVY,
              transform: menuOpen ? "rotate(-45deg)" : "translateY(4px)",
              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="show-mobile-block nav-sheet"
          style={{
            background: "rgba(245,247,250,0.96)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            borderTop: "1px solid #E2E8F0",
            padding: "10px 24px 24px",
          }}
        >
          {navLinks.map(({ href, label }, i) => {
            const active = isActiveLink(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className="nav-sheet-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: active ? 600 : 500,
                  fontSize: 16,
                  color: active ? NAVY : MUTED,
                  textDecoration: "none",
                  padding: "14px 4px",
                  borderBottom: "1px solid #E2E8F0",
                  animationDelay: `${i * 45}ms`,
                }}
              >
                {label}
                {active && (
                  <span
                    aria-hidden
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: GRAD,
                    }}
                  />
                )}
              </Link>
            );
          })}

          <div
            className="nav-sheet-item"
            style={{ display: "grid", gap: 10, marginTop: 20, animationDelay: `${navLinks.length * 45}ms` }}
          >
            <Link
              href="/contact"
              style={{
                display: "block",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: 15,
                color: NAVY,
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: 999,
                background: "#fff",
                border: "1px solid #E2E8F0",
                textAlign: "center",
              }}
            >
              Log in
            </Link>
            <Link
              href="/contact"
              style={{
                display: "block",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: 15,
                color: "#fff",
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: 999,
                background: GRAD,
                boxShadow: "0 4px 14px rgba(29,78,216,0.28)",
                textAlign: "center",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-logo { transition: opacity 0.2s ease; }
        .nav-logo:hover { opacity: 0.78; }

        .nav-burger:hover { background: rgba(13,33,55,0.05) !important; }

        .nav-sheet { animation: nav-drop 0.28s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .nav-sheet-item { animation: nav-item 0.3s cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes nav-drop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes nav-item {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: none; }
        }

        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; }
        }
      `}</style>
    </header>
  );
}
