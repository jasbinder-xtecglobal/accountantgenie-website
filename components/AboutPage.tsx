"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

function Tag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
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
        color: onDark ? "#60A5FA" : "#1D4ED8",
        background: onDark ? "rgba(59,130,246,0.14)" : "rgba(59,130,246,0.12)",
        border: `1px solid rgba(59,130,246,${onDark ? 0.38 : 0.25})`,
        padding: "5px 12px",
        borderRadius: 100,
      }}
    >
      {children}
    </span>
  );
}

export default function About() {
  return (
    <div style={{ background: "#F5F7FA" }}>

      {/* Hero */}
      <section
        style={{
          background: "var(--grad-dark-band)",
          padding: "120px 32px 112px",
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
        <div className="ab-enter" style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <Tag tone="dark">About Accountant Genie</Tag>
          <h1
            style={{
              margin: "24px 0 20px",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Building a simpler future for finance.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
            We started Accountant Genie because finance work shouldn&#39;t be this hard. The tools exist — they just weren&#39;t designed for the way modern businesses actually operate.
          </p>
        </div>
      </section>

      {/* Who we are */}
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
          <Reveal>
            <Tag>Who we are</Tag>
            <h2
              style={{
                margin: "24px 0 20px",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0D2137",
              }}
            >
              A team that knows finance from the inside.
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, margin: "0 0 20px" }}>
              Accountant Genie was founded by accountants, engineers, and product builders who spent years watching finance teams struggle with fragmented tools, repetitive manual work, and data they couldn&#39;t fully trust.
            </p>
            <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, margin: 0 }}>
              We built the platform we always wished existed — designed for the real complexity of Australian business finance, not a simplified version of it.
            </p>
          </Reveal>

          {/* Visual — timeline-style */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { year: "2022", event: "Accountant Genie founded in Sydney, Australia" },
              { year: "2023", event: "First version launched with core reconciliation and reporting" },
              { year: "2024", event: "Expanded to support multi-entity businesses and advisory firms" },
              { year: "2026", event: "Trusted by finance teams across Australia" },
            ].map((item, i) => (
              <Reveal key={item.year} delay={i * 110} y={16}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  paddingBottom: i < 3 ? 24 : 0,
                  borderBottom: i < 3 ? "1px solid #E2E8F0" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#2563EB",
                    minWidth: 40,
                    paddingTop: 2,
                  }}
                >
                  {item.year}
                </span>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0D2137", lineHeight: 1.5 }}>{item.event}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        style={{
          background: "#fff",
          borderTop: "1px solid #E2E8F0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Reveal
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "112px 32px",
            textAlign: "center",
          }}
        >
          <Tag>Our mission</Tag>
          <blockquote
            style={{
              maxWidth: 800,
              margin: "32px auto 0",
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              color: "#0D2137",
              fontStyle: "normal",
              padding: 0,
            }}
          >
            &#34;To give every finance team in Australia the clarity, confidence, and control they deserve — without the complexity.&#34;
          </blockquote>
        </Reveal>
      </section>

      {/* Values */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 72px" }}>
          <Tag>What we stand for</Tag>
          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#0D2137",
            }}
          >
            Our values guide every decision.
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          className="values-grid"
        >
          {[
            {
              value: "Simplicity",
              body: "Every feature we build must make financial work easier — not more complicated. If it doesn't simplify, it doesn't ship.",
              num: "01",
            },
            {
              value: "Trust",
              body: "Your financial data is the foundation of your business. We treat it with rigorous security, privacy, and transparency.",
              num: "02",
            },
            {
              value: "Precision",
              body: "In finance, approximations aren't good enough. We hold ourselves to the same standard of accuracy we expect from your data.",
              num: "03",
            },
            {
              value: "Customer-first",
              body: "We're accountable to the finance professionals who rely on Accountant Genie every day. Their success is the only measure that matters.",
              num: "04",
            },
          ].map((item, i) => (
            <Reveal key={item.value} delay={(i % 2) * 110}>
            <SpotlightCard
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: "40px 44px",
                display: "flex",
                gap: 28,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 12,
                  color: "#CBD5E1",
                  flexShrink: 0,
                  paddingTop: 4,
                }}
              >
                {item.num}
              </span>
              <div>
                <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D2137" }}>{item.value}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "#64748B", lineHeight: 1.65 }}>{item.body}</p>
              </div>
            </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--grad-dark-band)",
          textAlign: "center",
          padding: "112px 32px",
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
            backgroundImage: "radial-gradient(ellipse 45% 55% at 22% 50%, rgba(59,130,246,0.11) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Reveal style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff" }}>
            Ready to see Accountant Genie in action?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: "0 0 36px", lineHeight: 1.7 }}>
            Talk to our team. We&#39;ll show you exactly how Accountant Genie can work for your business.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #0A66F5 0%, #0233A8 100%)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0855D8 0%, #01277F 100%)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0A66F5 0%, #0233A8 100%)")}
          >
            Book a Demo
          </Link>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
