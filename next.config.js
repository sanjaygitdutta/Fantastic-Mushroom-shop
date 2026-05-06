/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    const langs = ['hi', 'bn', 'mr', 'te', 'ta'];
    const segments = ['food', 'city', 'blog', 'compare', 'recipe'];

    const redirects = [];

    // 1. Root paths WITHOUT lang prefix → redirect to /en/
    //    e.g. /food/butter-chicken → /en/food/butter-chicken
    for (const seg of segments) {
      redirects.push({
        source: `/${seg}/:path*`,
        destination: `/en/${seg}/:path*`,
        permanent: true,
      });
    }

    // 2. Root /city/:slug → /en/city/:slug
    redirects.push({
      source: '/city/:path*',
      destination: '/en/city/:path*',
      permanent: true,
    });

    // 3. Paths with ?lang=xx query param but no lang in the path
    //    e.g. /food/butter-chicken?lang=hi → /hi/food/butter-chicken
    //    These are handled via middleware (query params can't be matched in Next.js redirects)
    //    — handled below via next.js has matcher

    // 4. For each language, redirect /{lang}/path?lang={lang} → /{lang}/path (remove duplicate query param)
    for (const lang of langs) {
      for (const seg of segments) {
        redirects.push({
          source: `/${lang}/${seg}/:path*`,
          has: [{ type: 'query', key: 'lang', value: lang }],
          destination: `/${lang}/${seg}/:path*`,
          permanent: true,
        });
      }
      redirects.push({
        source: `/${lang}/city/:path*`,
        has: [{ type: 'query', key: 'lang', value: lang }],
        destination: `/${lang}/city/:path*`,
        permanent: true,
      });
      redirects.push({
        source: `/${lang}/blog/:path*`,
        has: [{ type: 'query', key: 'lang', value: lang }],
        destination: `/${lang}/blog/:path*`,
        permanent: true,
      });
    }

    return redirects;
  },

  async headers() {
    return [
      {
        // Apply to all page routes (HTML responses), but NOT to static assets
        // which Next.js already handles efficiently via file hashes.
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // no-cache = always check server for freshness before using cache
            // must-revalidate = if cache expired, must get fresh copy before serving
            // This ensures returning users ALWAYS see your latest deployment.
            value: 'no-cache, must-revalidate',
          },
        ],
      },
    ];
  },
}

export default nextConfig;

