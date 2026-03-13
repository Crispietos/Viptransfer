"use client";

import Image from "next/image";

export default function GolfResortTransfers() {
  return (
    <>
     <main>
  {/* Nagłówek */}
  <section
  className="section pt-120 pb-60 text-center"
  style={{ background: "linear-gradient(to right, #003366, #0099ff)" }}
>
    <div className="container-sub">
      <h1 className="heading-44-medium color-white">
        Golf Resorts Transfer
      </h1>
      <p className="text-16 color-white mt-10">
        Luxury transportation to Ireland’s top golf resorts for a seamless and relaxing journey.
      </p>
    </div>
  </section>

  {/* Opis usługi */}
  <section className="section pt-60 pb-60">
    <div className="container-sub">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="heading-32-medium mb-20">
            Why Choose Our Golf Resort Transfers?
          </h2>
          <p className="text-16 color-text mb-20">
            We provide exclusive transportation to Ireland’s top golf resorts, ensuring you arrive in comfort and style. Whether it’s a corporate outing, a friendly match, or a golfing vacation, our tailored service caters to your needs.
          </p>
          <ul className="text-16 color-text">
            <li>✔ Premium vehicles for maximum comfort</li>
            <li>✔ Private drivers with punctual service</li>
            <li>✔ Ample space for small groups of golfers with full golf sets and luggage</li>
            <li>✔ Capacity for up to four full sets of golf bags and luggage in one vehicle</li>
            <li>✔ Flexible pick-up and drop-off locations</li>
            <li>✔ MPV Mercedes Vito and Viano for small groups</li>
            <li>✔ Mercedes S-Class or Audi A8 for individual travelers seeking ultimate comfort</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <Image
            width={600}
            height={400}
            src="/assets/imgs/GolfResortMain.webp" // Zdjęcie: "Luxury golf transport Ireland"
            alt="Golf Resort Transfers"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>

  {/* Sekcja na całą szerokość */}
  <section className="section pt-60 pb-60 bg-light">
    <div className="container-sub">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="heading-32-medium mb-20">
            Transfers to Ireland’s Most Prestigious Golf Courses
          </h2>
        </div>
        <div className="col-12">
          <p className="text-16 color-text mb-20">
            We provide transfers to Ireland’s most prestigious golf courses, renowned for their world-class quality and breathtaking landscapes. However, our service is not limited to these top destinations—should you wish to visit any other golf club across the country, we are more than happy to accommodate your travel needs with the same level of comfort and professionalism.
          </p>
          <ul className="text-16 color-text mb-20">
            <li>✔ <strong>Royal County Down Golf Club</strong> – Consistently ranked among the best courses in the world, set against the stunning backdrop of the Mourne Mountains.</li>
            <li>✔ <strong>Royal Portrush Golf Club</strong> – A historic links course on the Atlantic coast, host of The Open Championship in 2019 and 2025.</li>
            <li>✔ <strong>Trump International Golf Links Doonbeg</strong> – A world-class links course offering spectacular ocean views and a luxurious golfing experience.</li>
            <li>✔ <strong>Old Head Golf Links</strong> – One of the most scenic golf courses in the world, perched on dramatic cliffs overlooking the Atlantic.</li>
            <li>✔ <strong>Waterville Golf Links</strong> – A true links challenge in the heart of the Ring of Kerry, beloved by golf purists.</li>
            <li>✔ <strong>Adare Manor Golf Club</strong> – A five-star golfing destination and the host venue for the 2027 Ryder Cup, featuring immaculate fairways and a stunning castle estate.</li>
          </ul>
          <p className="text-16 color-text text-center">
            Wherever your golfing adventure takes you, our premium transfers guarantee comfort, luxury, and a seamless travel experience.
          </p>
        </div>
      </div>
    </div>
  </section>



       
      </main>
    </>
  );
}