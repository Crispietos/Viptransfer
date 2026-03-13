import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import BlarneyCastle from "@/components/otherPages/about/BlarneyCastle";

export const metadata = {
  title: "Blarney Castle Day Trip from Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Experience Blarney Castle & Gardens on a private day trip from Dublin with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/Blarney-Castle/",
  },
  openGraph: {
    title: "Blarney Castle Day Trip from Dublin – Private Chauffeur",
    description:
      "Kiss the Blarney Stone and explore the gardens with your personal chauffeur.",
    url: "https://viptransfer.ie/trips/Blarney-Castle/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/blarney-castle.jpg",
        width: 1200,
        height: 630,
        alt: "Blarney Castle – Private Day Trip from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blarney Castle Day Trip from Dublin – Private Chauffeur",
    description:
      "Kiss the Blarney Stone and explore the gardens with your personal chauffeur.",
    images: ["/assets/imgs/og/blarney-castle.jpg"],
  },
};


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
       
        {/* Hero / SEO heading */}
        <section className="section pt-60 pb-10">
          <div className="container-sub">
            <h1 className="heading-36-medium">Blarney Castle – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">Kiss the Blarney Stone and explore the gardens with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Enjoy a comfortable, door-to-door experience with a flexible schedule and first‑class vehicles. Create your own pace with optional stops along the way.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <BlarneyCastle/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}