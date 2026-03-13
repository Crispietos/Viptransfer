import { articles } from "@/data/articles";

export async function GET() {
  const baseUrl = "https://viptransfer.ie";

  const staticUrls = [
    "/",
    "/services/",
    "/day-trip/",
    "/contact/",
    "/faq/",
    "/prices/",
    "/privacy-policy/",
    "/terms/",
    "/about/",
  ];

  const staticRoutes = staticUrls.map((path) => {
    const fullPath = path === "/" ? path : path.endsWith("/") ? path : `${path}/`;
    return `<url><loc>${baseUrl}${fullPath}</loc></url>`;
  });

  const blogRoutes = articles.map((article) => {
    return `<url><loc>${baseUrl}/blog/${article.slug}/</loc></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticRoutes, ...blogRoutes].join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}