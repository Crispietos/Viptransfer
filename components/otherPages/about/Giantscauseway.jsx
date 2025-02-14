"use client";

import Image from "next/image";
import Link from "next/link"; // Import powinien być tutaj, na górze

export default function GiantsCauseway() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              One Day Trip from Dublin to Giant’s Causeway
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the beauty and history of Ireland with our private day trip from Dublin to Giant’s Causeway. Enjoy the flexibility and comfort of private transportation, perfect for groups from one to seven people. This tour is unguided, allowing you to explore this picturesque region at your own pace.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Estimated trip duration: approximately 10-13 hours.
            </p>
          </div>
        </section>

        {/* Obrazek */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image
              src="/assets/imgs/daytrips/Giant’sCauseway.webp"
              width={1200}
              height={700}
              alt="Giant’s Causeway"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Szczegóły wycieczki */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">What We Offer</h2>
            <ul className="text-18 color-text space-y-4 pl-8">
              <li>• Private Transport: Comfortable vehicle with a driver, ensuring a smooth round trip with bottled water and free Wi-Fi.</li>
              <li>• Flexible Schedule: Tailor the day’s itinerary to your preferences and explore at your own pace.</li>
              <li>• Scenic Views: Photo stops at the most picturesque locations of your choice.</li>
              <li>• Free Time for Exploration: Ample time to independently discover the area.</li>
              <li>• Additional Stops: Option to visit Newgrange, Rope Bridge, Titanic Museum.</li>
              <li>• Safety and Comfort: Price includes all parking and toll fees.</li>
            </ul>
          </div>
        </section>

        {/* Itinerary */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-4 pl-8">
              <li>• Departure from Dublin: Flexible departure time to suit your schedule.</li>
              <li>• Optional Stops: Choose additional stops such as:
                <ul className="list-disc pl-8">
                  <li><strong>Newgrange:</strong> Tour the prehistoric tomb, one of Ireland’s most significant archaeological sites.</li>
                  <li><strong>Giant’s Causeway:</strong> Explore the unique rock formations along the coast.</li>
                  <li><strong>Rope Bridge:</strong> Enjoy an exciting walk across the famous rope bridge.</li>
                  <li><strong>Titanic Museum:</strong> Immerse yourself in the history of the legendary ship.</li>
                </ul>
              </li>
              <li>• Lunch at a Traditional Pub: Optional stop for a delicious meal at a local pub.</li>
              <li>• Return to Dublin: Flexible return time based on your preferences.</li>
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
          Car <span className="text-gray-600">(up to 3 people)</span>
        </h3>
        <p className="price">€695</p>
        <p className="text-16 leading-relaxed">
          Includes Giants Causeway entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
      {/* Card for Minivan */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Minivan <span className="text-gray-600">(up to 7 people)</span>
        </h3>
        <p className="price">€895</p>
        <p className="text-16 leading-relaxed">
          Includes Giants Causeway entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
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
    <ul className="text-18 color-text list-disc pl-8">
      <li>• Tour guide</li>
      <li>• Tickets to Newgrange</li>
      <li>• Rope Bridge tickets</li>
      <li>• Titanic Museum tickets</li>
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