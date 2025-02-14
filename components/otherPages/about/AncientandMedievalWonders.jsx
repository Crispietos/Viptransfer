"use client";

import Image from "next/image";

export default function NorthWestTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              Ancient and Medieval Wonders: A Day Trip Through Ireland’s North West
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the charm and history of Ireland’s most iconic sites with our Castle North West Tours.
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
<<<<<<< HEAD
              src="/assets/imgs/Ancient & Medieval Wonders.webp"
=======
              src="/assets/imgs/Ancient & Medieval Wonders.WebP"
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
              width={1200}
              height={700}
              alt="Ancient and Medieval Wonders"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Itinerary</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Start from Dublin:</strong> Your journey begins at a time and location of your choice in Dublin. Enjoy a private luxury car pickup from your accommodation.
              </li>
              <li>
                <strong>Malahide Castle:</strong> A historic fortress surrounded by 260 acres of lush parkland. Explore the beautifully manicured gardens, unique butterfly house, and the rich history of the Talbot family.
              </li>
              <li>
                <strong>Newgrange:</strong> Visit this ancient passage tomb built around 3200 BCE. Famous for its alignment with the winter solstice, the site includes a guided tour through the Brú na Bóinne Visitor Centre.
              </li>
              <li>
                <strong>Trim Castle:</strong> The largest Anglo-Norman castle in Ireland, known for its medieval history and as a filming location for "Braveheart." Explore the well-preserved keep and learn about the area's history through detailed exhibits.
              </li>
              <li>
                <strong>Lunch at a Traditional Pub:</strong> Enjoy a traditional Irish lunch at a local pub with delicious local dishes and a warm atmosphere (not included in the price).
              </li>
              <li>
                <strong>Return to Dublin:</strong> Relax on your journey back to Dublin, with flexible return times to ensure a leisurely experience.
              </li>
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
        <p className="price">€645</p>
        <p className="text-16 leading-relaxed">
          Includes private luxury car transfer, Newgrange entry tickets, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
        </p>
      </div>
      {/* Card for Premium MPV */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Premium MPV <span className="text-gray-600">(up to 7 people)</span>
        </h3>
        <p className="price">€845</p>
        <p className="text-16 leading-relaxed">
          Includes private luxury car transfer, Newgrange entry tickets, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
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
      <li>• Malahide and Trim Castle entry tickets</li>
      <li>• Meals (lunch/dinner)</li>
      <li>• Tip for driver</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-10 mb-6">Additional Options</h3>
    <p className="text-18 color-text">
      The possibility to customize the route and trip plan according to individual preferences. Flexible planning of stops and their duration.
    </p>
  </div>

  <div className="text-center mt-10">
  <a href="/bookingdaytrip" className="btn-gradient">
        Book Your Day Trip Now
      </a>
    </div>
</section>
      </main>
    </>
  );
}