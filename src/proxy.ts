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
  const hasLangPrefix = ALL_LANGUAGES.includes(parts[0]);

  if (!hasLangPrefix) {
    // Detect user preference from cookie
    const cookieLang = request.cookies.get('i18next')?.value || request.cookies.get('NEXT_LOCALE')?.value;
    const targetLang = (cookieLang && ALL_LANGUAGES.includes(cookieLang)) ? cookieLang : 'en';

    // A. For the ROOT homepage (/) -> Use REWRITE to avoid loop and keep it clean
    if (pathname === '/') {
      return NextResponse.rewrite(new URL(`/${targetLang}`, request.url));
    }

    // B. For main segments (/basket, /food, etc.) -> Use REDIRECT (301) for SEO
    if (parts.length > 0 && LANG_SEGMENTS.has(parts[0])) {
      const url = request.nextUrl.clone();
      url.pathname = `/${targetLang}${pathname}`;
      return NextResponse.redirect(url, { status: 301 });
    }

    // C. Fallback for other paths -> internal rewrite to default
    return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Do not run the middleware on static files and api routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
