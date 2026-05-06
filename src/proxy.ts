import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALL_LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta'];
const LANG_SEGMENTS = new Set([
  'food', 'city', 'blog', 'compare', 'recipe', 'recipes', 'directory', 
  'basket', 'chef-aika', 'meal-planner', 'festival', 'health', 
  'meal-calculator', 'savings', 'community', 'coupons', 'seasonal', 'saved'
]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const langParam = request.nextUrl.searchParams.get('lang');

  // 1. Skip static files and internal Next.js paths
  if (
    pathname.match(/\.(.*)$/) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  const parts = pathname.split('/').filter(Boolean);

  // 2. Redirect ?lang=xx to the proper path prefix
  // e.g. /food/apple?lang=hi -> /hi/food/apple
  if (
    parts.length >= 1 &&
    LANG_SEGMENTS.has(parts[0]) &&
    langParam &&
    ALL_LANGUAGES.includes(langParam)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${langParam}/${parts.join('/')}`;
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  // 3. Cleanup ?lang= if already in the correct path
  // e.g. /hi/food/apple?lang=hi -> /hi/food/apple
  if (
    parts.length >= 2 &&
    ALL_LANGUAGES.includes(parts[0]) &&
    langParam === parts[0]
  ) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    return NextResponse.redirect(url, { status: 301 });
  }

  // 4. Handle paths missing a language prefix
  // Check if the first part of the path is already a supported language
  const hasLangPrefix = ALL_LANGUAGES.includes(parts[0]);

  if (!hasLangPrefix) {
    // If it's the root or a segment like /food/apple, rewrite to /en internally
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
