"use client";

import Image from "next/image";

export default function PrivateChauffeur() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">Private Chauffeur</h1>
            <p className="text-16 color-white mt-10">
              Luxury travel with VIPTransfer for airport transfers, city tours, and special events.
            </p>
          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Why Choose Private Chauffeur Services?
                </h2>
                <p className="text-16 color-text mb-20">
                  Our Private Chauffeur service is designed to provide unparalleled comfort, luxury,
                  and reliability. Whether you’re traveling for business or leisure, we ensure a
                  seamless experience tailored to your needs.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Premium vehicles with luxurious interiors</li>
                  <li>✔ Professional, discreet, and courteous chauffeurs</li>
                  <li>✔ Flexible scheduling and personalized routes</li>
                  <li>✔ Real-time flight tracking for timely airport pickups</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}
                  src="/assets/imgs/PrivateChauffeur.png"
                  alt="Private Chauffeur"
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
              Experience the Difference
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                     src="/assets/imgs/LuxuryVehicles.png"
                  alt="Luxury Vehicles"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Luxury Vehicles</h4>
                <p className="text-16 color-text">
                  Travel in style and comfort with our premium fleet, designed for maximum relaxation.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/ProfessionalChauffeurs.png"
                  alt="Professional Chauffeurs"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Professional Chauffeurs</h4>
                <p className="text-16 color-text">
                  Our chauffeurs are trained to provide exceptional service, ensuring your journey is
                  smooth and enjoyable.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/TailoredExperience.png"
                  alt="Tailored Experience"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Tailored Experience</h4>
                <p className="text-16 color-text">
                  Every ride is personalized to meet your preferences and schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}