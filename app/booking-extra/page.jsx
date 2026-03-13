import BookingExtra from "@/components/booking/BookingExtra";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title: "Book Your Chauffeur – Get a Quote & Confirm | VIPtransfer.ie",
  description:
    "Get a transparent quote and book your private chauffeur in Dublin. Door‑to‑door service, flight tracking, meet & greet, bottled water & on‑board Wi‑Fi. Tolls and parking included.",
  alternates: {
    canonical: "https://viptransfer.ie/booking-extra/",
  },
  openGraph: {
    title: "Book Your Chauffeur – Get a Quote & Confirm",
    description:
      "Instant quote and secure booking with premium vehicles and professional chauffeurs.",
    url: "https://viptransfer.ie/booking-extra/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/booking-extra.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer – Booking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Chauffeur – Get a Quote & Confirm",
    description:
      "Instant quote and secure booking with premium vehicles and professional chauffeurs.",
    images: ["/assets/imgs/og/booking-extra.jpg"],
  },
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        {/* Hero / SEO heading */}
        <section className="section pt-60 pb-10">
          <div className="container-sub">
            <h1 className="heading-36-medium">Book Your Chauffeur – Get a Quote & Confirm</h1>
            <p className="text-18 color-text mt-10">Instant quote, transparent pricing.</p>
            <p className="text-16 color-text mt-10">
              Enter your pickup and drop‑off, choose your vehicle and confirm your ride. Enjoy door‑to‑door service with flight tracking, meet &amp; greet, bottled water and on‑board Wi‑Fi. Tolls and parking are included.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container-sub">
          
            <BookingExtra />
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
