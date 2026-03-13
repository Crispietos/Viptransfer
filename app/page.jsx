import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Sekcja wspólna dla strony głównej

import Cta from "@/components/homes/common/cta/Cta";


import Hero from "@/components/homes/home-1/Hero";
import Features from "@/components/common/features/Features";
import Service from "@/components/homes/home-1/Service";


// Nowy komponent promujący Day Trips
import DayTripsmain from "@/components/cta/DayTripsmain";

// Komponenty wspólne
import Process from "@/components/common/process/Process2";
import Testimonials from "@/components/common/testimonials/Testimonials2";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";
import GoogleReviews from "@/components/GoogleReviews";

import AirportTransfers from "@/components/AirportTransfers";

export const metadata = {
  title: "VIPTransfer.ie | Premium Chauffeur & Limousine Services in Ireland",
  description:
    "Experience exclusive, luxurious travel with VIPTransfer.ie. We offer professional chauffeur, airport transfer, and limousine hire services across Ireland.",
  alternates: {
    canonical: 'https://viptransfer.ie',
  },
};

export default function Home() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <Hero />
        <Service />
        <DayTripsmain /> {/* Dodano nowy komponent */}
        <Testimonials />
        <Features />

        <AirportTransfers />
      
      
       
        <Cta />
      
 
        <DownloadApp />
         <GoogleReviews />
      
      </main>
      <Footer1 />
    </>
  );
}