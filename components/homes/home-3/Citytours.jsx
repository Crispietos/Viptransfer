"use client";

import Image from "next/image";

export default function CityTours() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">City Tours</h1>
            <p className="text-16 color-white mt-10">
              Discover Ireland's iconic cities with our personalized and luxurious city tours.
            </p>
          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Why Choose Our City Tours?
                </h2>
                <p className="text-16 color-text mb-20">
                  Explore Ireland's vibrant cities in comfort and style. Our city tours are designed to provide you with a unique and personalized experience, showcasing the best landmarks, culture, and hidden gems each city has to offer.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Tailored routes to suit your interests</li>
                  <li>✔ Expert chauffeurs with local knowledge</li>
                  <li>✔ Comfortable and luxurious vehicles</li>
                  <li>✔ Flexibility to stop and explore at your own pace</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}
                  src="/assets/imgs/CityToursMain.webp" // Zdjęcie: "Dublin city tour", widok miasta, architektura
                  alt="City Tours"
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
              Highlights of Our City Tours
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/DublinHighlights.webp" // Zdjęcie: "Dublin landmarks", Temple Bar, Trinity College
                  alt="Dublin Highlights"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Dublin Highlights</h4>
                <p className="text-16 color-text">
                  Visit iconic landmarks such as Trinity College, St. Patrick's Cathedral, and Temple Bar.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/CorkCulture.webp" // Zdjęcie: "Cork city tour", kultura, muzea
                  alt="Cork Culture"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Cork Culture</h4>
                <p className="text-16 color-text">
                  Explore the cultural hub of Cork, including its famous English Market and historic streets.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/GalwayExperience.webp" // Zdjęcie: "Galway city tour", uliczki, festiwale
                  alt="Galway Experience"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Galway Experience</h4>
                <p className="text-16 color-text">
                  Discover Galway's vibrant streets, live music, and rich history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lista dostępnych miast */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Featured Cities
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/DublinCity.webp" // Zdjęcie: "Dublin city view", most Ha'penny, widok nocą
                  alt="Dublin"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Dublin</h4>
                <p className="text-16 color-text">
                  Experience the capital city’s charm with its iconic landmarks and vibrant nightlife.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/CorkCity.webp" // Zdjęcie: "Cork city view", kolorowe budynki, spokojny klimat
                  alt="Cork"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Cork</h4>
                <p className="text-16 color-text">
                  Discover Cork’s rich cultural scene and its stunning waterfront views.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/GalwayCity.webp" // Zdjęcie: "Galway city view", uliczki, nadbrzeże
                  alt="Galway"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Galway</h4>
                <p className="text-16 color-text">
                  Enjoy Galway's artistic atmosphere and lively streets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}