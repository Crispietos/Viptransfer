import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Testimonials from "@/components/homes/home-3/Citytours";

export const metadata = {
  title: "City Tours Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Discover Dublin with a private driver: tailored city tours, flexible schedule, premium fleet, meet & greet, bottled water and on‑board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/citytours/",
  },
  openGraph: {
    title: "City Tours Dublin – Private Chauffeur",
    description:
      "Tailored Dublin city tours with your personal chauffeur and premium vehicles.",
    url: "https://viptransfer.ie/tripday/citytours/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/city-tours.jpg",
        width: 1200,
        height: 630,
        alt: "Dublin City Tours – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Tours Dublin – Private Chauffeur",
    description:
      "Tailored Dublin city tours with your personal chauffeur and premium vehicles.",
    images: ["/assets/imgs/og/city-tours.jpg"],
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
            <h1 className="heading-36-medium">Dublin City Tours – Private Chauffeur</h1>
            <p className="text-18 color-text mt-10">Explore Dublin’s highlights with your personal driver.</p>
            <p className="text-16 color-text mt-10">
              Enjoy a tailored itinerary at your pace — from historic landmarks to hidden gems. Door‑to‑door service, flexible timing and first‑class comfort in our premium fleet.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Testimonials />
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}