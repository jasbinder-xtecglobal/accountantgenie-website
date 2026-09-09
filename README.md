# Accountant Genie

Marketing site for Accountant Genie — financial clarity for modern Australian businesses.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        Root layout — fonts, metadata, Navbar + Footer
  globals.css       Design tokens, base styles
  icon.svg          Brand mark used as the favicon
  page.tsx          /
  about/page.tsx    /about
  features/page.tsx /features
  contact/page.tsx  /contact
components/
  Navbar.tsx        Sticky header, frosted on scroll, with a reading-progress bar
  Footer.tsx
  Reveal.tsx        Scroll-into-view fade + lift wrapper (IntersectionObserver)
  SpotlightCard.tsx Card that lifts and tracks the cursor with a mint highlight
  HomePage.tsx      Page bodies (client components — hover/scroll interactions)
  AboutPage.tsx
  FeaturesPage.tsx
  ContactPage.tsx
```

Route files under `app/` are server components that own the per-page `metadata`; each
renders its matching client component from `components/`.

## Design system

Defined in `app/globals.css` (`@theme`) and applied via inline styles in the components.

| Token | Value |
| --- | --- |
| navy | `#0D2137` |
| teal | `#145F5A` |
| mint | `#4EC994` |
| mint-light | `#D4F5E5` |
| off-white | `#F5F7F5` |
| charcoal | `#141E26` |
| muted | `#64748B` |
| border | `#E2E8E4` |

Typefaces are loaded with `next/font/google` in `app/layout.tsx` and exposed as
`--font-jakarta` (Plus Jakarta Sans) and `--font-dm-mono` (DM Mono).

## Motion

Keyframes and helper classes live in the "Motion" block of `app/globals.css`; nothing
is pulled in from an animation library.

| Class / component | Effect |
| --- | --- |
| `<Reveal>` | Fades and lifts children in when scrolled into view. `delay` staggers siblings. |
| `<SpotlightCard>` | Hover lift plus a mint radial glow that follows the cursor. |
| `.ab-enter` | On-load entrance for above-the-fold content; stagger with `animationDelay`. |
| `.ab-drift` | Slow-drifting colour wash behind hero and CTA panels. |
| `.ab-float` / `.ab-float-slow` | Gentle opposing-phase bob for the hero chips. |
| `.ab-hero-card` | Hero product card: rises in, then settles into a float. |
| `.ab-pulse` | Soft pulsing ring on the "live" status dots. |
| `.ab-sweep` | Light sweep across a button on hover (needs a `.ab-sweep-shine` child). |
| `.ab-stagger` / `.ab-bar` | Children that cascade or grow once their `Reveal` fires. |

Everything is disabled under `prefers-reduced-motion: reduce`, and a `<noscript>` rule in
the root layout unhides revealed content when JavaScript is off.

## Notes

- The contact form is presentation only — `handleSubmit` shows a success state and does
  not post anywhere yet. Wire it to a route handler or form service before launch.
- All four routes are statically prerendered.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
