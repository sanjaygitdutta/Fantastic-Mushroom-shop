import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALL_LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'zh-CN', 'ms'];
const LANG_SEGMENTS = new Set([
  'food', 'city', 'blog', 'compare', 'recipe', 'recipes', 'directory', 
  'basket', 'chef-aika', 'meal-planner', 'festival', 'health', 
  'meal-calculator', 'savings', 'community', 'coupons', 'seasonal', 'saved'
]);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const langParam = request.nextUrl.searchParams.get('lang');

  // 1. Skip static files and internal Next.js paths
  const isStaticFile = pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot|otf|map|json|txt|xml|pdf)$/i);
  if (
    isStaticFile ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  // --- GEO-IP & URL REGION DETECTION ---
  const urlRegion = request.nextUrl.searchParams.get('region')?.toUpperCase();
  let region = (urlRegion === 'SG' || urlRegion === 'IN') ? urlRegion : request.cookies.get('user-region')?.value;
  if (!region) {
    const country = (request as any).geo?.country || 'IN';
    region = country === 'SG' ? 'SG' : 'IN';
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-region', region);
  // -------------------------------------

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
    const response = NextResponse.redirect(url, { status: 301 });
    if (urlRegion && ['SG', 'IN'].includes(urlRegion)) {
      response.cookies.set('user-region', urlRegion, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    } else if (!request.cookies.has('user-region')) {
      response.cookies.set('user-region', region, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    }
    return response;
  }

  // 1. If ?lang=XX is present, ALWAYS redirect to the clean path version /XX/path
  if (langParam && ALL_LANGUAGES.includes(langParam)) {
    let cleanPath = pathname;
    if (ALL_LANGUAGES.includes(parts[0])) {
      cleanPath = '/' + parts.slice(1).join('/');
    }
    
    const url = request.nextUrl.clone();
    url.pathname = `/${langParam}${cleanPath === '/' ? '' : cleanPath}`;
    url.searchParams.delete('lang');
    const response = NextResponse.redirect(url, { status: 301 });
    if (urlRegion && ['SG', 'IN'].includes(urlRegion)) {
      response.cookies.set('user-region', urlRegion, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    } else if (!request.cookies.has('user-region')) {
      response.cookies.set('user-region', region, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    }
    return response;
  }

  // 2. Handle paths missing a language prefix
  const hasLangPrefix = ALL_LANGUAGES.includes(parts[0]);

  if (!hasLangPrefix) {
    const cookieLang = request.cookies.get('i18next')?.value || request.cookies.get('NEXT_LOCALE')?.value;
    const targetLang = (cookieLang && ALL_LANGUAGES.includes(cookieLang)) ? cookieLang : 'en';

    let response;
    if (pathname === '/') {
      response = NextResponse.rewrite(new URL(`/${targetLang}`, request.url), { request: { headers: requestHeaders } });
    } else {
      response = NextResponse.rewrite(new URL(`/${targetLang}${pathname}${request.nextUrl.search}`, request.url), { request: { headers: requestHeaders } });
    }
    if (urlRegion && ['SG', 'IN'].includes(urlRegion)) {
      response.cookies.set('user-region', urlRegion, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    } else if (!request.cookies.has('user-region')) {
      response.cookies.set('user-region', region, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    }
    return response;
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (urlRegion && ['SG', 'IN'].includes(urlRegion)) {
    response.cookies.set('user-region', urlRegion, { maxAge: 60 * 60 * 24 * 365, path: '/' });
  } else if (!request.cookies.has('user-region')) {
    response.cookies.set('user-region', region, { maxAge: 60 * 60 * 24 * 365, path: '/' });
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  regions: ['bom1', 'sin1'],
};
