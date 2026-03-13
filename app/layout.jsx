"use client";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";
import "../public/assets/scss/style.scss";
import "../public/assets/css/global.css";
import Script from "next/script";
import { register } from "swiper/element/bundle";

// ---> 1. DODAJ IMPORT MODALA TUTAJ <---
import PromoModal from "@/components/common/PromoModal";

const DM_SansFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--dm-sans-font",
});

register();

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ładowanie Bootstrapa na kliencie
      import("bootstrap/dist/js/bootstrap.esm")
        .then(() => {
          // Bootstrap JS załadowany
        })
        .catch((err) => console.error("Błąd podczas ładowania Bootstrap:", err));
    }
  }, []);

  useEffect(() => {
    import("wowjs").then(({ WOW }) => {
      const wowInstance = new WOW({
        live: false,
        mobile: false,
        offset: 100,
      });
      wowInstance.init();
    });
  }, []);

  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Private airport transfers and chauffeur service in Ireland. Reliable rides from Dublin Airport and beyond – book Vip Transfer for business or leisure."
        />
        {/* App name + icons for iOS/Android */}
        <meta name="application-name" content="Vip Transfer" />
        <meta name="apple-mobile-web-app-title" content="Vip Transfer" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:site_name" content="Vip Transfer" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <meta name="theme-color" content="#0b0b0b" />
        <title>Vip Transfer – Private Airport Transfers & Chauffeur Service</title>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KT5993M');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={DM_SansFont.variable}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KT5993M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* 1) Wczytaj skrypt Google Maps (raz, globalnie)
          2) Z parametrem libraries=places – by działały dynamiczne podpowiedzi
          3) Możesz dodać language/en i region/IE, jeśli chcesz
        */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&language=en&region=IE`}
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("✅ Google Maps script loaded globally in RootLayout!");
          }}
        />

        {/* Render aplikacji */}
        {children}

        {/* ---> 2. WYWOŁAJ MODAL TUTAJ (na samym dole body) <--- */}
        <PromoModal />
      </body>
    </html>
  );
}