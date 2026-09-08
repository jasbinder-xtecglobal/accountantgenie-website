"use client";

import Link from "next/link";
import Reveal from "./Reveal";

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
        color: "#145F5A",
        background: "rgba(78,201,148,0.12)",
        border: "1px solid rgba(78,201,148,0.25)",
        padding: "5px 12px",
        borderRadius: 100,
      }}
    >
      {children}
    </span>
  );
}

const features = [
  {
    num: "01",
    name: "Automated Reconciliation",
    tagline: "Reconciliation that runs itself.",
    body: "AussieBooks connects to your bank feeds and automatically matches transactions against your records — every day, without you lifting a finger. Exceptions are surfaced clearly so your team only reviews what actually needs attention.",
    bullets: [
      "Supports all major Australian banks and financial institutions",
      "Intelligent matching rules that learn from your corrections",
      "Daily automated runs with real-time exception alerts",
      "Full audit trail for every reconciliation decision",
    ],
    visual: (
      <div style={{ background: "#F5F7F5", borderRadius: 14, padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#0D2137" }}>Bank Reconciliation</p>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#145F5A", background: "rgba(78,201,148,0.12)", padding: "3px 8px", borderRadius: 6 }}>92% matched</span>
        </div>
        {[
          { desc: "Westpac — ATO Quarterly", match: true },
          { desc: "ANZ — Payroll Aug", match: true },
          { desc: "Unknown credit $5,400", match: false },
          { desc: "Xero reconciled — COGS", match: true },
          { desc: "Stripe payout #8821", match: true },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#fff",
              borderRadius: 8,
              padding: "9px 12px",
              marginBottom: 6,
              border: `1px solid ${row.match ? "#E2E8E4" : "rgba(220,107,107,0.3)"}`,
            }}
          >
            <span style={{ fontSize: 12, color: "#0D2137" }}>{row.desc}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: row.match ? "#145F5A" : "#DC6B6B" }}>
              {row.match ? "✓ Matched" : "! Review"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    name: "Financial Reporting",
    tagline: "Reports in seconds, not end-of-month marathons.",
    body: "Generate accurate P&L statements, balance sheets, cash flow reports, and custom dashboards at any point in time. Every report is built from live data, so you're never working from last month's numbers.",
    bullets: [
      "P&L, balance sheet, and cash flow reports — always live",
      "Custom date ranges and entity comparisons",
      "Exportable to PDF, CSV, or directly to your accountant",
      "Board-ready format with one click",
    ],
    visual: (
      <div style={{ background: "#0D2137", borderRadius: 14, padding: 24 }}>
        <p style={{ margin: "0 0 16px", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>Financial Summary — Sep 2026</p>
        {[
          { label: "Total Revenue", val: "$284,600", trend: "+8.2%" },
          { label: "Cost of Goods", val: "$61,800", trend: "-2.1%" },
          { label: "Gross Profit", val: "$222,800", trend: "+12.4%" },
          { label: "Operating Expenses", val: "$29,440", trend: "+1.8%" },
          { label: "Net Profit", val: "$193,360", trend: "+14.5%" },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{row.label}</span>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#4EC994" }}>{row.trend}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-mono)" }}>{row.val}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "03",
    name: "Financial Insights",
    tagline: "See what your numbers are actually telling you.",
    body: "AussieBooks analyses your financial data and surfaces meaningful patterns — cashflow forecasts, anomaly detection, overdue receivables, and tax obligations — so your team can act before problems compound.",
    bullets: [
      "Cashflow forecasting based on historical patterns",
      "Anomaly detection for unusual transactions or variances",
      "Accounts receivable and payable ageing dashboards",
      "Tax obligation tracking and reminders",
    ],
    visual: (
      <div style={{ background: "#F5F7F5", borderRadius: 14, padding: 24 }}>
        <p style={{ margin: "0 0 14px", fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Insights Dashboard</p>
        {[
          { label: "Cash runway", value: "14.2 months", colour: "#4EC994", icon: "↑" },
          { label: "Overdue invoices", value: "3 — $28,400", colour: "#E8A73E", icon: "!" },
          { label: "GST due 28 Oct", value: "$12,840", colour: "#64748B", icon: "◷" },
          { label: "Payroll variance", value: "+$2,100 vs. prior month", colour: "#DC6B6B", icon: "△" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#fff",
              borderRadius: 8,
              padding: "10px 12px",
              marginBottom: 8,
              border: "1px solid #E2E8E4",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: `${item.colour}18`,
                color: item.colour,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </span>
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "#64748B" }}>{item.label}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#0D2137" }}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    name: "Multi-entity Management",
    tagline: "Manage every entity from one platform.",
    body: "Whether you run a single company or a group of related entities, AussieBooks gives you consolidated visibility and entity-level drill-down — without the complexity of managing multiple disconnected systems.",
    bullets: [
      "Consolidated group reporting across all entities",
      "Entity-level permissions and user access controls",
      "Intercompany transaction management",
      "Switch between entities without logging in again",
    ],
    visual: (
      <div style={{ background: "#F5F7F5", borderRadius: 14, padding: 24 }}>
        <p style={{ margin: "0 0 14px", fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Group Overview</p>
        {[
          { name: "AussieBooks Holdings Pty Ltd", revenue: "$284,600", status: "Active" },
          { name: "AussieBooks Services Pty Ltd", revenue: "$91,200", status: "Active" },
          { name: "Northgate Properties Trust", revenue: "$48,300", status: "Active" },
        ].map((entity) => (
          <div
            key={entity.name}
            style={{
              background: "#fff",
              borderRadius: 10,
              padding: "12px 14px",
              marginBottom: 8,
              border: "1px solid #E2E8E4",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 700, color: "#0D2137" }}>{entity.name}</p>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#4EC994", background: "rgba(78,201,148,0.1)", padding: "2px 6px", borderRadius: 4 }}>{entity.status}</span>
            </div>
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 14, fontWeight: 700, color: "#145F5A" }}>{entity.revenue}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: "12px 14px", background: "#0D2137", borderRadius: 10, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>Group Total</span>
          <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 14, fontWeight: 700, color: "#4EC994" }}>$424,100</span>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <div style={{ background: "#F5F7F5" }}>

      {/* Hero */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #E2E8E4",
          padding: "100px 32px 96px",
          textAlign: "center",
        }}
      >
        <div className="ab-enter" style={{ maxWidth: 640, margin: "0 auto" }}>
          <Tag>Platform features</Tag>
          <h1
            style={{
              margin: "24px 0 20px",
              fontSize: "clamp(38px, 5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0D2137",
            }}
          >
            Everything you need to simplify financial work.
          </h1>
          <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, margin: "0 0 36px" }}>
            AussieBooks brings together the tools your finance team relies on every day — built for the Australian market, designed to work the way you do.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              textDecoration: "none",
              padding: "13px 26px",
              borderRadius: 10,
              background: "#0D2137",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#145F5A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2137")}
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Feature sections */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        {features.map((feat, i) => (
          <div
            key={feat.num}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
              marginBottom: i < features.length - 1 ? 112 : 0,
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}
            className="feature-row"
          >
            {/* Visual */}
            <Reveal style={{ direction: "ltr" }}>{feat.visual}</Reveal>

            {/* Text */}
            <Reveal delay={110} style={{ direction: "ltr" }}>
              <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "#CBD5D1" }}>{feat.num} — {feat.name}</span>
              <h2
                style={{
                  margin: "12px 0 16px",
                  fontSize: "clamp(26px, 2.5vw, 38px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#0D2137",
                }}
              >
                {feat.tagline}
              </h2>
              <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.75, margin: "0 0 28px" }}>{feat.body}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {feat.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#64748B" }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "rgba(78,201,148,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#145F5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0D2137",
          textAlign: "center",
          padding: "100px 32px",
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
            backgroundImage: "radial-gradient(ellipse 45% 55% at 78% 50%, rgba(78,201,148,0.11) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Reveal style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff" }}>
            See AussieBooks working for your business.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: "0 0 36px", lineHeight: 1.7 }}>
            Our team will walk you through a tailored demo — no generic slide decks, just your actual workflows.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 15,
              color: "#0D2137",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: 10,
              background: "#4EC994",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3db882")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4EC994")}
          >
            Book a Demo
          </Link>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .feature-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; margin-bottom: 64px !important; }
        }
      `}</style>
    </div>
  );
}
