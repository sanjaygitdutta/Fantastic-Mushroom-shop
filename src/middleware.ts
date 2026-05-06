import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LANGS = new Set(['en', 'hi', 'bn', 'mr', 'te', 'ta']);
const LANG_SEGMENTS = new Set(['food', 'city', 'blog', 'compare', 'recipe', 'recipes']);

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Split path: ['', 'food', 'butter-chicken'] or ['', 'hi', 'food', 'butter-chicken']
  const parts = pathname.split('/').filter(Boolean);

  const langParam = searchParams.get('lang');

  // ── Case 1: Root path without lang prefix and has ?lang= query param ──────
  // e.g. /food/butter-chicken?lang=hi  →  /hi/food/butter-chicken
  // e.g. /city/mumbai?lang=mr          →  /mr/city/mumbai
  // e.g. /blog/my-post?lang=bn         →  /bn/blog/my-post
  if (
    parts.length >= 1 &&
    LANG_SEGMENTS.has(parts[0]) &&
    langParam &&
    SUPPORTED_LANGS.has(langParam)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${langParam}/${parts.join('/')}`;
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── Case 2: Root path without lang prefix and NO ?lang= ──────────────────
  // e.g. /food/butter-chicken  →  /en/food/butter-chicken
  // e.g. /city/mumbai          →  /en/city/mumbai
  if (
    parts.length >= 1 &&
    LANG_SEGMENTS.has(parts[0]) &&
    !langParam
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/en/${parts.join('/')}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── Case 3: Correct lang prefix but ?lang= query param still present ──────
  // e.g. /hi/food/butter-chicken?lang=hi  →  /hi/food/butter-chicken
  if (
    parts.length >= 2 &&
    SUPPORTED_LANGS.has(parts[0]) &&
    langParam
  ) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on all relevant routes except static assets and Next internals
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|og-image.jpg|logo.png|robots.txt|sitemap.xml).*)',
  ],
};
