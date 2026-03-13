import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Breadcumb from "@/components/service/Breadcumb";
import Services2 from "@/components/service/Services2";

export const metadata = {
  title:
    "Service Grid 2 || VIPTransfer.ie - Personalize Your Chauffeur Experience",
  description:
    "Enhance your VIPTransfer.ie journey with our Booking Extras. Choose additional services like child seats, champagne on board, extra luggage options, and more to make your ride truly exceptional.",
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <Breadcumb />
        <Services2 />
      </main>
      <Footer1 />
    </>
  );
}
