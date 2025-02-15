"use client";

import Image from "next/image";
import Link from "next/link"; // Import powinien być tutaj, na górze

export default function WaterfordKilkennyTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              One Day Trip from Dublin to Waterford and Kilkenny Castle
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the beauty of Ireland with our one-day trip from Dublin. Enjoy a private and flexible tour, perfect for groups of 1 to 7 people. Explore stunning landscapes, historical sites, and charming cities at your own pace.
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

              src="/assets/imgs/Waterford.webp"

            
 
              width={1200}
              height={700}
              alt="Waterford and Kilkenny"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">What We Offer</h2>
            <ul className="text-18 color-text space-y-4 pl-8">
              <li>• Private Transport: A comfortable car with a driver, ensuring a smooth round trip with bottled water and free Wi-Fi.</li>
              <li>• Flexible Schedule: Adjust the day's plan according to your preferences and explore at your own pace.</li>
              <li>• Scenic Views: Stops for photos at the most picturesque spots of your choice.</li>
              <li>• Enjoy Free Time for Sightseeing: Free time to discover the area on your own.</li>
              <li>• Safety and Convenience: The price includes all parking and toll fees.</li>
            </ul>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Kilkenny:</strong>
                <ul className="list-disc pl-8">
                  <li>Kilkenny Castle: Tour the castle and its gardens.</li>
                  <li>Old Town: Stroll through the picturesque streets of Kilkenny, discovering local shops and cafes.</li>
                  <li>St Canice’s Cathedral: Experience one of Ireland’s top three cathedrals.</li>
                </ul>
              </li>
              <li>
                <strong>Waterford City:</strong>
                <ul className="list-disc pl-8">
                  <li>Waterford Crystal Visitor Centre: See how world-famous crystals are made.</li>
                  <li>Waterford Treasures - Medieval Museum: Learn about Waterford’s rich history.</li>
                  <li>Reginald’s Tower: Explore Ireland’s oldest civic building with fascinating exhibits.</li>
                  <li>Free Time for Exploration: Discover additional attractions independently.</li>
                </ul>
              </li>
              <li>Return to Dublin: Safe and comfortable, with a flexible return time based on your preferences.</li>
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
          Car <span className="text-gray-600">(up to three people)</span>
        </h3>
        <p className="price">€695</p>
        <p className="text-16 leading-relaxed">
          Includes private transfer, tickets to Kilkenny Castle (guided tour), waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
      {/* Card for Minivan */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Minivan <span className="text-gray-600">(up to seven people)</span>
        </h3>
        <p className="price">€895</p>
        <p className="text-16 leading-relaxed">
          Includes private transfer, tickets to Kilkenny Castle (guided tour), waiting time, parking and toll fees, bottled water, and free Wi-Fi.
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
      <li>• A guide</li>
      <li>• St Canice's Cathedral tickets</li>
      <li>• House of Waterford tickets</li>
      <li>• Medieval Museum tickets</li>
      <li>• Meals (lunch/dinner)</li>
      <li>• Tip for driver</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-10 mb-6">Additional Options</h3>
    <p className="text-18 color-text">
      Possibility to customize the route and trip plan according to individual preferences, including your favorite places not shown on the standard list, and flexible planning of stops and their duration.
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