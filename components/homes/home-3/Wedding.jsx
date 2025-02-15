/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-duplicate-props */

"use client";

import Image from "next/image";

export default function WeddingTransfers() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">Wedding Transfers</h1>
            <p className="text-16 color-white mt-10">
              Make your special day even more memorable with our elegant and reliable wedding transfer services.
            </p>
          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Why Choose Our Wedding Transfers?
                </h2>
                <p className="text-16 color-text mb-20">
                  Your wedding day deserves perfection, and we are here to provide a seamless, luxurious transportation experience. From stunning vehicles to exceptional service, we make sure your journey is as unforgettable as your celebration.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Elegant, stylish vehicles for the perfect wedding look</li>
                  <li>✔ Punctual and professional chauffeurs</li>
                  <li>✔ Flexible routes and scheduling</li>
                  <li>✔ Complimentary decorations for the wedding car</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}

                  src="/assets/imgs/daytrips/WeddingTransfers.webp"

 
                  alt="Wedding Transfers"
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
              Make Your Wedding Day Truly Special
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}

                  src="/assets/imgs/LuxuryWeddingCar.webp" // Zdjęcie: "luxury car for weddings", ozdobiony samochód, romantyczna atmosfera

                 
 
                  alt="Luxury Wedding Car"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Luxury Wedding Car</h4>
                <p className="text-16 color-text">
                  Arrive in style with our beautifully decorated, premium vehicles.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}

                  src="/assets/imgs/ProfessionalDrivers.webp" // Zdjęcie: "professional chauffeur for weddings", kierowca w garniturze przy samochodzie

                 
 
                  alt="Professional Drivers"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Professional Drivers</h4>
                <p className="text-16 color-text">
                  Our experienced chauffeurs ensure a smooth and stress-free experience.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}

                  src="/assets/imgs/WeddingPersonalization.webp" // Zdjęcie: "personalized wedding transport", para młoda w samochodzie

 
                  alt="Personalized Experience"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Personalized Experience</h4>
                <p className="text-16 color-text">
                  Every detail is tailored to match your wedding theme and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lista lokalizacji */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Wedding Transfer Destinations
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}

                  src="/assets/imgs/DublinWedding.webp" // Zdjęcie: "Dublin wedding location", elegancki kościół lub luksusowy hotel


 
                  alt="Dublin Weddings"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Dublin Weddings</h4>
                <p className="text-16 color-text">
                  Celebrate your big day in the heart of Ireland's capital with seamless transport.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}

                  src="/assets/imgs/CastleWedding.webp" // Zdjęcie: "Ireland castle wedding", zamki w Irlandii, romantyczny klimat

                 
 
                  alt="Castle Weddings"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Castle Weddings</h4>
                <p className="text-16 color-text">
                  Arrive in style at Ireland's most picturesque castles and estates.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}

                  src="/assets/imgs/CoastalWedding.webp" // Zdjęcie: "coastal wedding Ireland", plaża z widokiem na ocean

                  
 
                  alt="Coastal Weddings"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Coastal Weddings</h4>
                <p className="text-16 color-text">
                  Experience romantic coastal venues with unforgettable views.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}