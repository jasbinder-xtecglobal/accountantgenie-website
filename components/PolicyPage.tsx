"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Clock, Mail, Printer, Search } from "lucide-react";
import { POLICY_ICONS } from "./policyIcons";
import { CONTACT_EMAIL, policies, type Block, type Policy, type Term } from "@/lib/policies";

/* ──────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────── */

const NAVY = "#0D2137";
const TEAL = "#145F5A";
const MINT = "#4EC994";
const TEXT = "#3F4C5A";
const MUTED = "#64748B";
const LINE = "#E2E8E4";

function isTerms(b: Block): b is { terms: Term[] } {
  return typeof b === "object" && !Array.isArray(b) && "terms" in b;
}

function SubHeading({ text }: { text: string }) {
  return (
    <h3 style={{ margin: "26px 0 10px", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.35, color: NAVY }}>
      {text}
    </h3>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || ids.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ──────────────────────────────────────────────
   Blocks
   ────────────────────────────────────────────── */

function Paragraph({ text }: { text: string }) {
  return <p style={{ margin: "0 0 14px", fontSize: 15.5, lineHeight: 1.75, color: TEXT }}>{text}</p>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 18px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, k) => (
        <li key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15.5, lineHeight: 1.7, color: TEXT }}>
          <span
            aria-hidden
            style={{ flexShrink: 0, width: 7, height: 7, borderRadius: 999, background: MINT, marginTop: 9 }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TermCard({ t }: { t: Term }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "18px 18px 18px 16px",
        borderRadius: 12,
        background: "#fff",
        border: `1px solid ${LINE}`,
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: 34,
          height: 34,
          borderRadius: 9,
          background: "rgba(78,201,148,0.14)",
          color: TEAL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {t.term.charAt(0).toUpperCase()}
      </span>
      <div style={{ minWidth: 0 }}>
        <dt style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.35, color: NAVY }}>
          {t.term}
        </dt>
        <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: TEXT }}>{t.definition}</dd>
      </div>
    </div>
  );
}

/* Decorative stacked-documents illustration */
function DocIllustration({ Icon }: { Icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  const sheet: React.CSSProperties = {
    position: "absolute",
    width: 104,
    height: 128,
    borderRadius: 12,
    background: "#fff",
    border: `1px solid ${LINE}`,
    boxShadow: "0 10px 30px rgba(13,33,55,0.08)",
  };
  const lines = [44, 60, 52, 36];
  return (
    <div aria-hidden className="pp-illo" style={{ position: "relative", width: 200, height: 170, flexShrink: 0, justifySelf: "end" }}>
      <div
        style={{
          position: "absolute",
          inset: -30,
          borderRadius: "50%",
          background: "radial-gradient(circle at 60% 55%, rgba(78,201,148,0.22) 0%, rgba(78,201,148,0) 68%)",
        }}
      />
      <div style={{ ...sheet, left: 30, top: 18, transform: "rotate(-7deg)", background: "#E9F6EF", border: "1px solid #D4F5E5", boxShadow: "none" }} />
      <div style={{ ...sheet, left: 52, top: 8 }}>
        <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {lines.map((w, i) => (
            <span key={i} style={{ display: "block", width: w, height: 6, borderRadius: 3, background: i === 0 ? "#BFEBD6" : "#E6ECE8" }} />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 136,
          top: 96,
          width: 50,
          height: 50,
          borderRadius: 13,
          background: "linear-gradient(160deg, #1B7A6E 0%, #145F5A 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 24px rgba(20,95,90,0.35), 0 0 0 4px #fff",
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

export default function PolicyPage({ policy }: { policy: Policy }) {
  const { title, sections } = policy;
  const Icon = POLICY_ICONS[policy.icon];
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);
  const hasContent = sections.length > 0;
  const hasTerms = sections.some((s) => s.body.some(isTerms));
  const isGlossary = policy.slug === "glossary";

  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("all");

  const letters = useMemo(() => {
    const set = new Set<string>();
    sections.forEach((s) => s.body.forEach((b) => isTerms(b) && b.terms.forEach((t) => set.add(t.term.charAt(0).toUpperCase()))));
    return Array.from(set).sort();
  }, [sections]);

  const q = query.trim().toLowerCase();
  const matches = (t: Term) =>
    (letter === "all" || t.term.charAt(0).toUpperCase() === letter) &&
    (q === "" || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));

  const index = policies.findIndex((p) => p.slug === policy.slug);
  const prev = index > 0 ? policies[index - 1] : null;
  const next = index < policies.length - 1 ? policies[index + 1] : null;

  const card: React.CSSProperties = {
    background: "#fff",
    borderRadius: 16,
    border: `1px solid ${LINE}`,
    boxShadow: "0 1px 2px rgba(13,33,55,0.03)",
  };

  return (
    <div style={{ background: "#F5F7F5", minHeight: "60vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px 80px" }}>
        <div
          className="pp-layout"
          style={{
            display: "grid",
            gridTemplateColumns: hasContent ? "260px minmax(0, 1fr)" : "minmax(0, 1fr)",
            gap: 20,
            alignItems: "start",
          }}
        >
          {/* ── Sidebar ── */}
          {hasContent && (
            <aside className="pp-side" style={{ position: "sticky", top: 84, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ ...card, padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "4px 4px 12px" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "rgba(78,201,148,0.14)",
                      color: TEAL,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: "0 0 2px", fontSize: 14.5, fontWeight: 700, color: NAVY, letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                      {title}
                    </p>
                    <p style={{ margin: 0, fontSize: 12, color: MUTED, lineHeight: 1.4 }}>
                      {isGlossary ? "Quickly find definitions and key terms." : "Browse this policy by section."}
                    </p>
                  </div>
                </div>

                {hasTerms && (
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "9px 12px",
                      borderRadius: 10,
                      background: "#F1F4F2",
                      marginBottom: 10,
                    }}
                  >
                    <Search size={14} strokeWidth={2.2} color="#94A3B0" aria-hidden />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={isGlossary ? "Search in glossary..." : "Search definitions..."}
                      aria-label="Search terms"
                      style={{
                        flex: 1,
                        minWidth: 0,
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        fontFamily: "var(--font-jakarta)",
                        fontSize: 13,
                        color: NAVY,
                      }}
                    />
                  </label>
                )}

                <nav aria-label="On this page">
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                    {sections.map((s, i) => {
                      const isActive = active === s.id;
                      return (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "9px 10px",
                              borderRadius: 10,
                              fontSize: 14,
                              fontWeight: isActive ? 700 : 500,
                              color: NAVY,
                              background: isActive ? "rgba(78,201,148,0.16)" : "transparent",
                              textDecoration: "none",
                              transition: "background 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive) e.currentTarget.style.background = "#F1F4F2";
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                width: 26,
                                height: 26,
                                borderRadius: 7,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.02em",
                                background: isActive ? "#3DB882" : "#E9EEEB",
                                color: isActive ? "#fff" : NAVY,
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ flex: 1, minWidth: 0 }}>{s.title}</span>
                            <ChevronRight size={15} strokeWidth={2} color={isActive ? "#3DB882" : "#94A3B0"} aria-hidden />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Need a hand */}
              <div style={{ ...card, background: "#EEF8F3", border: "1px solid #D4F5E5", padding: "18px 18px 16px" }}>
                <span
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "rgba(78,201,148,0.22)",
                    color: TEAL,
                    marginBottom: 12,
                  }}
                >
                  <Mail size={16} strokeWidth={2.2} />
                </span>
                <p style={{ margin: "0 0 4px", fontSize: 14.5, fontWeight: 700, color: NAVY }}>Need a hand?</p>
                <p style={{ margin: "0 0 14px", fontSize: 13, lineHeight: 1.55, color: MUTED }}>
                  Questions about this policy? Our team replies within one business day.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                      background: TEAL,
                      textDecoration: "none",
                      padding: "10px 14px",
                      borderRadius: 9,
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0F4C48")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = TEAL)}
                  >
                    <Mail size={14} strokeWidth={2.2} aria-hidden />
                    Email us
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-jakarta)",
                      color: NAVY,
                      background: "#fff",
                      border: `1px solid ${LINE}`,
                      padding: "10px 14px",
                      borderRadius: 9,
                      cursor: "pointer",
                      transition: "border-color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = TEAL)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = LINE)}
                  >
                    <Printer size={14} strokeWidth={2.2} aria-hidden />
                    Print this policy
                  </button>
                </div>
              </div>
            </aside>
          )}

          {/* ── Content ── */}
          <div style={{ minWidth: 0 }}>
            <article className="pp-article" style={{ ...card, padding: "36px 40px 28px" }}>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, marginBottom: 28 }}>
                <Link
                  href="/policies"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, color: MUTED, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                >
                  <ArrowLeft size={12} strokeWidth={2.2} aria-hidden />
                  All policies
                </Link>
                <ChevronRight size={12} color="#CBD5D1" aria-hidden />
                <span style={{ color: NAVY, fontWeight: 600 }}>{title}</span>
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: MUTED }}>
                  <Clock size={12} strokeWidth={2} color={MINT} aria-hidden />
                  Updated {policy.lastUpdated}
                </span>
              </nav>

              {hasContent ? (
                sections.map((s, i) => {
                  const termBlocks = s.body.filter(isTerms);
                  const sectionHasTerms = termBlocks.length > 0;
                  const illustrated = i === 0 && !sectionHasTerms;
                  return (
                    <section
                      key={s.id}
                      id={s.id}
                      className={illustrated ? "pp-illustrated" : undefined}
                      style={{
                        scrollMarginTop: 96,
                        paddingBottom: 32,
                        marginBottom: 32,
                        borderBottom: i === sections.length - 1 ? "none" : `1px solid ${LINE}`,
                        display: "flow-root",
                      }}
                    >
                      {illustrated && (
                        <div className="pp-illo-wrap" style={{ float: "right", margin: "0 0 12px 40px" }}>
                          <DocIllustration Icon={Icon} />
                        </div>
                      )}
                      <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p
                            style={{
                              margin: "0 0 6px",
                              fontFamily: "var(--font-dm-mono)",
                              fontSize: 11,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: TEAL,
                              fontWeight: 600,
                            }}
                          >
                            Section {String(i + 1).padStart(2, "0")}
                          </p>
                          <h2
                            style={{
                              margin: "0 0 18px",
                              display: "inline-block",
                              fontSize: 28,
                              fontWeight: 800,
                              letterSpacing: "-0.025em",
                              lineHeight: 1.2,
                              color: NAVY,
                              paddingBottom: 10,
                              borderBottom: `3px solid ${MINT}`,
                            }}
                          >
                            {s.title}
                          </h2>
                        </div>

                        {sectionHasTerms && letters.length > 1 && (
                          <label style={{ position: "relative", flexShrink: 0, marginTop: 22 }}>
                            <select
                              value={letter}
                              onChange={(e) => setLetter(e.target.value)}
                              aria-label="Filter terms by letter"
                              style={{
                                appearance: "none",
                                WebkitAppearance: "none",
                                fontFamily: "var(--font-jakarta)",
                                fontSize: 13,
                                fontWeight: 500,
                                color: NAVY,
                                background: "#fff",
                                border: `1px solid ${LINE}`,
                                borderRadius: 999,
                                padding: "8px 34px 8px 14px",
                                cursor: "pointer",
                              }}
                            >
                              <option value="all">All terms</option>
                              {letters.map((l) => (
                                <option key={l} value={l}>
                                  Starts with {l}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              size={14}
                              strokeWidth={2}
                              color={MUTED}
                              aria-hidden
                              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                            />
                          </label>
                        )}
                      </div>

                      {s.body.map((block, j) => {
                        if (typeof block === "string") return <Paragraph key={j} text={block} />;
                        if (Array.isArray(block)) return <Bullets key={j} items={block} />;
                        if ("heading" in block) return <SubHeading key={j} text={block.heading} />;
                        const visible = block.terms.filter(matches);
                        return visible.length ? (
                          <dl
                            key={j}
                            className="pp-terms"
                            style={{ margin: "4px 0 6px", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                          >
                            {visible.map((t) => (
                              <TermCard key={t.term} t={t} />
                            ))}
                          </dl>
                        ) : (
                          <p key={j} style={{ margin: "4px 0 6px", fontSize: 14, color: MUTED, fontStyle: "italic" }}>
                            No terms match your search in this section.
                          </p>
                        );
                      })}
                      </div>
                    </section>
                  );
                })
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 260 }}>
                    <p style={{ margin: "0 0 6px", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: TEAL, fontWeight: 600 }}>
                      Coming soon
                    </p>
                    <h2 style={{ margin: "0 0 12px", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: NAVY }}>
                      This policy is being finalised
                    </h2>
                    <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: TEXT }}>
                      The full text of our {title} will be published here shortly. If you need a copy in the meantime, please email{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: TEAL, fontWeight: 600, textDecoration: "none" }}>
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                  <DocIllustration Icon={Icon} />
                </div>
              )}
            </article>

            {/* Prev / next */}
            <nav
              aria-label="Other policies"
              style={{ marginTop: 16, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}
            >
              {prev ? (
                <Link
                  href={`/policies/${prev.slug}`}
                  className="pp-pager-link"
                  style={{ ...card, display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 16px", fontSize: 14, fontWeight: 600, color: NAVY, textDecoration: "none" }}
                >
                  <ArrowLeft size={15} strokeWidth={2.2} color={TEAL} aria-hidden />
                  {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/policies/${next.slug}`}
                  className="pp-pager-link"
                  style={{ ...card, display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 16px", fontSize: 14, fontWeight: 600, color: NAVY, textDecoration: "none", marginLeft: "auto" }}
                >
                  {next.title}
                  <ArrowRight size={15} strokeWidth={2.2} color={TEAL} aria-hidden />
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>

      <style>{`
        .pp-pager-link:hover { border-color: ${MINT} !important; }
        input[type="search"]::-webkit-search-cancel-button { -webkit-appearance: none; }
        @media (max-width: 1024px) {
          .pp-layout { grid-template-columns: 1fr !important; }
          .pp-side { position: static !important; }
        }
        @media (max-width: 760px) {
          .pp-terms { grid-template-columns: 1fr !important; }
          .pp-illo-wrap { display: none !important; }
          .pp-article { padding: 24px 20px 16px !important; }
        }
        @media print {
          .pp-side, header, footer, nav[aria-label="Other policies"] { display: none !important; }
          .pp-article { box-shadow: none !important; border: none !important; }
        }
      `}</style>
    </div>
  );
}
