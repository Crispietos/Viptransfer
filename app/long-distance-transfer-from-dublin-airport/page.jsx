import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import Faq from "@/components/LongDistance";


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* Sekcja Terms and Conditions */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Faq/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}