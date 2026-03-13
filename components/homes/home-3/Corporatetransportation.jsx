"use client";

import Image from "next/image";

export default function CorporateTransportation() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section
  className="section pt-120 pb-60 text-center"
  style={{ background: "linear-gradient(to right, #003366, #0099ff)" }}
>
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

        
      </main>
    </>
  );
}