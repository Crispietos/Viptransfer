import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import Glendaloughandpowerscourt from "@/components/otherPages/about/Glendaloughandpowerscourt";


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Glendaloughandpowerscourt/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}