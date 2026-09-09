"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(245, 247, 245, 0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 0 rgba(226,232,228,0.9), 0 8px 24px rgba(13,33,55,0.04)" : "none",
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
          background: "linear-gradient(90deg, #145F5A, #4EC994)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Accountant Genie home" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.svg"
            alt="Accountant Genie"
            width={250}
            height={32}
            priority
            style={{ height: 32, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 500,
                fontSize: 15,
                color: isActiveLink(href) ? "#0D2137" : "#64748B",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 6,
                transition: "color 0.15s ease, background 0.15s ease",
                background: isActiveLink(href) ? "rgba(13, 33, 55, 0.06)" : "transparent",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden-mobile">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 14,
              color: "#0D2137",
              textDecoration: "none",
              padding: "9px 20px",
              borderRadius: 8,
              border: "1.5px solid #CBD5D1",
              transition: "border-color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0D2137")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#CBD5D1")}
          >
            Log in
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
              padding: "9px 20px",
              borderRadius: 8,
              background: "#0D2137",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#145F5A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2137")}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="#0D2137" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="#0D2137" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="13" x2="19" y2="13" stroke="#0D2137" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#F5F7F5",
            borderTop: "1px solid #E2E8E4",
            padding: "16px 32px 24px",
          }}
          className="show-mobile-block"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 500,
                fontSize: 16,
                color: isActiveLink(href) ? "#0D2137" : "#64748B",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #E2E8E4",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: 8,
              background: "#0D2137",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; }
        }
      `}</style>
    </header>
  );
}
