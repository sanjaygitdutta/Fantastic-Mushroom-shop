import { getSitemapData, entriesToXml } from '../../../lib/sitemapHelper';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ __metadata_id__: string }> | { __metadata_id__: string } }
) {
  const resolvedParams = await props.params;
  const idParam = resolvedParams.__metadata_id__;
  const chunkId = idParam.endsWith('.xml') ? idParam.slice(0, -4) : idParam;
  
  try {
    const entries = await getSitemapData(chunkId);
    if (!entries || entries.length === 0) {
      return new Response('Sitemap chunk not found', { status: 404 });
    }
    const xml = entriesToXml(entries);
    
    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (err) {
    console.error(`Error generating sitemap chunk ${chunkId}:`, err);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
