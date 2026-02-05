// /functions/sitemap.xml.js
import { getHost } from './_lib.js';

/** Generate sitemap.xml dynamically for the current site */
export const onRequestGet = async ({ request }) => {
  const host = getHost(request);
  const baseUrl = `https://${host}`;

  // Get current date in ISO format (YYYY-MM-DD)
  const lastmod = new Date().toISOString().split('T')[0];

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};
