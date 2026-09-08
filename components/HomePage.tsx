"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

/* ─── Reusable primitives ─── */
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

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-jakarta)",
        fontWeight: 600,
        fontSize: 15,
        color: "#fff",
        textDecoration: "none",
        padding: "13px 26px",
        borderRadius: 10,
        background: hov ? "#145F5A" : "#0D2137",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 12px 28px rgba(13,33,55,0.22)" : "0 0 0 rgba(13,33,55,0)",
        transition:
          "background 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease",
      }}
      className="ab-sweep"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
      <span className="ab-sweep-shine" aria-hidden />
    </Link>
  );
}

function GhostBtn({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-jakarta)",
        fontWeight: 600,
        fontSize: 15,
        color: hov ? "#0D2137" : "#64748B",
        textDecoration: "none",
        padding: "13px 0",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{
          transform: hov ? "translateX(4px)" : "none",
          transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

/* ─── Mini Product UI card ─── */
function ProductUI() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #E2E8E4",
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(13,33,55,0.12), 0 4px 16px rgba(13,33,55,0.06)",
        fontFamily: "var(--font-jakarta)",
        maxWidth: 480,
        width: "100%",
      }}
    >
      {/* Header */}
      <div style={{ background: "#0D2137", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="ab-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4EC994" }} />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500 }}>Financial Overview</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "var(--font-dm-mono)" }}>Sep 2026</span>
      </div>

      <div style={{ padding: "24px" }}>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[
            { label: "Revenue", value: "$284,600", delta: "+8.2%", up: true },
            { label: "Expenses", value: "$91,240", delta: "-3.1%", up: false },
            { label: "Net Profit", value: "$193,360", delta: "+14.5%", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              style={{ background: "#F5F7F5", borderRadius: 10, padding: "12px 14px" }}
            >
              <p style={{ margin: "0 0 4px", fontSize: 10, color: "#64748B", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{kpi.label}</p>
              <p style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "#0D2137" }}>{kpi.value}</p>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: kpi.up ? "#145F5A" : "#DC6B6B" }}>{kpi.delta}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Monthly Revenue</p>
          <svg viewBox="0 0 432 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 72 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4EC994" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4EC994" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 56 L36 50 L72 44 L108 40 L144 36 L180 30 L216 24 L252 20 L288 16 L324 10 L360 8 L396 4 L432 2 L432 72 L0 72Z"
              fill="url(#revGrad)"
              style={{ animation: "ab-rise 1s ease-out 1.1s both" }}
            />
            {/* Drawn on, left to right */}
            <path
              d="M0 56 L36 50 L72 44 L108 40 L144 36 L180 30 L216 24 L252 20 L288 16 L324 10 L360 8 L396 4 L432 2"
              stroke="#4EC994"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 460,
                strokeDashoffset: 460,
                animation: "ab-draw 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.55s forwards",
              }}
            />
            {[36, 108, 180, 252, 324, 396].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[50, 40, 30, 20, 10, 4][i]}
                r="3"
                fill="#4EC994"
                stroke="#fff"
                strokeWidth="1.5"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `ab-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.75 + i * 0.16}s both`,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Transactions */}
        <div>
          <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Recent Transactions</p>
          {[
            { name: "Atlassian Pty Ltd", category: "Software", amount: "-$1,240", date: "Today" },
            { name: "Client Invoice #4821", category: "Revenue", amount: "+$18,500", date: "Yesterday" },
            { name: "Office Supplies Co.", category: "Operations", amount: "-$386", date: "4 Sep" },
          ].map((tx) => (
            <div
              key={tx.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "9px 0",
                borderBottom: "1px solid #F0F3F1",
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#141E26" }}>{tx.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#64748B" }}>{tx.category} · {tx.date}</p>
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "var(--font-dm-mono)",
                  color: tx.amount.startsWith("+") ? "#145F5A" : "#141E26",
                }}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Floating status chips ─── */
function FloatingChips() {
  return (
    <>
      {/* Automation chip */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "-18px",
          background: "#fff",
          borderRadius: 12,
          border: "1px solid #E2E8E4",
          padding: "10px 16px",
          boxShadow: "0 8px 32px rgba(13,33,55,0.1)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          whiteSpace: "nowrap",
          animation: "ab-rise 0.7s cubic-bezier(0.22,1,0.36,1) 0.85s both",
        }}
        className="float-chip ab-float"
      >
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(78,201,148,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v3M8 11v3M2 8h3M11 8h3M4 4l2 2M10 10l2 2M4 12l2-2M10 6l2-2" stroke="#145F5A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#0D2137" }}>Automated</p>
          <p style={{ margin: 0, fontSize: 11, color: "#64748B" }}>14 tasks this week</p>
        </div>
      </div>

      {/* Reconciliation chip */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "-28px",
          background: "#0D2137",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "10px 16px",
          boxShadow: "0 8px 32px rgba(13,33,55,0.2)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          whiteSpace: "nowrap",
          animation: "ab-rise 0.7s cubic-bezier(0.22,1,0.36,1) 1.05s both",
        }}
        className="float-chip ab-float-slow"
      >
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(78,201,148,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3 3 7-7" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#fff" }}>Bank Reconciled</p>
          <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>All accounts matched</p>
        </div>
      </div>
    </>
  );
}

/* ─── Main page ─── */
export default function Home() {
  return (
    <div style={{ background: "#F5F7F5" }}>

      {/* ─── Hero ─── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Slow-drifting colour wash */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div
            className="ab-drift"
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: 720,
              height: 720,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(78,201,148,0.16) 0%, transparent 68%)",
              filter: "blur(8px)",
            }}
          />
          <div
            className="ab-drift"
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-12%",
              width: 620,
              height: 620,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(20,95,90,0.10) 0%, transparent 68%)",
              filter: "blur(8px)",
              animationDelay: "-9s",
            }}
          />
        </div>

        <section
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 32px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <div className="ab-enter">
              <Tag>
                <span className="ab-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4EC994", display: "inline-block" }} />
                Smarter Finance
              </Tag>
            </div>

            <h1
              className="ab-enter"
              style={{
                animationDelay: "0.08s",
                margin: "24px 0 24px",
                fontSize: "clamp(42px, 5vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0D2137",
              }}
            >
              Financial clarity,{" "}
              <span
                style={{
                  background: "linear-gradient(100deg, #145F5A 0%, #2E9B7A 55%, #4EC994 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                finally.
              </span>
            </h1>

            <p
              className="ab-enter"
              style={{
                animationDelay: "0.16s",
                fontSize: 18,
                lineHeight: 1.7,
                color: "#64748B",
                margin: "0 0 40px",
                maxWidth: 480,
              }}
            >
              AussieBooks brings your financial workflows into one intelligent platform. Less manual work, fewer errors, and the real-time visibility your business needs to move forward.
            </p>

            <div className="ab-enter" style={{ animationDelay: "0.24s", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <PrimaryBtn href="/contact">Get Started</PrimaryBtn>
              <GhostBtn href="/features">See how it works</GhostBtn>
            </div>

            <p className="ab-enter" style={{ animationDelay: "0.32s", marginTop: 32, fontSize: 13, color: "#94A3B0" }}>
              No credit card required · Built for Australian businesses
            </p>
          </div>

          {/* Right — product visual */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div className="ab-hero-card" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <ProductUI />
            </div>
            <FloatingChips />
          </div>
        </section>
      </div>

      {/* ─── Trust bar ─── */}
      <section
        style={{
          borderTop: "1px solid #E2E8E4",
          borderBottom: "1px solid #E2E8E4",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "32px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="trust-grid"
        >
          {[
            {
              icon: (
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#145F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: "Bank-grade security",
              sub: "Data encrypted at rest and in transit",
            },
            {
              icon: (
                <>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#145F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </>
              ),
              label: "Real-time automation",
              sub: "Routine tasks handled automatically",
            },
            {
              icon: (
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#145F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: "Accurate by design",
              sub: "Catch discrepancies before they compound",
            },
            {
              icon: (
                <path d="M3 3h18v18H3zM3 9h18M9 21V9" stroke="#145F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: "All in one place",
              sub: "Accounts, reports, and insights unified",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 90} y={16}>
              <div className="ab-trust" style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                className="ab-trust-icon"
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(20,95,90,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
              </div>
              <div>
                <p style={{ margin: "0 0 3px", fontSize: 14, fontWeight: 700, color: "#0D2137" }}>{item.label}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{item.sub}</p>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Left */}
          <Reveal>
            <Tag>The problem</Tag>
            <h2
              style={{
                margin: "24px 0 0",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0D2137",
              }}
            >
              Finance shouldn&#39;t slow your business down.
            </h2>
          </Reveal>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                num: "01",
                title: "Fragmented data, fragmented decisions",
                body: "Spreadsheets, disconnected tools, and manual exports leave your financial picture incomplete — and out of date.",
              },
              {
                num: "02",
                title: "Hours lost to repetitive tasks",
                body: "Reconciliations, data entry, and report generation consume time that should be spent on strategy, not administration.",
              },
              {
                num: "03",
                title: "Errors that compound quietly",
                body: "Small mistakes in manual processes grow into larger problems. By the time you find them, the damage is already done.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 110} y={16}>
              <div
                className="ab-row"
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "1px solid #E2E8E4" : "none",
                  borderBottom: "1px solid #E2E8E4",
                  display: "flex",
                  gap: 24,
                }}
              >
                <span
                  className="ab-row-num"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#CBD5D1",
                    flexShrink: 0,
                    paddingTop: 3,
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#0D2137" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Solution ─── */}
      <section style={{ background: "#0D2137", overflow: "hidden", position: "relative" }}>
        <div
          aria-hidden
          className="ab-drift"
          style={{
            position: "absolute",
            top: "-25%",
            left: "-8%",
            width: 680,
            height: 680,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(78,201,148,0.09) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "112px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Left */}
          <Reveal>
            <Tag>The AussieBooks way</Tag>
            <h2
              style={{
                margin: "24px 0 24px",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#fff",
              }}
            >
              One platform for your entire financial workflow.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 40px" }}>
              AussieBooks connects your accounts, automates your processes, and surfaces the insights you need — so your finance team can work on things that actually matter.
            </p>
            <PrimaryBtn href="/features">Explore features</PrimaryBtn>
          </Reveal>

          {/* Right — before/after */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { from: "Manual reconciliations", to: "Automated matching", icon: "⇄" },
              { from: "Scattered spreadsheets", to: "Unified data platform", icon: "⇄" },
              { from: "End-of-month reporting", to: "Real-time financial view", icon: "⇄" },
              { from: "Reactive decisions", to: "Proactive financial insights", icon: "⇄" },
            ].map((item, i) => (
              <Reveal key={item.from} delay={i * 100} y={14}>
              <div
                className="ab-swap"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
              >
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>{item.from}</span>
                <svg className="ab-swap-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }}>
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="#4EC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#4EC994" }}>{item.to}</span>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 72px" }}>
          <Tag>Core capabilities</Tag>
          <h2
            style={{
              margin: "24px 0 20px",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#0D2137",
            }}
          >
            Built for serious financial work.
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.7, margin: 0 }}>
            Every feature in AussieBooks was designed around how finance professionals actually work — not how software vendors think they should.
          </p>
        </Reveal>

        {/* Feature 01 — large */}
        <Reveal>
        <SpotlightCard
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            marginBottom: 80,
            background: "#fff",
            border: "1px solid #E2E8E4",
            borderRadius: 20,
            padding: "56px 64px",
            overflow: "hidden",
          }}
          className="feature-block two-col"
        >
          {/* Visual */}
          <div
            style={{
              background: "#F5F7F5",
              borderRadius: 14,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Reconciliation Engine</p>
            {[
              { desc: "Payroll run — August", match: "Matched", matched: true },
              { desc: "Telstra invoice #88221", match: "Matched", matched: true },
              { desc: "Unknown debit $2,340", match: "Needs review", matched: false },
              { desc: "Client payment — InvR-0412", match: "Matched", matched: true },
            ].map((row, i) => (
              <div
                key={i}
                className="ab-stagger"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fff",
                  borderRadius: 8,
                  padding: "10px 14px",
                  border: "1px solid",
                  borderColor: row.matched ? "#E2E8E4" : "rgba(220,107,107,0.3)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <span style={{ fontSize: 13, color: "#0D2137" }}>{row.desc}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: row.matched ? "#145F5A" : "#DC6B6B",
                    background: row.matched ? "rgba(78,201,148,0.1)" : "rgba(220,107,107,0.1)",
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  {row.match}
                </span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "#CBD5D1" }}>01 — Automation</span>
            <h3 style={{ margin: "12px 0 16px", fontSize: 30, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#0D2137" }}>
              Reconciliation that runs itself.
            </h3>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, margin: "0 0 24px" }}>
              Stop spending Friday afternoons matching transactions. AussieBooks automatically reconciles bank feeds against your records, flagging only the exceptions that need your attention.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Supports all major Australian banks", "Smart categorisation and matching rules", "Exception alerts in real time"].map((pt) => (
                <li key={pt} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#64748B" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(78,201,148,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#145F5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </SpotlightCard>
        </Reveal>

        {/* Feature 02 & 03 — side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="feature-pair">
          {[
            {
              num: "02 — Reporting",
              title: "Reports in seconds, not hours.",
              body: "Generate P&L statements, balance sheets, cash flow reports, and custom dashboards with one click — always up to date.",
              visual: (
                <div style={{ background: "#F5F7F5", borderRadius: 12, padding: 20 }}>
                  <p style={{ margin: "0 0 14px", fontSize: 11, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>P&L Summary</p>
                  {[
                    { label: "Gross Revenue", val: "$284,600", pct: 100 },
                    { label: "Operating Costs", val: "$91,240", pct: 32 },
                    { label: "Net Profit", val: "$193,360", pct: 68 },
                  ].map((row, i) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 12, color: "#64748B" }}>{row.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#0D2137", fontFamily: "var(--font-dm-mono)" }}>{row.val}</span>
                      </div>
                      <div style={{ height: 4, background: "#E2E8E4", borderRadius: 2 }}>
                        <div
                          className="ab-bar"
                          style={{
                            height: "100%",
                            width: `${row.pct}%`,
                            background: "#4EC994",
                            borderRadius: 2,
                            animationDelay: `${i * 130}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              num: "03 — Insights",
              title: "Know your financial position at a glance.",
              body: "AussieBooks surfaces trends, anomalies, and opportunities across your accounts — giving your team actionable context, not just raw numbers.",
              visual: (
                <div style={{ background: "#F5F7F5", borderRadius: 12, padding: 20 }}>
                  <p style={{ margin: "0 0 14px", fontSize: 11, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Insights</p>
                  {[
                    { label: "Cashflow positive", color: "#4EC994", icon: "↑" },
                    { label: "3 invoices overdue", color: "#E8A73E", icon: "!" },
                    { label: "Tax provision due 28 Oct", color: "#64748B", icon: "◷" },
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
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: `${item.color}18`,
                          color: item.color,
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
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#0D2137" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              ),
            },
          ].map((feat, i) => (
            <Reveal key={feat.num} delay={i * 120}>
            <SpotlightCard
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid #E2E8E4",
                borderRadius: 20,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {feat.visual}
              <div>
                <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "#CBD5D1" }}>{feat.num}</span>
                <h3 style={{ margin: "10px 0 10px", fontSize: 22, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0D2137" }}>{feat.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "#64748B", lineHeight: 1.65 }}>{feat.body}</p>
              </div>
            </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ textAlign: "center", marginTop: 16 }}>
          <GhostBtn href="/features">View all features</GhostBtn>
        </Reveal>
      </section>

      {/* ─── How it works ─── */}
      <section style={{ background: "#fff", borderTop: "1px solid #E2E8E4", borderBottom: "1px solid #E2E8E4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 72px" }}>
            <Tag>How it works</Tag>
            <h2
              style={{
                margin: "24px 0 0",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0D2137",
              }}
            >
              Up and running in minutes.
            </h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              position: "relative",
            }}
            className="steps-grid"
          >
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: 32,
                left: "calc(16.67% + 32px)",
                right: "calc(16.67% + 32px)",
                height: 1,
                background: "linear-gradient(to right, #4EC994, #145F5A, #4EC994)",
                opacity: 0.3,
              }}
              className="step-connector"
            />

            {[
              {
                step: "01",
                title: "Connect",
                body: "Link your bank accounts, accounting records, and financial data sources in a few clicks.",
              },
              {
                step: "02",
                title: "Automate",
                body: "AussieBooks handles reconciliation, categorisation, and routine reporting — automatically, every day.",
              },
              {
                step: "03",
                title: "Decide with clarity",
                body: "With clean, real-time data, your team spends less time on maintenance and more time on forward-looking decisions.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 140}>
              <div
                className="ab-step"
                style={{ padding: "0 40px", textAlign: "center" }}
              >
                <div
                  className="ab-step-badge"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "#0D2137",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 14,
                    fontWeight: 500,
                    margin: "0 auto 28px",
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D2137" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "#64748B", lineHeight: 1.65 }}>{item.body}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits / Stats ─── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 72px" }}>
          <Tag>Why AussieBooks</Tag>
          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#0D2137",
            }}
          >
            The outcomes that matter.
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="benefit-grid"
        >
          {[
            {
              icon: (
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" />
              ),
              headline: "Faster close",
              body: "Month-end and year-end processes that used to take days now take hours — with fewer errors and less stress.",
            },
            {
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" stroke="#4EC994" strokeWidth="1.8" fill="none" />
                  <path d="M12 6v6l4 2" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ),
              headline: "Time back for what matters",
              body: "Automate repetitive financial tasks so your team can focus on analysis, planning, and growth — not data entry.",
            },
            {
              icon: (
                <path d="M2 20h20M6 20V10l6-6 6 6v10M10 20v-5h4v5" stroke="#4EC994" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              headline: "Confidence in your numbers",
              body: "Decisions are only as good as the data behind them. AussieBooks gives you a single source of financial truth, always current.",
            },
          ].map((item, i) => (
            <Reveal key={item.headline} delay={i * 120}>
            <SpotlightCard
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid #E2E8E4",
                borderRadius: 16,
                padding: "40px",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(20,95,90,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D2137" }}>{item.headline}</h3>
              <p style={{ margin: 0, fontSize: 15, color: "#64748B", lineHeight: 1.65 }}>{item.body}</p>
            </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section style={{ background: "#0D2137", position: "relative", overflow: "hidden" }}>
        {/* Decorative */}
        <div
          aria-hidden
          className="ab-drift"
          style={{
            position: "absolute",
            inset: "-20%",
            backgroundImage: "radial-gradient(ellipse 45% 55% at 78% 50%, rgba(78,201,148,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Reveal
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "112px 32px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Tag>Ready to start?</Tag>
          <h2
            style={{
              margin: "24px 0 20px",
              fontSize: "clamp(36px, 4vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Simplify your financial workflow today.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 40px" }}>
            Join the finance teams choosing clarity over complexity. Get AussieBooks working for your business in minutes.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: 15,
                color: "#0D2137",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: 10,
                background: "#4EC994",
                transition: "background 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease",
              }}
              className="ab-sweep"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3db882";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(78,201,148,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4EC994";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Started — it&#39;s free
              <span className="ab-sweep-shine" aria-hidden />
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Book a Demo
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .feature-block { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px !important; }
          .feature-pair { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .benefit-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .step-connector { display: none !important; }
          .float-chip { display: none !important; }
        }
        @media (max-width: 600px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
