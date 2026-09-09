"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Sparkles } from "lucide-react";

const MUTED = "rgba(255,255,255,0.55)";
const MUTED_STRONG = "rgba(255,255,255,0.8)";
const FAINT = "rgba(255,255,255,0.32)";
const LINE = "rgba(255,255,255,0.08)";

type FooterLink = { href: string; label: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/contact", label: "Book a demo" },
      { href: "/contact", label: "Get started" },
      { href: "/contact", label: "Log in" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
      { href: "/", label: "Home" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/policies", label: "All policies" },
      { href: "/policies/privacy-policy", label: "Privacy Policy" },
      { href: "/policies/cookie-policy", label: "Cookie Policy" },
    ],
  },
];

function FooterAnchor({ href, label }: FooterLink) {
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
    color: MUTED,
    textDecoration: "none",
    transition: "color 0.15s ease, transform 0.15s ease",
  };
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.transform = "translateX(2px)";
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = MUTED;
    e.currentTarget.style.transform = "none";
  };
  return href.startsWith("/") ? (
    <Link href={href} style={style} onMouseEnter={enter} onMouseLeave={leave}>
      {label}
    </Link>
  ) : (
    <a href={href} style={style} onMouseEnter={enter} onMouseLeave={leave}>
      {label}
    </a>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${LINE}`,
        color: MUTED_STRONG,
        transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(78,201,148,0.14)";
        e.currentTarget.style.borderColor = "rgba(78,201,148,0.4)";
        e.currentTarget.style.color = "#4EC994";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = LINE;
        e.currentTarget.style.color = MUTED_STRONG;
      }}
    >
      {children}
    </a>
  );
}

const iconWrap: React.CSSProperties = {
  display: "flex",
  width: 28,
  height: 28,
  borderRadius: 8,
  background: "rgba(78,201,148,0.12)",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "#0D2137",
        color: "#fff",
        overflow: "hidden",
        fontFamily: "var(--font-jakarta)",
      }}
    >
      {/* Top gradient hairline */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #145F5A 0%, #4EC994 50%, rgba(78,201,148,0) 100%)",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -180,
          left: "50%",
          width: 900,
          height: 420,
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center, rgba(78,201,148,0.14) 0%, rgba(78,201,148,0) 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "72px 32px 36px" }}>
        {/* CTA band */}
        <div
          className="footer-cta"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            padding: "36px 40px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(20,95,90,0.55) 0%, rgba(13,33,55,0.4) 100%)",
            border: "1px solid rgba(78,201,148,0.22)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
            marginBottom: 64,
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#4EC994",
              }}
            >
              Ready when you are
            </p>
            <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Bring clarity to your finances today.
            </h3>
            <p style={{ margin: "10px 0 0", fontSize: 15, color: MUTED, lineHeight: 1.6, maxWidth: 520 }}>
              Set up in minutes. No credit card required. Built for Australian businesses.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#0D2137",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: 10,
                background: "#4EC994",
                boxShadow: "0 8px 24px rgba(78,201,148,0.28)",
                transition: "background 0.15s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3db882";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4EC994";
                e.currentTarget.style.transform = "none";
              }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#fff",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.15s ease, background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              Talk to us
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr repeat(3, 1fr)",
            gap: 48,
            paddingBottom: 48,
            borderBottom: `1px solid ${LINE}`,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 380 }}>
            <Link
              href="/"
              aria-label="Accountant Genie home"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", marginBottom: 18 }}
            >
              <Image
                src="/logo-white.svg"
                alt="Accountant Genie"
                width={250}
                height={32}
                style={{ height: 32, width: "auto", display: "block" }}
              />
            </Link>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, margin: "0 0 24px" }}>
              Financial clarity for modern Australian businesses. Automate the routine, trust your numbers, and focus on
              what matters.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:hello@accountantgenie.com.au"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: MUTED_STRONG, textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4EC994")}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED_STRONG)}
              >
                <span style={iconWrap}>
                  <Mail size={14} strokeWidth={2} color="#4EC994" aria-hidden />
                </span>
                hello@accountantgenie.com.au
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: MUTED_STRONG }}>
                <span style={iconWrap}>
                  <MapPin size={14} strokeWidth={2} color="#4EC994" aria-hidden />
                </span>
                Sydney, New South Wales, Australia
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <div key={title}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: FAINT,
                  textTransform: "uppercase",
                  margin: "6px 0 18px",
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((l) => (
                  <li key={l.label}>
                    <FooterAnchor {...l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <p style={{ fontSize: 13, color: FAINT, margin: 0 }}>© 2026 Accountant Genie Pty Ltd. All rights reserved.</p>
            <span
              aria-hidden
              className="footer-divider"
              style={{ width: 1, height: 14, background: LINE, display: "inline-block" }}
            />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12,
                color: MUTED,
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${LINE}`,
                letterSpacing: "0.01em",
              }}
            >
              <Sparkles size={12} strokeWidth={2.2} color="#4EC994" aria-hidden />
              Powered by <span style={{ color: "#4EC994", fontWeight: 600 }}>Sparkview</span>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://x.com" label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.24 2H21.5l-7.13 8.15L22.75 22h-6.57l-5.14-6.72L5.16 22H1.9l7.63-8.72L1.5 2h6.74l4.65 6.15L18.24 2zm-1.15 18.05h1.81L7.03 3.85H5.09l12 16.2z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .footer-cta { flex-direction: column !important; align-items: flex-start !important; padding: 28px 24px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start !important; }
          .footer-divider { display: none !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
