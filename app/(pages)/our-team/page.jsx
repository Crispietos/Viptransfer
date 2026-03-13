import DownloadApp from "@/components/common/downloadApp/DownloadApp2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import BreadCumbs from "@/components/otherPages/team/BreadCumbs";
import TeamMambers from "@/components/otherPages/team/TeamMambers";

export const metadata = {
  title:
    "Our Team || VIPTransfer.ie - Personalize Your Chauffeur Experience",
  description:
    "Enhance your VIPTransfer.ie journey with our Booking Extras. Choose additional services like child seats, champagne on board, extra luggage options, and more to make your ride truly exceptional.",
};

export default function page() {
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <BreadCumbs />
        <TeamMambers />
        <DownloadApp />
      </main>
      <Footer1 />
    </>
  );
}
