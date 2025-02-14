"use client";

import Image from "next/image";
import Link from "next/link"; // Import powinien być tutaj, na górze

export default function CliffsOfMoher() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              One Day Trip from Dublin to Cliffs of Moher
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the spectacular Cliffs of Moher at your own pace! Our one-day trip
              from Dublin offers flexibility and the comfort of private transport, ideal
              for groups of <strong>1 to 7</strong> people. Without a guide, you can enjoy
              the freedom to explore this unique region independently.
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
              src="/assets/imgs/daytrips/CliffsofMoher.webp"
              width={1200}
              height={700}
              alt="Cliffs of Moher"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Szczegóły wycieczki */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">What We Offer</h2>
            <ul className="text-18 color-text space-y-4 pl-8">
              <li>• Private Transport: A comfortable car with a driver, ensuring a smooth round trip with bottled water and free Wi-Fi.</li>
              <li>• Flexible Schedule: Adjust the day’s plan according to your preferences and explore at your own pace.</li>
              <li>• Scenic Views: Stops for photos at the most picturesque spots of your choice.</li>
              <li>• Free Time for Sightseeing: Free time to discover the area on your own.</li>
              <li>• Safety and Convenience: The price includes all parking and toll fees.</li>
            </ul>
          </div>
        </section>

        {/* Itinerary */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-4 pl-8">
              <li>• Departure from Dublin: Early morning pickup from your specified location.</li>
              <li>• Optional Stops: Choose from:
                <ul className="list-disc pl-8 mt-2">
                  <li><strong>Cliffs of Moher:</strong> A highlight of the tour offer with ample time to walk along breathtaking views of the Atlantic Ocean, stretching for 8 kilometers along Ireland's western coast and reaching heights of up to 214 meters.</li>
                  <li><strong>Hazel Mountain Chocolate:</strong> Discover Irish chocolate crafted directly from sustainable cacao beans at the foothills of the Burren Mountains along the Wild Atlantic Way.</li>
                  <li><strong>The Burren:</strong> A scenic drive through this unique landscape with stops for photos and exploration.</li>
                  <li><strong>Aillwee Burren Experience:</strong> The oldest Irish cave tour, birds of prey show and farm shop.</li>
                  <li><strong>Galway City:</strong> Option to take a walking tour and explore the city’s vibrant streets and cultural spots.</li>
                  <li><strong>Bunratty Castle and Folk Park:</strong> A brief stop to explore this medieval fortress.</li>
                </ul>
              </li>
              <li>• Lunch in a Traditional Pub: Optional stop in a local pub for a delicious meal.</li>
              <li>• Return to Dublin: Flexible return time, depending on your preferences.</li>
            </ul>
          </div>
        </section>

     {/* Pricing Section */}
<section className="section-primary pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-10 text-center">Price</h2>
    <div className="grid grid-cols-1 gap-10">
      {/* Card for Premium Car */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium Car <span className="text-gray-600">(up to 3 people)</span>
        </h3>
        <p className="price">€695</p>
        <p className="text-16 leading-relaxed">
          Includes Cliff of Moher entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
      {/* Card for Premium MPV */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium MPV <span className="text-gray-600">(up to 7 people)</span>
        </h3>
        <p className="price">€895</p>
        <p className="text-16 leading-relaxed">
          Includes Cliff of Moher entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Additional Information Section */}
<section className="section-primary mt-4 pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-6">Additional Options</h2>
    <p className="text-18 color-text leading-relaxed">
      The possibility to customize the route and trip plan according to individual preferences, including your favorite places not shown on the standard list, and flexible planning of stops and their duration.
    </p>
    <h3 className="heading-28-medium mt-10 mb-6">Please Note:</h3>
    <ul className="text-18 color-text list-disc pl-8">
      <li>A guide</li>
      <li>Aillwee Cave (€16 p.p)</li>
      <li>Bunratty Castle & Folk Park (€10 p.p)</li>
      <li>Tips for the driver</li>
    </ul>
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