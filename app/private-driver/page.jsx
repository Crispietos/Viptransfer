import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import PrivateDriver from "@/components/PrivateDriver";

export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* Sekcja Private Driver */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <PrivateDriver />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}