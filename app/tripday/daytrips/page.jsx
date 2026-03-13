import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Testimonials from "@/components/homes/home-3/Daytripsservice";


export const metadata = {
  title: "Day Trips from Dublin – Private Chauffeur Tours | VIPtransfer.ie",
  description:
    "Tailor-made day trips from Dublin with a private driver and premium fleet. Fixed pricing, meet & greet, flight tracking, complimentary water & on‑board Wi‑Fi. Book your tour today.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/daytrips/",
  },
  openGraph: {
    title: "Day Trips from Dublin – Private Chauffeur Tours",
    description: "Tailor-made day trips with a private driver and premium fleet.",
    url: "https://viptransfer.ie/tripday/daytrips/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/day-trips.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer Day Trips from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Trips from Dublin – Private Chauffeur Tours",
    description: "Tailor-made day trips with a private driver and premium fleet.",
    images: ["/assets/imgs/og/day-trips.jpg"],
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
            <h1 className="heading-36-medium">Private Day Trips from Dublin</h1>
            <p className="text-18 color-text mt-10">Discover Ireland in comfort with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Experience Ireland’s highlights with a dedicated private driver. Choose from curated routes or design your own itinerary. Enjoy door‑to‑door service, premium vehicles, and flexible schedules tailored to you.
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