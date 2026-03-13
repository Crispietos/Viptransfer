import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Testimonials from "@/components/homes/home-3/Golf";

export const metadata = {
  title: "Golf Resort Transfers – Private Chauffeur | VIPtransfer.ie",
  description:
    "Direct transfers to Ireland’s prestigious golf resorts with a private chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/golf/",
  },
  openGraph: {
    title: "Golf Resort Transfers – Private Chauffeur",
    description:
      "Direct service to Ireland’s top golf destinations with premium vehicles.",
    url: "https://viptransfer.ie/tripday/golf/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/golf-resorts.jpg",
        width: 1200,
        height: 630,
        alt: "Golf Resort Transfers – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf Resort Transfers – Private Chauffeur",
    description:
      "Direct service to Ireland’s top golf destinations with premium vehicles.",
    images: ["/assets/imgs/og/golf-resorts.jpg"],
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
            <h1 className="heading-36-medium">Golf Resort Transfers – Private Chauffeur</h1>
            <p className="text-18 color-text mt-10">Direct service to Ireland’s top golf destinations.</p>
            <p className="text-16 color-text mt-10">
              Travel in first‑class comfort with door‑to‑door pickups, flexible timing and ample space for golf bags. Enjoy bottled water and on‑board Wi‑Fi across our premium fleet.
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