import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import TermsAndConditions from "@/components/TermsAndConditions"; // upewnij się, że ten plik istnieje

export const metadata = {
  alternates: {
    canonical: 'https://viptransfer.ie/terms',
  },
};

export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* Sekcja Terms and Conditions */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <TermsAndConditions />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}