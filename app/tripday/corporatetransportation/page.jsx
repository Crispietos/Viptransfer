import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Corporatetransportation from "@/components/homes/home-3/Corporatetransportation";

export const metadata = {
  title: "Corporate Transportation Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Professional corporate transportation in Dublin with a private chauffeur. Door-to-door service, flexible scheduling, premium executive fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/corporatetransportation/",
  },
  openGraph: {
    title: "Corporate Transportation Dublin – Private Chauffeur",
    description:
      "Executive transfers for meetings, events and airport runs with your personal chauffeur.",
    url: "https://viptransfer.ie/tripday/corporatetransportation/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/corporate-transportation.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Transportation – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Transportation Dublin – Private Chauffeur",
    description:
      "Executive transfers for meetings, events and airport runs with your personal chauffeur.",
    images: ["/assets/imgs/og/corporate-transportation.jpg"],
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
            <h1 className="heading-36-medium">Corporate Transportation – Private Chauffeur in Dublin</h1>
            <p className="text-18 color-text mt-10">Executive transfers for meetings, events and airport runs.</p>
            <p className="text-16 color-text mt-10">
              Arrive on time and in comfort with door-to-door service, flexible scheduling, and our premium executive fleet.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Corporatetransportation/>
          </div>
        </section>

     

     
       
      </main>
      <Footer />
    </>
  );
}