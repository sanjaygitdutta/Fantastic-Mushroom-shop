import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGUAGES = ['hi', 'bn', 'mr', 'te', 'ta'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = SUPPORTED_LANGUAGES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If the pathname is missing a locale (e.g. /recipe/123 instead of /hi/recipe/123),
  // we rewrite the URL to /en/recipe/123 internally.
  // The user still sees /recipe/123 in their browser.
  if (pathnameIsMissingLocale) {
    // Avoid rewriting static files, images, api routes
    if (
      pathname.match(/\.(.*)$/) ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next')
    ) {
      return NextResponse.next();
    }

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
