import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

export const metadata = {
  title: "Ancient & Medieval Wonders – Private Day Trip from Dublin | VIPtransfer.ie",
  description:
    "Explore Ireland’s ancient and medieval landmarks on a private day trip with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/AncientandMedievalWonders/",
  },
  openGraph: {
    title: "Ancient & Medieval Wonders – Private Day Trip from Dublin",
    description:
      "Discover monasteries, castles and heritage sites with your personal chauffeur.",
    url: "https://viptransfer.ie/trips/AncientandMedievalWonders/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/ancient-medieval.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient & Medieval Wonders – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient & Medieval Wonders – Private Day Trip from Dublin",
    description:
      "Discover monasteries, castles and heritage sites with your personal chauffeur.",
    images: ["/assets/imgs/og/ancient-medieval.jpg"],
  },
};

import AncientandMedievalWonders from "@/components/otherPages/about/AncientandMedievalWonders";


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / SEO heading */}
        <section className="section pt-60 pb-10">
          <div className="container-sub">
            <h1 className="heading-36-medium">Ancient & Medieval Wonders – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">Step into Ireland’s past with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              From monastic ruins to Norman castles, discover iconic sites at your own pace. Enjoy door-to-door service, flexible timing, and first‑class comfort in our premium fleet.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <AncientandMedievalWonders/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}