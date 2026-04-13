"use client";
import Image from "next/image";
import Link from "next/link"; // Import powinien być tutaj, na górze

export default function BlarneyCastleTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              One Day Trip from Dublin to Blarney Castle and Cobh via the Rock of Cashel
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Embark on an enriching journey from Dublin to some of Ireland’s most iconic landmarks. This meticulously planned one-day trip will take you to Blarney Castle, the charming town of Cobh, and the majestic Rock of Cashel.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Estimated trip duration: approximately 10-13 hours
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image
              src="/assets/imgs/Blarney Castle.webp"
              width={1200}
              height={700}
              alt="Blarney Castle"
              className="rounded-lg shadow-lg mx-auto"
            />
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
            <ul className="text-18 list-disc pl-8">
              <li style={{ color: '#fff' }}>• Tour guide</li>
              <li style={{ color: '#fff' }}>• Tickets to Cobh Titanic Exhibition and Rock of Cashel</li>
              <li style={{ color: '#fff' }}>• Meals (lunch/dinner)</li>
              <li style={{ color: '#fff' }}>• Tip for driver</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-10 mb-6" style={{ color: '#fff' }}>Additional Options</h3>
            <p className="text-18" style={{ color: '#fff' }}>
              The possibility to customize the route and trip plan according to individual preferences, including your favorite places not shown on the standard list, and flexible planning of stops and their duration.
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