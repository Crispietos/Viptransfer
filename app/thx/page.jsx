import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import Thx from "@/components/Thx"; // Upewnij się, że ścieżka jest poprawna


export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* Sekcja Terms and Conditions */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <Thx/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}