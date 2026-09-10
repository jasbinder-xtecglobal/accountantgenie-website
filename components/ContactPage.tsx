"use client";

import { useState } from "react";
import Reveal from "./Reveal";

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

function Field({
  label,
  type = "text",
  name,
  placeholder,
  required,
  value,
  onChange,
  textarea,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const base: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-jakarta)",
    fontSize: 15,
    color: "#141E26",
    background: "#fff",
    border: `1.5px solid ${focus ? "#0D2137" : "#E2E8F0"}`,
    borderRadius: 10,
    padding: textarea ? "14px 16px" : "13px 16px",
    outline: "none",
    transition: "border-color 0.15s ease",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? 140 : undefined,
    boxSizing: "border-box",
  };
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 600,
          color: "#0D2137",
          marginBottom: 8,
        }}
      >
        {label} {required && <span style={{ color: "#2563EB" }}>*</span>}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={base}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={base}
          required={required}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#F5F7FA" }}>

      {/* Hero */}
      <section
        style={{
          background: "var(--grad-dark-band)",
          padding: "80px 32px 72px",
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
        <div className="ab-enter" style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
          <Tag tone="dark">Get in touch</Tag>
          <h1
            style={{
              margin: "24px 0 16px",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Let&#39;s talk.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
            Have questions about Accountant Genie? Want to see a live demo? We&#39;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px 112px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <Reveal>
            <h2 style={{ margin: "0 0 16px", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D2137" }}>
              We&#39;re here to help.
            </h2>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.75, margin: "0 0 48px" }}>
              Whether you&#39;re evaluating Accountant Genie for your business, need product support, or just want to learn more — reach out and we&#39;ll get back to you promptly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                {
                  icon: (
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1D4ED8" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
                  ),
                  label: "Email",
                  value: "hello@accountantgenie.com.au",
                },
                {
                  icon: (
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" stroke="#1D4ED8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  ),
                  label: "Location",
                  value: "Sydney, New South Wales, Australia",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      background: "rgba(29,78,216,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 3px", fontSize: 12, fontWeight: 600, color: "#94A3B0", textTransform: "uppercase", letterSpacing: "0.07em" }}>{item.label}</p>
                    <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0D2137" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Book demo box */}
            <div
              style={{
                marginTop: 48,
                background: "#0D2137",
                borderRadius: 16,
                padding: "28px 28px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
                Prefer a live walkthrough?
              </p>
              <p style={{ margin: "0 0 20px", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                Book a 30-minute personalised demo with our team. We&#39;ll show you Accountant Genie on your actual workflow — not a generic slide deck.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "11px 20px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #0A66F5 0%, #0233A8 100%)",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0855D8 0%, #01277F 100%)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0A66F5 0%, #0233A8 100%)")}
              >
                Book a Demo
              </a>
            </div>
          </Reveal>

          {/* Right — form */}
          {submitted ? (
            <div
              className="ab-enter"
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 20,
                padding: "56px 48px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "rgba(59,130,246,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M6 14l5 5 11-11"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 30,
                      strokeDashoffset: 30,
                      animation: "ab-draw 0.5s cubic-bezier(0.22,1,0.36,1) 0.25s forwards",
                    }}
                  />
                </svg>
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D2137" }}>Message sent.</h3>
              <p style={{ margin: 0, fontSize: 16, color: "#64748B", lineHeight: 1.65 }}>
                Thank you for reaching out. We&#39;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <Reveal delay={110}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 20,
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <Field label="Full name" name="name" placeholder="Alex Johnson" required value={form.name} onChange={handleChange} />
                <Field label="Email address" type="email" name="email" placeholder="alex@company.com.au" required value={form.email} onChange={handleChange} />
              </div>
              <Field label="Company" name="company" placeholder="Your company name" value={form.company} onChange={handleChange} />
              <Field label="Message" name="message" placeholder="Tell us about your business and what you're looking for..." required value={form.message} onChange={handleChange} textarea />

              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  background: "#0D2137",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 24px",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  marginTop: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2137")}
              >
                Send Message
              </button>

              <p style={{ margin: 0, fontSize: 12, color: "#94A3B0", textAlign: "center", lineHeight: 1.5 }}>
                We respect your privacy. Your details will never be shared with third parties.
              </p>
            </form>
            </Reveal>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
