import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";


import CliffsofMoher from "@/components/otherPages/about/CliffsofMoher";

export const metadata = {
  title: "Cliffs of Moher Day Trip from Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Experience the Cliffs of Moher & The Burren on a private day trip from Dublin with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/cliffs-of-moher/",
  },
  openGraph: {
    title: "Cliffs of Moher Day Trip from Dublin – Private Chauffeur",
    description:
      "Breathtaking Atlantic views and The Burren with your personal chauffeur.",
    url: "https://viptransfer.ie/trips/cliffs-of-moher/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/cliffs-of-moher.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs of Moher – Private Day Trip from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliffs of Moher Day Trip from Dublin – Private Chauffeur",
    description:
      "Breathtaking Atlantic views and The Burren with your personal chauffeur.",
    images: ["/assets/imgs/og/cliffs-of-moher.jpg"],
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
            <h1 className="heading-36-medium">Cliffs of Moher – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">Breathtaking Atlantic cliffs with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Explore the Cliffs of Moher and The Burren at your own pace. Enjoy door-to-door service, flexible timing, and first‑class comfort in our premium fleet.
            </p>
          </div>
        </section>

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <CliffsofMoher/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}