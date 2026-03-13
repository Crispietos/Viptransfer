import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import Link from "next/link";

// --- METADATA (Bez zmian - działa dobrze) ---
export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return {
      title: "Article not found | VIPTransfer.ie",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | VIPTransfer.ie`,
    description: article.description || "Read our latest insights and news.",
    openGraph: {
      title: `${article.title} | VIPTransfer.ie`,
      description: article.description || "Discover more on VIPTransfer.ie",
      images: [
        {
          url: article.imageSrc,
          width: 900,
          height: 500,
          alt: article.title,
        },
      ],
    },
    keywords: article.keywords || ["VIP transfers", "chauffeur services", "luxury transport", "Ireland"],
    alternates: {
      canonical: `https://viptransfer.ie/blog/${slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug
  }));
}

// --- GŁÓWNY KOMPONENT ---
export default function BlogArticle({ params }) {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);
  
  // Logika do następnego/poprzedniego artykułu
  const currentIndex = articles.findIndex((art) => art.slug === slug);
  const nextArticle = articles[currentIndex + 1];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  if (!article) return notFound();

  return (
    <>
      <Header1 />
      <MobailHeader1 />
      
      <main className="main bg-white">
        <section className="section pt-60 pb-60">
          <div className="container-sub" style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            {/* 1. SCHEMA SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": article.title,
                  "image": article.imageSrc,
                  "author": {
                    "@type": "Organization",
                    "name": "VIPTransfer.ie"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "VIPTransfer.ie",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://viptransfer.ie/assets/imgs/template/logo.webp"
                    }
                  },
                  "datePublished": article.date || "2025-01-01",
                  "mainEntityOfPage": `https://viptransfer.ie/blog/${slug}/`
                }),
              }}
            />

            {/* 2. BREADCRUMBS - Mała nawigacja na górze */}
            <div className="mb-20">
               <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0, fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
                 <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
                 <li>/</li>
                 <li><Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link></li>
                 <li>/</li>
                 <li style={{ color: "#000", fontWeight: 500 }}>Article</li>
               </ul>
            </div>

            {/* 3. TYTUŁ I TAGI */}
            <div className="text-center mb-40">
              {/* Tagi */}
              <div className="mb-15">
                 {article.tags && article.tags.map((tag, index) => (
                    <span key={index} style={{ 
                      display: "inline-block", 
                      padding: "4px 12px", 
                      backgroundColor: "#f5f5f5", 
                      borderRadius: "20px", 
                      fontSize: "12px", 
                      textTransform: "uppercase", 
                      margin: "0 5px",
                      color: "#333"
                    }}>
                      {tag}
                    </span>
                 ))}
              </div>

              <h1 className="heading-44-medium color-text mb-20">
                {article.title}
              </h1>

              {/* Data */}
              <div className="text-16 color-text" style={{ opacity: 0.6 }}>
                {article.date} {article.monthYear} &bull; VIPTransfer.ie
              </div>
            </div>

            {/* 4. OBRAZEK GŁÓWNY */}
            <div style={{ position: "relative", width: "100%", height: "auto", borderRadius: "16px", overflow: "hidden", marginBottom: "50px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <Image
                src={article.imageSrc}
                alt={article.title}
                width={900}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority // Ładujemy to szybko dla SEO (LCP)
              />
            </div>

            {/* 5. TREŚĆ ARTYKUŁU (Z poprawionym formatowaniem) */}
            <div className="article-content text-18 color-text" style={{ lineHeight: "1.8" }}>
              {article.content}
            </div>

            {/* 6. CALL TO ACTION - Box sprzedażowy */}
            <div style={{ 
              marginTop: "60px", 
              padding: "40px", 
              backgroundColor: "#111", 
              borderRadius: "16px", 
              color: "#fff",
              textAlign: "center"
            }}>
              <h3 className="heading-32-medium color-white mb-15">Plan Your Journey Today</h3>
              <p className="text-18 color-white mb-30" style={{ opacity: 0.9 }}>
                Ready to experience this route in comfort? Book your private chauffeur transfer with VIPTransfer.ie.
              </p>
              <Link href="/#booking" className="btn btn-primary" style={{ padding: "15px 30px", fontSize: "16px" }}>
                Get an Instant Quote
              </Link>
            </div>

            {/* 7. NAWIGACJA DÓŁ (Poprzedni / Następny) */}
            <div style={{ marginTop: "50px", borderTop: "1px solid #eee", paddingTop: "30px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
              
              {prevArticle ? (
                <div style={{ maxWidth: "45%" }}>
                   <div className="text-14" style={{ opacity: 0.5, marginBottom: "5px" }}>&larr; Previous</div>
                   <Link href={`/blog/${prevArticle.slug}`} style={{ fontSize: "18px", fontWeight: "600", color: "#111", textDecoration: "none" }}>
                     {prevArticle.title}
                   </Link>
                </div>
              ) : <div></div>}

              {nextArticle && (
                <div style={{ maxWidth: "45%", textAlign: "right" }}>
                   <div className="text-14" style={{ opacity: 0.5, marginBottom: "5px" }}>Next &rarr;</div>
                   <Link href={`/blog/${nextArticle.slug}`} style={{ fontSize: "18px", fontWeight: "600", color: "#111", textDecoration: "none" }}>
                     {nextArticle.title}
                   </Link>
                </div>
              )}

            </div>

          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}