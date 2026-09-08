"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D2137", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 32px 40px",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            alignItems: "start",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div style={{ maxWidth: 360 }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="rgba(78,201,148,0.15)" />
                <path d="M8 20V10l6-2 6 2v10" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 20v-6h6v6" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="12.5" y="10" width="3" height="3" rx="0.5" fill="#4EC994" opacity="0.5" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em", color: "#fff" }}>
                AussieBooks
              </span>
            </Link>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
              Financial clarity for modern Australian businesses. Automate the routine. Focus on what matters.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 64 }} className="footer-nav">
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 16px" }}>
                Platform
              </p>
              {[
                { href: "/", label: "Home" },
                { href: "/features", label: "Features" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    marginBottom: 10,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 16px" }}>
                Legal
              </p>
              {["Privacy Policy", "Terms & Conditions"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    marginBottom: 10,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0 }}>
            © 2026 AussieBooks Pty Ltd. All rights reserved.
          </p>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-nav { gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
