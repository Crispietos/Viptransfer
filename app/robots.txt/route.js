export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://viptransfer.ie/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}