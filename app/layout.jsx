"use client";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";
import Script from "next/script"; // <-- importujemy Script
import "../public/assets/scss/style.scss";
import "../public/assets/css/global.css";

import { register } from "swiper/element/bundle";

const DM_SansFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--dm-sans-font",
});

register();

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm")
        .then(() => {
          // Bootstrap JS załadowany na kliencie
        })
        .catch((err) => console.error("Błąd podczas ładowania Bootstrap:", err));
    }
  }, []);

  useEffect(() => {
    import("wowjs").then(({ WOW }) => {
      const wowInstance = new WOW({
        live: false,
        mobile: false,
        offset: 100, // Zwiększa odstęp od dołu ekranu
      });
      wowInstance.init();
    });
  }, []);

  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="VIPTransfer - Ekskluzywny transport" />
        <title>VIPTransfer - Ekskluzywne Podróże</title>

        {/* Globalne wczytanie Google Maps z biblioteką places */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={DM_SansFont.variable}>{children}</body>
    </html>
  );
}