"use client";

import Image from "next/image";

export default function CityTours() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section
  className="section pt-120 pb-60 text-center"
  style={{ background: "linear-gradient(to right, #003366, #0099ff)" }}
>
          <div className="container-sub">
          <h1 className="heading-44-medium color-white">Hotels & Castles</h1>
<p className="text-16 color-white mt-10">
  Direct transfers to Ireland’s finest hotels and castles.
</p>

          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
  <div className="container-sub">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="heading-32-medium mb-20">Hotels & Castles</h2>
        <p className="text-16 color-text mb-20">
          Adare Manor – A five-star neo-Gothic manor in County Limerick, renowned for its world-class golf course and exceptional hospitality.
        </p>
        <p className="text-16 color-text mb-20">
          Ashford Castle – An 800-year-old lakeside castle in County Mayo, offering Michelin-star dining, falconry, and a truly regal experience.
        </p>
        <p className="text-16 color-text mb-20">
          Dromoland Castle – A historic five-star castle hotel in County Clare, featuring fine dining, a championship golf course, and stunning parklands.
        </p>
        <p className="text-16 color-text mb-20">
          Ballyfin Demesne – A secluded Georgian country house in County Laois, known for its privacy, exquisite interiors, and award-winning service.
        </p>
        <p className="text-16 color-text mb-20">
          Highfield Manor Cork – A boutique hotel offering an elegant stay in a peaceful setting near Cork City, known for its refined atmosphere and personalized service.
        </p>
      </div>
      <div className="col-lg-6">
        <Image
          width={600}
          height={400}
          src="/assets/imgs/HotelsCastles.webp" // Zdjęcie: "Dublin city tour", widok miasta, architektura
          alt="Hotels & Castles"
          className="rounded-lg"
        />
      </div>
    </div>

    {/* Sekcja na całą szerokość */}
    <div className="row mt-60">
      <div className="col-12 text-center">
        <h2 className="heading-32-medium mb-20">More Exclusive Escapes</h2>
      </div>
      <div className="col-12">
        <p className="text-16 color-text mb-20">
          Beyond the top five, Ireland boasts several other extraordinary hotels, each offering a unique experience. Castlemartyr Resort in County Cork blends stately elegance with modern luxury, while Kilkea Castle in County Kildare provides a beautifully restored 12th-century setting for a tranquil retreat. Mount Juliet Estate in County Kilkenny combines history with a championship golf course and Michelin-starred dining.
        </p>
        <p className="text-16 color-text mb-20">
          For those seeking intimate, off-the-beaten-path luxury, Ballynahinch Castle in Connemara offers stunning riverside scenery, while The Address Sligo provides a stylish boutique experience with panoramic views. Breac House in Donegal is perfect for design lovers, offering sustainable luxury in a remote coastal setting. Finally, Dunbrody Country House Hotel in Wexford delivers award-winning cuisine in a charming Georgian mansion.
        </p>
        <p className="text-16 color-text text-center">
          Wherever your journey takes you, we provide direct and reliable transfers to Ireland’s most distinguished hotels and castles.
        </p>
      </div>
    </div>
  </div>
</section>


      
      </main>
    </>
  );
}