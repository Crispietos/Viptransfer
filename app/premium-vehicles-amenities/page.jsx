import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import PremiumVehiclesAmenities from "@/components/PremiumVehiclesAmenities";

export default function PremiumVehiclesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <PremiumVehiclesAmenities />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}