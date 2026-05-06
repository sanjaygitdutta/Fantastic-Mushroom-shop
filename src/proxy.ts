import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta'];
const ALL_LANGUAGES = new Set(['en', 'hi', 'bn', 'mr', 'te', 'ta']);
const LANG_SEGMENTS = new Set(['food', 'city', 'blog', 'compare', 'recipe', 'recipes']);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const langParam = request.nextUrl.searchParams.get('lang');

  // Avoid processing static files, images, api routes, _next internals
  if (
    pathname.match(/\.(.*)$/) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  const parts = pathname.split('/').filter(Boolean);

  // ── Fix 1: Root path with ?lang=xx query param ─────────────────────────────
  // e.g. /food/butter-chicken?lang=hi  →  301 redirect to /hi/food/butter-chicken
  // e.g. /city/mumbai?lang=mr          →  301 redirect to /mr/city/mumbai
  if (
    parts.length >= 1 &&
    LANG_SEGMENTS.has(parts[0]) &&
    langParam &&
    ALL_LANGUAGES.has(langParam)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${langParam}/${parts.join('/')}`;
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── Fix 2: Correct /{lang}/path but still has ?lang= query param ──────────
  // e.g. /hi/food/butter-chicken?lang=hi  →  301 redirect /hi/food/butter-chicken
  if (
    parts.length >= 2 &&
    ALL_LANGUAGES.has(parts[0]) &&
    langParam
  ) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── Original logic: rewrite missing locale paths to /en/ internally ────────
  // e.g. /food/butter-chicken (no lang) → internally served as /en/food/butter-chicken
  // This preserves the existing URL-rewrite behavior for the browser/app.
  const pathnameIsMissingLocale = SUPPORTED_LANGUAGES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/en${pathname === '/' ? '' : pathname}${request.nextUrl.search}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Do not run the middleware on static files and api routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
