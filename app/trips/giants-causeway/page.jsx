import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";


import Giantscauseway from "@/components/otherPages/about/Giantscauseway";

export const metadata = {
  title: "Giant’s Causeway Day Trip from Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Experience Giant’s Causeway & Belfast on a private day trip from Dublin with a chauffeur. Door-to-door service, flexible schedule, premium fleet, bottled water & on-board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/trips/giants-causeway/",
  },
  openGraph: {
    title: "Giant’s Causeway Day Trip from Dublin – Private Chauffeur",
    description:
      "UNESCO-listed Giant’s Causeway with optional Belfast highlights and your personal chauffeur.",
    url: "https://viptransfer.ie/trips/giants-causeway/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/giants-causeway.jpg",
        width: 1200,
        height: 630,
        alt: "Giant’s Causeway – Private Day Trip from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giant’s Causeway Day Trip from Dublin – Private Chauffeur",
    description:
      "UNESCO-listed Giant’s Causeway with optional Belfast highlights and your personal chauffeur.",
    images: ["/assets/imgs/og/giants-causeway.jpg"],
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
            <h1 className="heading-36-medium">Giant’s Causeway – Private Day Trip from Dublin</h1>
            <p className="text-18 color-text mt-10">UNESCO‑listed hexagonal basalt columns with your personal chauffeur.</p>
            <p className="text-16 color-text mt-10">
              Visit Giant’s Causeway with optional stops at the Dark Hedges and Belfast’s highlights. Enjoy door‑to‑door service, flexible timing, and first‑class comfort in our premium fleet.
            </p>
          </div>
        </section>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Giantscauseway/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}