import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Glendaloughandpowerscourt from "@/components/otherPages/about/Glendaloughandpowerscourt";

export const metadata = {
  title: "Glendalough & Powerscourt Day Trip from Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Discover Glendalough Monastic Site and Powerscourt Gardens on a private day trip from Dublin with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/glendalough-and-powerscourt/",
  },
  openGraph: {
    title: "Glendalough & Powerscourt Day Trip from Dublin – Private Chauffeur",
    description:
      "Wicklow Mountains highlights with your personal chauffeur.",
    url: "https://viptransfer.ie/trips/glendalough-and-powerscourt/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/glendalough-powerscourt.jpg",
        width: 1200,
        height: 630,
        alt: "Glendalough & Powerscourt – Private Day Trip from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glendalough & Powerscourt Day Trip from Dublin – Private Chauffeur",
    description:
      "Wicklow Mountains highlights with your personal chauffeur.",
    images: ["/assets/imgs/og/glendalough-powerscourt.jpg"],
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
            <h1 className="heading-36-medium">Glendalough & Powerscourt – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">Wicklow Mountains, Glendalough valley and Powerscourt Gardens with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Enjoy a flexible, door-to-door itinerary through monastic ruins and one of Ireland’s most celebrated gardens. Travel in first‑class comfort with complimentary bottled water and on‑board Wi‑Fi.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Glendaloughandpowerscourt/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}