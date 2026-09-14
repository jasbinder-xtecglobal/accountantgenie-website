/* ──────────────────────────────────────────────
   Site-wide switches

   COMING_SOON
   While the product is still in development the
   whole site shows a single "Coming soon" page:
     • /            renders <ComingSoon />
     • every other  URL redirects to /  (see proxy.ts)
     • Navbar / Footer are hidden (see app/layout.tsx)
     • pages are marked noindex for search engines

   Flip this to `false` to launch the full site.
   ────────────────────────────────────────────── */
export const COMING_SOON = true;
