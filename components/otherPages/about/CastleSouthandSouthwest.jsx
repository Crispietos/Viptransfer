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
              Journey Through Castles and Residences of Southern and Southwestern Ireland: Timeless Beauty and Cultural Heritage
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the grandeur and history of three of Ireland’s most beautiful castles with our Castle South and Southwest Tours.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Duration: Approximately 10-12 hours
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image
              src="/assets/imgs/Southwest Castle.webp"
              width={1200}
              height={700}
              alt="Castle South and Southwest"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Castle Options Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Castle Options</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Dalkey Castle:</strong> Explore the rich history of this medieval castle with interactive exhibitions and stunning views of Dublin Bay. Enjoy guided tours that bring the past to life.
              </li>
              <li>
                <strong>Powerscourt House and Gardens:</strong> Wander through the magnificent estate, featuring elegant interiors and stunning landscapes. Highlights include the Japanese Garden and Triton Lake.
              </li>
              <li>
                <strong>Kilkenny Castle:</strong> Visit the iconic Norman castle, tour beautifully restored rooms, and learn about the Butler family's legacy while enjoying the extensive gardens.
              </li>
            </ul>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Departure from Dublin:</strong> Flexible departure time to suit your schedule.
              </li>
              <li>
                <strong>Visit Three Castles:</strong> Choose any three castles from the list and spend ample time exploring each one. Guided tours available at select locations.
              </li>
              <li>
                <strong>Lunch at a Traditional Pub:</strong> Optional stop for a delicious meal at a local pub during your tour.
              </li>
              <li>
                <strong>Return to Dublin:</strong> Flexible return time based on your preferences.
              </li>
            </ul>
          </div>
        </section>

       {/* Pricing Section */}
<section className="section-primary pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-10 text-center">Price</h2>
    <div className="grid grid-cols-1 gap-10">
      {/* Card for Car */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium Car (up to 3 people)
        </h3>
        <p className="price">€695</p>
        <p className="text-16 leading-relaxed">
          Includes private luxury car transfer, Powerscourt House and Gardens tickets, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
      {/* Card for Minivan */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium MPV (up to 7 people)
        </h3>
        <p className="price">€895</p>
        <p className="text-16 leading-relaxed">
          Includes private luxury car transfer, Powerscourt House and Gardens tickets, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Additional Information Section */}
<section className="section-primary mt-4 pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-6">Additional Information</h2>
    <p className="text-18 color-text">
      Please note that our offer does not include:
    </p>
    <ul className="text-18 color-text space-y-4 pl-8">
      <li>• Tour guide</li>
      <li>• Dalkey and Kilkenny Castle entry tickets</li>
      <li>• Meals (lunch/dinner)</li>
      <li>• Tip for driver</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-10 mb-6">Additional Options</h3>
    <p className="text-18 color-text">
      The possibility to customize the route and trip plan according to individual preferences. Flexible planning of stops and their duration.
    </p>
  </div>

  <div className="text-center mt-10">
  <Link href="/bookingdaytrip" passHref>
    <span className="btn-gradient">Book Your Day Trip Now</span>
  </Link>
</div>
</section>
      </main>
    </>
  );
}