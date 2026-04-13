"use client";

import Image from "next/image";
import Link from "next/link";

export default function SouthWestTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              Kilkenny Castle & Rock of Cashel: Medieval Majesty and Timeless Legends
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover two of Ireland’s most celebrated landmarks in one unforgettable day. This trip combines the medieval elegance of Kilkenny Castle with the legendary Rock of Cashel – known as the Rock of Kings – offering a perfect blend of history, culture, and scenery.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Duration: Approximately 9–11 hours
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image
              src="/assets/imgs/trips/kilkenny-cashel-hero.webp"
              width={1200}
              height={700}
              alt="Kilkenny Castle & Rock of Cashel"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Highlights</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Kilkenny Castle & Medieval City –</strong> Step into the grandeur of this iconic Norman castle, explore its beautifully restored rooms, and learn about the influential Butler family. Afterwards, enjoy the charm of Kilkenny’s cobbled streets, colourful shopfronts, and lively atmosphere.
              </li>
              <li>
                <strong>Rock of Cashel – The Rock of Kings –</strong> Once the seat of the Kings of Munster and the coronation site of High King Brian Boru in 978, this spectacular site rises dramatically above the Golden Vale. According to legend, St. Patrick baptised King Aengus here in the 5th century. Its medieval towers, cathedral, and chapel create an awe-inspiring silhouette against the Irish sky.
              </li>
              <li>
                <strong>Optional Stop – Irish National Stud & Japanese Gardens –</strong> Visit Ireland’s world‑famous thoroughbred horse breeding centre and stroll through the tranquil Japanese Gardens, symbolising the journey of life.
              </li>
            </ul>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li><strong>Departure from Dublin –</strong> Flexible departure time to suit your schedule.</li>
              <li><strong>Kilkenny Castle & City –</strong> Guided or self‑guided visit to explore the castle, followed by time to enjoy the medieval charm of Kilkenny.</li>
              <li><strong>Rock of Cashel –</strong> Discover the heritage, legends, and breathtaking views of this remarkable site.</li>
              <li><strong>Optional Stop –</strong> Experience the beauty and serenity of the Irish National Stud & Japanese Gardens.</li>
              <li><strong>Lunch –</strong> Optional stop for a traditional Irish meal in a local pub or restaurant along the route.</li>
              <li><strong>Return to Dublin –</strong> Flexible return time based on your preferences.</li>
            </ul>
          </div>
        </section>

       {/* Pricing Section */}
<section className="section-primary pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-10 text-center">Price</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Card 1: Premium Car */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium Car <span className="text-gray-600">(up to 3 people)</span>
        </h3>
        <p className="price">€695</p>
        <p className="text-16 leading-relaxed">
          Includes private comfortable car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>

      {/* Card 2: Premium MPV */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium MPV <span className="text-gray-600">(up to 7 people)</span>
        </h3>
        <p className="price">€795</p>
        <p className="text-16 leading-relaxed">
          Includes private luxury transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>

      {/* Card 3: Mercedes V Class */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Mercedes V Class <span className="text-gray-600">(up to 6 people)</span>
        </h3>
        <p className="price">€895</p>
        <p className="text-16 leading-relaxed">
          Includes ultra-luxury VIP transfer, extra legroom, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Additional Information Section */}
<section className="section-primary mt-4 pt-60 pb-60">
  <div className="container-sub" style={{ color: '#fff' }}>
    <h2 className="heading-32-medium mb-6" style={{ color: '#fff' }}>Additional Information</h2>
    <p className="text-18" style={{ color: '#fff' }}>
      Please note that our offer does not include:
    </p>
    <ul className="text-18 space-y-4 pl-8">
      <li style={{ color: '#fff' }}>• Tour guide</li>
      <li style={{ color: '#fff' }}>• Entry tickets to Kilkenny Castle, Rock of Cashel, or Irish National Stud & Japanese Gardens (optional stop)</li>
      <li style={{ color: '#fff' }}>• Meals (lunch/dinner)</li>
      <li style={{ color: '#fff' }}>• Tip for driver</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-10 mb-6" style={{ color: '#fff' }}>Additional Options</h3>
    <p className="text-18" style={{ color: '#fff' }}>
      The possibility to customize the route and trip plan according to individual preferences. Flexible planning of stops and their duration.
    </p>
  </div>

  <div className="text-center mt-10">
    <Link href="/bookingdaytrip" passHref>
      <span className="btn btn-light rounded-3 px-4 py-3 fw-semibold" style={{ color: '#0EA5E9' }}>Make a booking</span>
    </Link>
  </div>
</section>
      </main>
    </>
  );
}