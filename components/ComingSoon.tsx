import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  ChartColumn,
  LayoutDashboard,
  Users,
  FileText,
  RefreshCcw,
  Settings,
  Search,
  Bell,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Wallet,
  Receipt,
  ClipboardList,
  UserPlus,
  Landmark,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────── palette ───────────────────────── */
const BLUE_SOFT = "#60A5FA";
const PANEL_BORDER = "rgba(96,165,250,0.20)";
const TEXT_DIM = "rgba(255,255,255,0.6)";

/* Design width of the dashboard mock. It is laid out at this width and then
   scaled to the column it sits in (see .cs-scale), so it never reflows. */
const DASH_W = 1120;
/* Compact (phone) variant: narrower sidebar, 2×2 stats, chart only. */
const DASH_W_M = 680;

/* ───────────────────────── small pieces ───────────────────────── */
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="cs-feature" style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <span
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          color: BLUE_SOFT,
          background: "rgba(59,130,246,0.14)",
          border: "1px solid rgba(96,165,250,0.32)",
          boxShadow: "0 0 24px rgba(37,130,255,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 3, textAlign: "left" }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{title}</span>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.68)" }}>{text}</span>
      </span>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  delta,
  up,
  tint,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta?: string;
  up?: boolean;
  tint: string;
  link?: string;
}) {
  return (
    <div
      style={{
        background: "rgba(16,36,70,0.85)",
        border: `1px solid ${PANEL_BORDER}`,
        borderRadius: 14,
        padding: "18px 18px 16px",
        display: "flex",
        gap: 14,
        minWidth: 0,
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          background: tint,
          color: "#fff",
          flexShrink: 0,
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        }}
      >
        {icon}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span style={{ fontSize: 12.5, color: TEXT_DIM }}>{label}</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
          {value}
        </span>
        {delta ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              fontWeight: 600,
              color: up ? "#34D399" : "#F87171",
            }}
          >
            {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {delta}
          </span>
        ) : link ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: BLUE_SOFT, fontWeight: 600 }}>
            {link} <ArrowRight size={11} />
          </span>
        ) : null}
      </span>
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        borderRadius: 10,
        fontSize: 13.5,
        fontWeight: active ? 600 : 500,
        color: active ? "#fff" : "rgba(255,255,255,0.62)",
        background: active ? "rgba(59,130,246,0.18)" : "transparent",
        borderLeft: active ? `2px solid ${BLUE_SOFT}` : "2px solid transparent",
      }}
    >
      <span style={{ color: active ? BLUE_SOFT : "inherit", display: "grid" }}>{icon}</span>
      {label}
    </div>
  );
}

function Activity({ icon, title, when, tint }: { icon: React.ReactNode; title: string; when: string; tint: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: tint,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 13.5, color: "#fff", fontWeight: 600, whiteSpace: "nowrap" }}>{title}</span>
        <span style={{ fontSize: 11.5, color: TEXT_DIM }}>{when}</span>
      </span>
    </div>
  );
}

/* ───────────────────────── dashboard mock ───────────────────────── */
function Dashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={{
        width: compact ? DASH_W_M : DASH_W,
        borderRadius: 24,
        background: "linear-gradient(180deg, rgba(12,28,58,0.98) 0%, rgba(8,20,44,0.98) 100%)",
        border: "2px solid rgba(120,195,255,1)",
        boxShadow:
          "0 0 8px 1px rgba(130,200,255,1), 0 0 24px 4px rgba(80,170,255,0.8), 0 0 60px 12px rgba(50,140,255,0.45), 0 -10px 90px 20px rgba(60,150,255,0.35)",
        display: "grid",
        gridTemplateColumns: compact ? "176px 1fr" : "210px 1fr",
        overflow: "hidden",
        fontFamily: "var(--font-jakarta)",
        position: "relative",
      }}
    >
      {/* Lit top edge */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "5%",
          right: "5%",
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(190,225,255,1), transparent)",
          boxShadow: "0 0 18px 2px rgba(120,180,255,0.9)",
        }}
      />

      {/* Sidebar */}
      <aside
        style={{
          padding: "22px 14px",
          borderRight: `1px solid ${PANEL_BORDER}`,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          background: "rgba(6,16,36,0.55)",
        }}
      >
        <Image
          src="/logo-white.svg"
          alt=""
          width={140}
          height={55}
          style={{ height: 52, width: "auto", marginBottom: 20, marginLeft: 6 }}
        />
        <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" active />
        <NavItem icon={<Users size={16} />} label="Clients" />
        <NavItem icon={<FileText size={16} />} label="Invoicing" />
        <NavItem icon={<RefreshCcw size={16} />} label="Reconciliation" />
        <NavItem icon={<ChartColumn size={16} />} label="Reports" />
        <NavItem icon={<Settings size={16} />} label="Settings" />
      </aside>

      {/* Main */}
      <div style={{ padding: "18px 24px 24px", display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, paddingBottom: 14, borderBottom: `1px solid ${PANEL_BORDER}` }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 14px",
              borderRadius: 999,
              background: "rgba(16,36,70,0.85)",
              border: `1px solid ${PANEL_BORDER}`,
              color: TEXT_DIM,
              fontSize: 13,
              width: compact ? 200 : 240,
            }}
          >
            <Search size={14} /> Search anything…
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Bell size={16} color={TEXT_DIM} />
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#fff", fontWeight: 600 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg,#3B82F6,#1D4ED8)",
                  fontSize: 10.5,
                  fontWeight: 700,
                }}
              >
                JD
              </span>
              {!compact && (
                <>
                  John Doe
                  <ChevronDown size={14} color={TEXT_DIM} />
                </>
              )}
            </span>
          </span>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: compact ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 14 }}>
          <Stat icon={<Wallet size={18} />} label="Total Revenue" value="$126,430" delta="+12%" up tint="linear-gradient(135deg,#10B981,#059669)" />
          <Stat icon={<Receipt size={18} />} label="Total Expenses" value="$38,210" delta="-6%" tint="linear-gradient(135deg,#F87171,#DC2626)" />
          <Stat icon={<Users size={18} />} label="Active Clients" value="24" delta="+3" up tint="linear-gradient(135deg,#34D399,#0EA5E9)" />
          <Stat icon={<ClipboardList size={18} />} label="Pending Tasks" value="8" link="View all" tint="linear-gradient(135deg,#FBBF24,#F59E0B)" />
        </div>

        {/* Chart + activity */}
        <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1.8fr 1fr", gap: 14, minWidth: 0 }}>
          <div
            style={{
              background: "rgba(16,36,70,0.85)",
              border: `1px solid ${PANEL_BORDER}`,
              borderRadius: 14,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minWidth: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Revenue Overview</span>
              <span
                style={{
                  fontSize: 12,
                  color: TEXT_DIM,
                  border: `1px solid ${PANEL_BORDER}`,
                  borderRadius: 8,
                  padding: "5px 10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(8,20,44,0.6)",
                }}
              >
                Last 6 months <ChevronDown size={12} />
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: 10.5, color: TEXT_DIM, paddingBottom: 18 }}>
                {["$40k", "$30k", "$20k", "$10k"].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              <div>
                <svg viewBox="0 0 520 150" width="100%" style={{ display: "block", overflow: "visible", height: "auto" }} aria-hidden>
                  <defs>
                    <linearGradient id="cs-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="cs-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#22B4FD" />
                    </linearGradient>
                  </defs>
                  {[5, 45, 85, 125].map((y) => (
                    <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                  ))}
                  <path
                    d="M0 120 C 40 110, 60 96, 90 92 S 140 104, 170 88 S 220 62, 260 70 S 320 92, 360 64 S 430 24, 470 36 S 505 48, 520 40 L 520 150 L 0 150 Z"
                    fill="url(#cs-area)"
                  />
                  <path
                    d="M0 120 C 40 110, 60 96, 90 92 S 140 104, 170 88 S 220 62, 260 70 S 320 92, 360 64 S 430 24, 470 36 S 505 48, 520 40"
                    fill="none"
                    stroke="url(#cs-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="cs-draw"
                  />
                  <circle cx="470" cy="36" r="5" fill="#fff" stroke="#3B82F6" strokeWidth="2.5" />
                </svg>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: TEXT_DIM, paddingTop: 8 }}>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: compact ? "none" : "flex",
              background: "rgba(16,36,70,0.85)",
              border: `1px solid ${PANEL_BORDER}`,
              borderRadius: 14,
              padding: 18,
              flexDirection: "column",
              gap: 16,
              minWidth: 0,
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Recent Activity</span>
            <Activity icon={<FileText size={15} />} title="Invoice #1042" when="2 hours ago" tint="linear-gradient(135deg,#60A5FA,#2563EB)" />
            <Activity icon={<UserPlus size={15} />} title="Client added" when="5 hours ago" tint="linear-gradient(135deg,#10B981,#059669)" />
            <Activity icon={<Landmark size={15} />} title="Bank sync completed" when="1 day ago" tint="linear-gradient(135deg,#A78BFA,#7C3AED)" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── page ───────────────────────── */
export default function ComingSoon() {
  return (
    <div
      className="cs-page"
      style={{
        position: "relative",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        color: "#fff",
        fontFamily: "var(--font-jakarta)",
        background:
          "radial-gradient(800px 500px at 50% -10%, rgba(56,120,255,0.18) 0%, transparent 60%), linear-gradient(180deg, #040b20 0%, #06112e 55%, #030918 100%)",
      }}
    >
      {/* Backdrop grid */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 75%)",
          }}
        />
        <div
          className="ab-drift"
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            width: 900,
            height: 600,
            marginLeft: -450,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,130,255,0.22) 0%, transparent 65%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* Header */}
      <header
        className="cs-wrap cs-header"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "26px 32px 0",
        }}
      >
        <Link href="/" aria-label="Accountant Genie" style={{ display: "flex" }}>
          <Image src="/logo-white.svg" alt="Accountant Genie" width={195} height={76} priority style={{ height: 76, width: "auto" }} />
        </Link>
      </header>

      {/* Hero */}
      <section
        className="cs-wrap cs-hero"
        style={{
          position: "relative",
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 26,
          padding: "24px 32px 0",
        }}
      >
        <h1
          className="cs-rise cs-title"
          style={{
            margin: 0,
            fontSize: "clamp(56px, 7.5vw, 110px)",
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            textShadow: "0 0 60px rgba(59,140,255,0.35)",
          }}
        >
          Coming{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4C9BFF 0%, #22B4FD 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            soon
          </span>
        </h1>

        <p
          className="cs-rise cs-lead"
          style={{
            animationDelay: "0.2s",
            margin: 0,
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 680,
          }}
        >
          Smarter tools. Clearer insights. A more connected way to work.{" "}
          <br className="cs-br" />
          Accountant Genie is coming soon — built for modern Australian businesses.
        </p>

        <div className="cs-rise cs-features" style={{ animationDelay: "0.3s", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 40 }}>
          <Feature icon={<Zap size={22} />} title="Save Time" text="Automate the busy work" />
          <span className="cs-divider" aria-hidden />
          <Feature icon={<ShieldCheck size={22} />} title="Stay Compliant" text="Built for Australian businesses" />
          <span className="cs-divider" aria-hidden />
          <Feature icon={<ChartColumn size={22} />} title="Grow Smarter" text="Actionable insights, always" />
        </div>
      </section>

      {/* Product showcase — the dashboard rises from the bottom edge and is
          cut off by the viewport, sitting on a glowing horizon. */}
      <section
        className="cs-showcase cs-rise"
        style={{ animationDelay: "0.4s", position: "relative", flex: "0 0 auto", marginTop: 48, display: "flex", flexDirection: "column" }}
      >
        <div className="cs-fx" aria-hidden>
        {/* Dome: a large, clearly-shaped lighter-navy disc whose rim passes
            just above the dashboard's top edge, with a soft glowing rim. */}
        <div
          aria-hidden
          className="cs-dome"
          style={{
            position: "absolute",
            left: "50%",
            top: 26,
            width: "140vw",
            height: "140vw",
            marginLeft: "-70vw",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(40,105,230,0.75) 0%, rgba(28,78,190,0.7) 12%, rgba(18,52,140,0.7) 30%, rgba(11,34,96,0.72) 55%, rgba(8,24,70,0.75) 100%)",
            boxShadow: "0 -6px 40px 6px rgba(60,140,255,0.45), 0 -20px 120px 30px rgba(40,120,255,0.25)",
            filter: "blur(2px)",
            pointerEvents: "none",
          }}
        />
        {/* Hot bloom concentrated on the dashboard's top edge */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: 18,
            width: "min(78vw, 1040px)",
            height: 90,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(120,200,255,0.95) 0%, rgba(70,160,255,0.55) 35%, rgba(40,120,255,0.15) 65%, transparent 85%)",
            filter: "blur(26px)",
            pointerEvents: "none",
          }}
        />
        </div>
        <div className="cs-wrap cs-visual" style={{ position: "relative", padding: "0 32px", display: "flex", flexDirection: "column" }}>
          <div className="cs-stage">
            <div className="cs-scale cs-scale-desktop">
              <Dashboard />
            </div>
            <div className="cs-scale cs-scale-mobile">
              <Dashboard compact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer — pinned to the bottom edge, fading in over the cut-off dashboard */}
      <footer
        className="cs-footer"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          padding: "56px 32px 18px",
          background: "linear-gradient(180deg, rgba(3,9,24,0) 0%, rgba(3,9,24,0.92) 40%, #030918 100%)",
          pointerEvents: "none",
        }}
      >
        <div
          className="cs-wrap cs-footer-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
            textAlign: "center",
            fontSize: 13.5,
            fontWeight: 500,
            color: "rgba(255,255,255,0.86)",
            textShadow: "0 1px 12px rgba(0,0,0,0.6)",
            pointerEvents: "auto",
          }}
        >
          <span>© 2026 Accountant Genie</span>
          <span aria-hidden style={{ opacity: 0.5 }}>·</span>
          <span>
            Powered by{" "}
            <a
              href="https://sparkview.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-footer-link"
              style={{ color: BLUE_SOFT, fontWeight: 600, textDecoration: "none" }}
            >
              Sparkview Pty Ltd
            </a>
          </span>
          <span aria-hidden className="cs-footer-dot" style={{ opacity: 0.5 }}>·</span>
          <Link
            href="/policies"
            className="cs-footer-link"
            style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(255,255,255,0.35)", fontWeight: 600 }}
          >
            Privacy &amp; Policies
          </Link>
        </div>
      </footer>

      <style>{`
        .cs-wrap { width: 100%; max-width: 1440px; margin: 0 auto; }
        .cs-rise { animation: ab-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .cs-dot {
          width: 10px; height: 10px; border-radius: 50%; background: #7CC0FF;
          animation: cs-pulse 1.8s ease-out infinite;
        }
        @keyframes cs-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(96,165,250,0.65); }
          100% { box-shadow: 0 0 0 10px rgba(96,165,250,0); }
        }
        .cs-draw { stroke-dasharray: 900; stroke-dashoffset: 900; animation: ab-draw 2s 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .cs-divider { width: 1px; height: 48px; background: rgba(255,255,255,0.14); margin: 0 40px; flex-shrink: 0; }
        .cs-footer-link { transition: color 0.15s ease; }
        .cs-footer-link:hover { color: #fff !important; text-decoration-color: #7CC0FF !important; }

        /* Product visual: fixed ${DASH_W}px layout, scaled to the column width.
           .cs-visual is a size container so 100cqw = its width. The stage
           fills whatever height is left under the copy, so the dashboard is
           cut off by the bottom of the viewport (as in the design) and the
           page itself never scrolls. tan(atan2(a, b)) = a / b as a unitless
           number — CSS calc() can't divide two lengths directly. */
        .cs-visual { container-type: inline-size; }
        /* No overflow clipping here — the page itself (height: 100dvh,
           overflow: hidden) cuts the dashboard at the bottom edge, so the
           glow around the frame can spread freely in every direction. */
        /* On desktop the showcase is a fixed slice of the viewport (the copy
           above it is vertically centred in the remaining space) and the
           page edge cuts the dashboard off. */
        .cs-stage { position: relative; display: flex; justify-content: center; height: 36vh; min-height: 220px; padding-top: 40px; }
        .cs-scale {
          flex-shrink: 0;
          transform-origin: top center;
          transform: perspective(1600px) scale(min(1, tan(atan2(100cqw, ${DASH_W}px)))) rotateX(7deg);
        }
        .cs-scale-mobile { display: none; }

        /* Short desktop windows: tighten vertical rhythm so nothing scrolls */
        @media (min-width: 861px) and (max-height: 820px) {
          .cs-header img { height: 60px !important; }
          .cs-hero { gap: 18px !important; padding-top: 12px !important; }
          .cs-title { font-size: clamp(48px, 6vw, 84px) !important; }
          .cs-lead { font-size: 17px !important; }
          .cs-showcase { margin-top: 28px !important; }
          .cs-stage { height: 30vh; min-height: 180px; }
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .cs-title { font-size: clamp(52px, 9vw, 92px) !important; }
          .cs-divider { margin: 0 24px; }
          .cs-features { flex-wrap: wrap; row-gap: 18px; }
        }
        /* ── Small tablets / phones: content may be taller than the screen,
              so let the page grow and scroll here instead of clipping ── */
        @media (max-width: 860px) {
          .cs-page { height: auto !important; min-height: 100dvh; }
          .cs-header { padding: 20px 24px 0 !important; }
          .cs-header img { height: 64px !important; }
          .cs-hero { flex: 0 0 auto !important; padding: 40px 24px 0 !important; gap: 22px !important; }
          .cs-lead { font-size: 17px !important; }
          .cs-br { display: none; }
          /* Three columns, icon above the text, thin dividers between */
          .cs-features { display: flex !important; flex-wrap: nowrap !important; align-items: flex-start !important; width: 100%; margin: 12px 0 0 !important; }
          .cs-feature { flex: 1 1 0; flex-direction: column; text-align: center; gap: 14px !important; padding: 0 6px; }
          .cs-feature > span:last-child { align-items: center; text-align: center !important; }
          .cs-feature > span:last-child > span:first-child { white-space: normal !important; font-size: 16px !important; }
          .cs-feature > span:last-child > span:last-child { font-size: 13px !important; line-height: 1.4; }
          .cs-divider { display: block; height: 140px; margin: 0 !important; align-self: stretch; }
          .cs-showcase { margin-top: 44px !important; }
          .cs-footer { padding: 36px 24px 14px !important; }
          .cs-footer-row { font-size: 12.5px !important; row-gap: 6px !important; }
          .cs-footer-dot { display: none; }
          .cs-visual { padding: 0 20px !important; }
          /* Compact dashboard, cut off by the page edge, glow bleeding past the sides */
          .cs-stage { height: calc(100cqw * 0.95); min-height: 0; overflow: hidden; padding: 40px 80px 0; margin: 0 -80px; }
          .cs-scale-desktop { display: none; }
          .cs-scale-mobile { display: block; transform: perspective(1200px) scale(tan(atan2(100cqw, ${DASH_W_M}px))) rotateX(6deg); }
        }
        /* ── Phones ── */
        @media (max-width: 600px) {
          .cs-header { padding: 18px 20px 0 !important; }
          .cs-header img { height: 56px !important; }
          .cs-hero { padding: 36px 20px 0 !important; }
          .cs-title { font-size: clamp(44px, 13vw, 60px) !important; }
          .cs-lead { font-size: 16px !important; }
          .cs-feature > span:first-child { width: 56px !important; height: 56px !important; }
          .cs-feature > span:last-child > span:first-child { font-size: 15px !important; }
          .cs-feature > span:last-child > span:last-child { font-size: 12.5px !important; }
          .cs-visual { padding: 0 16px !important; }
          .cs-showcase { margin-top: 36px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-rise, .cs-dot, .cs-draw, .ab-drift { animation: none !important; }
          .cs-draw { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
