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
