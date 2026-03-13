import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import Pay from "@/components/Pay"; // Upewnij się, że ścieżka jest poprawna

export const metadata = {
  title: "Secure Payment – PayPal & Cards | VIPtransfer.ie",
  description:
    "Complete your booking securely via PayPal or debit/credit card. Encrypted checkout, instant confirmation, no hidden fees.",
  alternates: {
    canonical: "https://viptransfer.ie/pay/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Secure Payment – PayPal & Cards",
    description:
      "Fast, encrypted checkout with PayPal or card. Instant confirmation.",
    url: "https://viptransfer.ie/pay/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/payment.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer – Secure Payment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Payment – PayPal & Cards",
    description:
      "Fast, encrypted checkout with PayPal or card. Instant confirmation.",
    images: ["/assets/imgs/og/payment.jpg"],
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
            <h1 className="heading-36-medium">Secure Payment</h1>
            <p className="text-18 color-text mt-10">PayPal or card — fast & secure checkout.</p>
            <p className="text-16 color-text mt-10">
              Complete your booking using your PayPal account or any major debit/credit card. Payments are processed via PayPal’s encrypted gateway. You’ll receive an email confirmation immediately after a successful transaction.
            </p>
          </div>
        </section>
        {/* Sekcja Terms and Conditions */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Pay/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}