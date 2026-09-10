"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { POLICY_ICONS } from "./policyIcons";
import { policies } from "@/lib/policies";

const PAGE_SIZE = 9;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#60A5FA",
        background: "rgba(59,130,246,0.12)",
        border: "1px solid rgba(59,130,246,0.25)",
        padding: "5px 12px",
        borderRadius: 100,
      }}
    >
      {children}
    </span>
  );
}

function PageButton({
  children,
  onClick,
  disabled,
  active,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        borderRadius: 999,
        border: "none",
        cursor: disabled ? "default" : "pointer",
        fontFamily: "var(--font-jakarta)",
        fontSize: 14,
        fontWeight: 600,
        background: active ? "#0D2137" : "transparent",
        color: active ? "#fff" : disabled ? "#CBD5E1" : "#0D2137",
        boxShadow: active ? "0 6px 18px rgba(13,33,55,0.25)" : "none",
        transition: "background 0.15s ease, color 0.15s ease, transform 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (!disabled && !active) e.currentTarget.style.background = "rgba(59,130,246,0.14)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

export default function Policies() {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.ceil(policies.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = policies.slice(start, start + PAGE_SIZE);

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(next, 1), pageCount);
    if (clamped === page) return;
    setPage(clamped);
    const top = gridRef.current?.getBoundingClientRect().top ?? 0;
    window.scrollTo({ top: window.scrollY + top - 96, behavior: "smooth" });
  };

  return (
    <div style={{ background: "#F5F7FA" }}>
      {/* Hero */}
      <section
        style={{
          background: "var(--grad-dark-band)",
          padding: "104px 32px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          className="ab-drift"
          style={{
            position: "absolute",
            inset: "-25%",
            backgroundImage: "radial-gradient(ellipse 40% 50% at 50% 45%, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="ab-enter" style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <Tag>Legal</Tag>
          <h1
            style={{
              margin: "24px 0 18px",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Policies
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
            The terms, privacy and security policies that govern how Accountant Genie handles your firm&#39;s and your
            clients&#39; data, covering data processing, retention, incident response and acceptable use.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 112px" }}>
        <div
          ref={gridRef}
          className="policies-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {visible.map((p, i) => {
            const Icon = POLICY_ICONS[p.icon];
            return (
            <Reveal key={`${page}-${p.slug}`} delay={(i % 3) * 70} y={16}>
              <Link
                href={`/policies/${p.slug}`}
                className="policy-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  padding: "30px 30px 26px",
                  borderRadius: 18,
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  boxShadow: "0 1px 2px rgba(13,33,55,0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "rgba(59,130,246,0.12)",
                      color: "#1D4ED8",
                    }}
                  >
                    <Icon size={19} strokeWidth={1.9} aria-hidden />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: 11,
                      color: "#94A3B0",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {String(start + i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: 21,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    color: "#0D2137",
                  }}
                >
                  {p.title}
                </h2>
                <p style={{ margin: "0 0 24px", fontSize: 14.5, lineHeight: 1.7, color: "#64748B", flex: 1 }}>
                  {p.summary}
                </p>

                <span
                  className="policy-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1D4ED8",
                  }}
                >
                  Read policy
                  <ArrowRight className="policy-arrow" size={15} strokeWidth={2.2} aria-hidden style={{ transition: "transform 0.2s ease" }} />
                </span>
              </Link>
            </Reveal>
            );
          })}
        </div>

        {pageCount > 1 && (
          <nav
            aria-label="Policies pagination"
            style={{ display: "flex", justifyContent: "center", marginTop: 48 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: 6,
                borderRadius: 999,
                background: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 2px rgba(13,33,55,0.04), 0 8px 24px rgba(13,33,55,0.05)",
              }}
            >
              <PageButton onClick={() => goTo(page - 1)} disabled={page === 1} label="Previous page">
                <ArrowLeft size={16} strokeWidth={2.2} aria-hidden />
              </PageButton>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <PageButton key={n} onClick={() => goTo(n)} active={n === page} label={`Page ${n}`}>
                  {String(n).padStart(2, "0")}
                </PageButton>
              ))}
              <PageButton onClick={() => goTo(page + 1)} disabled={page === pageCount} label="Next page">
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden />
              </PageButton>
            </div>
            <p style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }} aria-live="polite">
              Page {page} of {pageCount}
            </p>
          </nav>
        )}
      </section>

      <style>{`
        .policy-card:hover {
          transform: translateY(-3px);
          border-color: rgba(59,130,246,0.5) !important;
          box-shadow: 0 1px 2px rgba(13,33,55,0.04), 0 16px 40px rgba(13,33,55,0.08) !important;
        }
        .policy-card:hover .policy-arrow { transform: translateX(3px); }
        .policy-card:focus-visible { outline: 2px solid #2563EB; outline-offset: 3px; }
        @media (max-width: 1024px) {
          .policies-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .policies-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}
