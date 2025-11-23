import { dinamicCategory } from "../types/dinamicCat";

export async function GET() {
  const baseUrl = "https://flowersbybella.ro"; //flowersbybella.vercel.app < asta am deocamndata, nu am domeniu cumparat
  const staticRoutes = [
    "",
    "/catalog"
  ];
  const dynamicRoutes = dinamicCategory.map(cat => `/catalog/${cat.slug}`);

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `<url><loc>${baseUrl}${route}</loc></url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}