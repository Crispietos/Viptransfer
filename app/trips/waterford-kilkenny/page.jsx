import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import WaterfordKilkenny from "@/components/otherPages/about/WaterfordKilkenny";


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <WaterfordKilkenny/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}