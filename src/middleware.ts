import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const protectedRoutes = ["/profile"];

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const sessionCookie = getSessionCookie(req);

  function generateNonce(length = 16): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Buffer.from(array).toString('base64');
  }
  const nonce = generateNonce();

  const res = NextResponse.next();

  const csp = `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\n/g, "");

  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("x-nonce", nonce);

  const isLoggedIn = !!sessionCookie;
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.startsWith("/auth");

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
