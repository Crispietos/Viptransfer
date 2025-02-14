"use client";

import Image from "next/image";

export default function CorporateTransportation() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">Corporate Transportation</h1>
            <p className="text-16 color-white mt-10">
              Professional, reliable, and luxurious corporate transportation tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Elevate Your Business Travel
                </h2>
                <p className="text-16 color-text mb-20">
                  With VIPTransfer’s Corporate Transportation services, we provide an unmatched level of
                  professionalism and luxury for business travelers. Whether you need airport transfers, client
                  pickups, or executive transportation, our tailored solutions are designed to impress.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Premium vehicles designed for comfort and productivity</li>
                  <li>✔ Punctual and discreet chauffeurs</li>
                  <li>✔ Customizable routes to fit your business schedule</li>
                  <li>✔ Complimentary Wi-Fi and bottled water</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}
                  src="/assets/imgs/services/corporate-transportation.jpg"
                  alt="Corporate Transportation"
                  className="rounded-lg"
                />
                {/* Adnotacja: Zdjęcie eleganckiego samochodu biznesowego (np. Mercedes S-Class) z pracownikiem w garniturze, podkreślające profesjonalizm i luksus. */}
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja dodatkowa */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Why Choose VIPTANSFER for Corporate Transportation?
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
<<<<<<< HEAD
                   src="/assets/imgs/services/mercnight.png"
=======
                   src="/assets/imgs/services/mercnight.WebP"
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
                  alt="Professional Chauffeurs"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Professional Chauffeurs</h4>
                <p className="text-16 color-text">
                  Our highly trained chauffeurs provide discreet, punctual, and courteous service to ensure your
                  business trips are seamless.
                </p>
                {/* Adnotacja: Ikona symbolizująca profesjonalizm – np. postać w garniturze lub koło kierownicy. */}
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
<<<<<<< HEAD
                    src="/assets/imgs/services/weel.png"
=======
                    src="/assets/imgs/services/weel.webp"
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
                  alt="Premium Fleet"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Premium Fleet</h4>
                <p className="text-16 color-text">
                  Travel in luxury with our fleet of top-tier vehicles, equipped with all the amenities for comfort
                  and efficiency.
                </p>
                {/* Adnotacja: Ikona przedstawiająca luksusowy samochód lub symbol premium – np. gwiazda z kołem. */}
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                    src="/assets/imgs/services/merc.png"
                  alt="Flexible Scheduling"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Flexible Scheduling</h4>
                <p className="text-16 color-text">
                  Enjoy personalized scheduling and routes that adapt to your business requirements.
                </p>
                {/* Adnotacja: Ikona przedstawiająca zegar lub kalendarz, symbolizująca elastyczność. */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}