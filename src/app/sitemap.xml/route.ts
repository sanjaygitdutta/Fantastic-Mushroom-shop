import { generateSitemaps } from '../../lib/sitemapHelper';

export const dynamic = 'force-dynamic';

export async function GET() {
  const sitemaps = await generateSitemaps();
  
  // Format the sitemaps as a sitemap index XML
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(s => `  <sitemap>
    <loc>https://www.fantasticfood.in/sitemap/${s.id}.xml</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(sitemapIndexXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
