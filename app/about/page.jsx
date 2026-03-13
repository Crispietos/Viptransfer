import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Breadcumb from "@/components/otherPages/about/Breadcumb";
import Features from "@/components/otherPages/about/Features";
import MobailHeader1 from "@/components/headers/MobailHeader1";

export const metadata = {
  title:
    "About || VIPTransfer.ie - Personalize Your Chauffeur Experience",
  description:
    "Enhance your VIPTransfer.ie journey with our Booking Extras. Choose additional services like child seats, champagne on board, extra luggage options, and more to make your ride truly exceptional.",
};
export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Breadcumb />
      
        <Features />
      
      </main>
      <Footer1 />
    </>
  );
}
