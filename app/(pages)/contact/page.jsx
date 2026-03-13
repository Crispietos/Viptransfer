import BreadCumb from "@/components/contact/BreadCumb";
import ContactForm from "@/components/contact/ContactForm";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
export const metadata = {
  title: "Contact – VIPtransfer.ie | Private Chauffeur in Dublin",
  description:
    "Get in touch to request a quote or book your private chauffeur in Dublin. 24/7 enquiries, door‑to‑door service, flight tracking, meet & greet, bottled water & on‑board Wi‑Fi.",
  alternates: {
    canonical: "https://viptransfer.ie/contact/",
  },
  openGraph: {
    title: "Contact – VIPtransfer.ie | Private Chauffeur in Dublin",
    description:
      "Request a quote or book your private chauffeur. Fast replies, premium fleet and professional drivers.",
    url: "https://viptransfer.ie/contact/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer.ie – Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – VIPtransfer.ie | Private Chauffeur in Dublin",
    description:
      "Request a quote or book your private chauffeur. Fast replies, premium fleet and professional drivers.",
    images: ["/assets/imgs/og/contact.jpg"],
  },
};
export default function page() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <BreadCumb />

        {/* Hero / SEO heading */}
        <section className="section pt-60 pb-10">
          <div className="container-sub">
            <h1 className="heading-36-medium">Contact VIPtransfer.ie</h1>
            <p className="text-18 color-text mt-10">Request a quote or book your private chauffeur.</p>
            <p className="text-16 color-text mt-10">
              We’ll respond promptly and help you plan airport transfers, city tours, business travel or special events. Door‑to‑door service, flight tracking, meet &amp; greet, bottled water and on‑board Wi‑Fi.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer1 />
    </>
  );
}
