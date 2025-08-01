import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // Get all work projects
  const projects = await getCollection('work');

  // Define all static pages
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/about/', priority: 0.9, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/work/', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/privacy/', priority: 0.3, changefreq: 'yearly', lastmod: new Date().toISOString() },
  ];

  // Generate project pages
  const projectPages = projects.map((project: any) => ({
    url: `/work/${project.id}/`,
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: project.data.publishDate.toISOString(),
  }));

  // Combine all pages
  const allPages = [...staticPages, ...projectPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>https://tomeeagle.github.io${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}; 