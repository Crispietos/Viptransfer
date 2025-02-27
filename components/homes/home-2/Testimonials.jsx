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
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja dodatkowa */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Why Choose VIPTransfer for Corporate Transportation?
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/icons/icon-professional.png"
                  alt="Professional Chauffeurs"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Professional Chauffeurs</h4>
                <p className="text-16 color-text">
                  Our highly trained chauffeurs provide discreet, punctual, and courteous service to ensure your
                  business trips are seamless.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/icons/icon-fleet.png"
                  alt="Premium Fleet"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Premium Fleet</h4>
                <p className="text-16 color-text">
                  Travel in luxury with our fleet of top-tier vehicles, equipped with all the amenities for comfort
                  and efficiency.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/icons/icon-flexible.png"
                  alt="Flexible Scheduling"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Flexible Scheduling</h4>
                <p className="text-16 color-text">
                  Enjoy personalized scheduling and routes that adapt to your business requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}