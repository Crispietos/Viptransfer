import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";

import BlarneyCastle from "@/components/otherPages/about/BlarneyCastle";


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
       

       

        {/* Sekcja Testimonials */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <BlarneyCastle/>
          </div>
        </section>

     

        {/* Sekcja Steps */}
       
      </main>
      <Footer />
    </>
  );
}