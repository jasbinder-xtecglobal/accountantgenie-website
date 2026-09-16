import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COMING_SOON } from "@/lib/site";

/**
 * While COMING_SOON is on, every page URL is sent to the root so nothing
 * but the "Coming soon" screen is reachable.
 *
 * Exceptions:
 *   • /policies and /policies/<slug> stay public so the legal pages can be
 *     linked from app stores, sign-up flows and partner agreements before
 *     launch. Unknown slugs still 404 (dynamicParams = false on that route).
 *   • Static assets are left alone: the matcher skips Next internals and API
 *     routes, and the extension check below skips public files such as
 *     /logo-white.svg or /icon.png so the holding page itself can still load.
 */
const PUBLIC_PREFIXES = ["/policies"];

function isPublicPath(pathname: string) {
  return PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function proxy(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();

  const { pathname } = request.nextUrl;
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  const isFile = lastSegment.includes(".");
  if (pathname === "/" || isFile || isPublicPath(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api).*)"],
};
