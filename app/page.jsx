import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Sekcja wspólna dla strony głównej

import Cta from "@/components/homes/common/cta/Cta";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-1/Hero";
import Features from "@/components/common/features/Features";
import Service from "@/components/homes/home-1/Service";

// Nowy komponent promujący Day Trips
import DayTripsCTA from "@/components/cta/DayTripsCTA";

// Komponenty wspólne
import Process from "@/components/common/process/Process2";
import Testimonials from "@/components/common/testimonials/Testimonials2";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";

export const metadata = {
  title:
    "Home 1 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
};

export default function Home() {
  return (
    <>
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <Hero />
        <Service />
        <DayTripsCTA /> {/* Dodano nowy komponent */}
        <Testimonials />
        <Features />
      
      
       
        <Cta />
      
        <Faq />
        <DownloadApp />
      </main>
      <Footer1 />
    </>
  );
}