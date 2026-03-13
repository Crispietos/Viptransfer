import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";


import Testimonials from "@/components/homes/home-3/Wedding";

export const metadata = {
  title: "Wedding Car Service Dublin – Private Chauffeur | VIPtransfer.ie",
  description:
    "Elegant wedding car service in Dublin with a private chauffeur. First‑class vehicles, door‑to‑door service, flexible schedule, bottled water & on‑board Wi‑Fi. Tolls and parking included.",
  alternates: {
    canonical: "https://viptransfer.ie/tripday/wedding/",
  },
  openGraph: {
    title: "Wedding Car Service Dublin – Private Chauffeur",
    description:
      "Let us be part of your special day — luxury vehicles and professional chauffeurs.",
    url: "https://viptransfer.ie/tripday/wedding/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/wedding-car.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Car Service – VIPtransfer.ie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Car Service Dublin – Private Chauffeur",
    description:
      "Let us be part of your special day — luxury vehicles and professional chauffeurs.",
    images: ["/assets/imgs/og/wedding-car.jpg"],
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
            <h1 className="heading-36-medium">Wedding Car Service – Private Chauffeur in Dublin</h1>
            <p className="text-18 color-text mt-10">Let us be part of your special day.</p>
            <p className="text-16 color-text mt-10">
              Arrive in style with first‑class vehicles such as Mercedes S‑Class or Audi A8. Our service includes meet &amp; greet, waiting time, tolls and parking, plus complimentary bottled water and on‑board Wi‑Fi.
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