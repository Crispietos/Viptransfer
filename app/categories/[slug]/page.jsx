import { allArticles } from "@/data/articles";

// Funkcja generująca dostępne kategorie
export async function generateStaticParams() {
  // Zbierz unikalne kategorie ze wszystkich artykułów
  const categories = Array.from(
    new Set(
      allArticles
        .filter(article => article.category)
        .map(article => article.category.toLowerCase().replace(/\s+/g, "-"))
    )
  );

  // Zwróć listę slugów
  return categories.map(category => ({
    slug: category,
  }));
}

export default function CategoryPage({ params }) {
  const categorySlug = params.slug.toLowerCase();
  const filteredArticles = allArticles.filter(
    article =>
      article.category &&
      article.category.toLowerCase().replace(/\s+/g, "-") === categorySlug
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Articles in category: {categorySlug}
      </h1>
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div
              key={article.slug}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
              <p className="text-gray-600 mt-2">{article.shortDescription}</p>
              <a
                href={`/blog/${article.slug}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No articles found for this category.</p>
      )}
    </div>
  );
}