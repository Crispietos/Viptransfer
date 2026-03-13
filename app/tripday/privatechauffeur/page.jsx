import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Testimonials from "@/components/homes/home-3/Testimonials";

export const metadata = {
  title: "Private Chauffeur Dublin – VIP Driver Service | VIPtransfer.ie",
  description:
    "Private chauffeur service in Dublin: airport transfers, city tours, business travel and special events. Door-to-door, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/privatechauffeur/",
  },
  openGraph: {
    title: "Private Chauffeur Dublin – VIP Driver Service",
    description:
      "Professional private driver in Dublin for airport transfers, meetings and city tours.",
    url: "https://viptransfer.ie/tripday/privatechauffeur/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/private-chauffeur.jpg",
        width: 1200,
        height: 630,
        alt: "Private Chauffeur Dublin – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chauffeur Dublin – VIP Driver Service",
    description:
      "Professional private driver in Dublin for airport transfers, meetings and city tours.",
    images: ["/assets/imgs/og/private-chauffeur.jpg"],
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
            <h1 className="heading-36-medium">Private Chauffeur Service in Dublin</h1>
            <p className="text-18 color-text mt-10">Professional driver for airport transfers, meetings and city tours.</p>
            <p className="text-16 color-text mt-10">
              Enjoy door‑to‑door service, flexible scheduling and first‑class comfort in our premium fleet. Complimentary bottled water and on‑board Wi‑Fi included on every ride.
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