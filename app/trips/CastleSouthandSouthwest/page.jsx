import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import CastleSouthandSouthwest from "@/components/otherPages/about/CastleSouthandSouthwest";

export const metadata = {
  title: "Castles of the South & Southwest – Private Day Trip from Dublin | VIPtransfer.ie",
  description:
    "Discover iconic castles and heritage sites across Ireland’s South & Southwest on a private day trip with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/CastleSouthandSouthwest/",
  },
  openGraph: {
    title: "Castles of the South & Southwest – Private Day Trip from Dublin",
    description:
      "Explore Ireland’s southern castles and scenic routes with your personal chauffeur.",
    url: "https://viptransfer.ie/trips/CastleSouthandSouthwest/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/castles-south-southwest.jpg",
        width: 1200,
        height: 630,
        alt: "Castles of the South & Southwest – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castles of the South & Southwest – Private Day Trip from Dublin",
    description:
      "Explore Ireland’s southern castles and scenic routes with your personal chauffeur.",
    images: ["/assets/imgs/og/castles-south-southwest.jpg"],
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
            <h1 className="heading-36-medium">Castles of the South & Southwest – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">Explore Ireland’s southern castles with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Enjoy a flexible, door-to-door itinerary through historic fortresses and scenic routes. Travel in first‑class comfort with complimentary bottled water and on-board Wi‑Fi.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <CastleSouthandSouthwest/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}