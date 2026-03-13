import Blogs2 from "@/components/blog/Blogs2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Link from "next/link"; // Potrzebne do Breadcrumbs

export const metadata = {
  title: "Blog – Chauffeur Tips & Travel Guides | VIPtransfer.ie",
  description:
    "Insights on private chauffeur services, Dublin day trips, airport transfers and travel planning. Premium fleet, door‑to‑door service, meet & greet, bottled water & on‑board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/blog/",
  },
  openGraph: {
    title: "Blog – Chauffeur Tips & Travel Guides",
    description:
      "Articles on private chauffeur services, day trips and airport transfers in Dublin.",
    url: "https://viptransfer.ie/blog/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/blog.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer.ie – Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Chauffeur Tips & Travel Guides",
    description:
      "Articles on private chauffeur services, day trips and airport transfers in Dublin.",
    images: ["/assets/imgs/og/blog.jpg"],
  },
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <section className="section pt-60 pb-60"> {/* Dodałem padding góra/dół */}
          <div className="container-sub">
            
            {/* Nowy, ładniejszy nagłówek sekcji */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              
              {/* Breadcrumbs - mała nawigacja */}
              <div 
                className="text-14 color-text mb-15" 
                style={{ textTransform: "uppercase", letterSpacing: "1px", opacity: 0.7 }}
              >
                <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link> 
                <span style={{ margin: "0 10px" }}>&bull;</span> 
                <span>Blog & Travel Guides</span>
              </div>

              {/* Główny tytuł */}
              <h1 className="heading-36-medium mb-20">
                Chauffeur Tips & Travel Inspiration
              </h1>

              {/* Opis z ograniczoną szerokością dla lepszej czytelności */}
              <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <p className="text-18 color-text">
                  Advice, routes and inspiration for comfortable travel across Ireland.
                </p>
                <p className="text-16 color-text mt-10" style={{ opacity: 0.85 }}>
                  Explore insights on private chauffeur services, Dublin day trips, airport transfers and travel planning. 
                  Discover curated routes, pricing tips and vehicle choices to make your journey seamless.
                </p>
              </div>

              {/* Opcjonalna linia ozdobna pod tekstem */}
              <div 
                style={{ 
                  width: "60px", 
                  height: "2px", 
                  backgroundColor: "#E0E0E0", // Delikatny szary, możesz zmienić na złoty jeśli pasuje do brandu
                  margin: "40px auto 0 auto" 
                }} 
              />
            </div>

            {/* Lista wpisów */}
            <Blogs2 />
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}