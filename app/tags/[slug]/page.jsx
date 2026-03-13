import { articles as allArticles } from "@/data/articles";
import Link from "next/link";

export async function generateStaticParams() {
  const allTags = [...new Set(allArticles.flatMap(article => article.tags || []))];
  return allTags.map(tag => ({ slug: tag }));
}

export default function TagPage({ params }) {
  const { slug } = params;
  const tagArticles = allArticles.filter(article => article.tags?.includes(slug));

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Tag: #{slug}</h1>
      {tagArticles.length === 0 ? (
        <p>No articles found for this tag.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tagArticles.map(article => (
            <div key={article.slug} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={article.imageSrc} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm">{article.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}