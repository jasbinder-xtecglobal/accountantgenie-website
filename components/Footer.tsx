"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Sparkles } from "lucide-react";

const MUTED = "rgba(255,255,255,0.86)";
const MUTED_STRONG = "rgba(255,255,255,0.96)";
const FAINT = "rgba(255,255,255,0.62)";
const LINE = "rgba(255,255,255,0.12)";

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
        e.currentTarget.style.background = "rgba(59,130,246,0.14)";
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
        e.currentTarget.style.color = "#60A5FA";
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
  background: "rgba(59,130,246,0.12)",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--grad-footer)",
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
          height: 1,
          background:
            "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(96,165,250,0.55) 50%, rgba(59,130,246,0) 100%)",
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
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0) 65%)",
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
            background: "linear-gradient(135deg, rgba(37,99,235,0.42) 0%, rgba(13,33,55,0.55) 100%)",
            border: "1px solid rgba(59,130,246,0.22)",
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
                color: "#60A5FA",
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
                color: "#fff",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                boxShadow: "0 8px 24px rgba(59,130,246,0.28)",
                transition: "background 0.15s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)";
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED_STRONG)}
              >
                <span style={iconWrap}>
                  <Mail size={14} strokeWidth={2} color="#60A5FA" aria-hidden />
                </span>
                hello@accountantgenie.com.au
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: MUTED_STRONG }}>
                <span style={iconWrap}>
                  <MapPin size={14} strokeWidth={2} color="#60A5FA" aria-hidden />
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
              <Sparkles size={12} strokeWidth={2.2} color="#60A5FA" aria-hidden />
              Powered by <span style={{ color: "#60A5FA", fontWeight: 600 }}>Sparkview</span>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SocialIcon href="https://www.instagram.com/accountantgenie/" label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.98c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18-.21-.55-.47-.94-.88-1.35-.41-.41-.8-.67-1.35-.88-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 3.38a4.48 4.48 0 1 1 0 8.96 4.48 4.48 0 0 1 0-8.96zm0 7.39a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82zm5.71-7.59a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/accountantgenie" label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.02 24 18.06 24 12.07z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/accountantgenie" label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.pinterest.com/accountantgenie/" label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12.02 0C5.4 0 .03 5.37.03 11.99c0 5.08 3.16 9.41 7.62 11.16-.11-.95-.2-2.41.04-3.44.22-.94 1.41-5.96 1.41-5.96s-.36-.72-.36-1.78c0-1.66.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 3.99-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.49 0-2.86-2.06-4.87-5.01-4.87-3.41 0-5.41 2.56-5.41 5.2 0 1.03.4 2.14.89 2.74.1.12.11.23.09.35-.09.38-.29 1.2-.33 1.36-.05.23-.17.27-.4.17-1.5-.69-2.43-2.88-2.43-4.65 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.97 7.39 6.92 0 4.14-2.61 7.46-6.22 7.46-1.21 0-2.36-.63-2.76-1.38l-.75 2.85c-.27 1.05-1 2.35-1.5 3.15 1.13.35 2.31.54 3.55.54 6.61 0 11.99-5.37 11.99-11.99C24 5.37 18.63 0 12.02 0z" />
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
