"use client";

import Image from "next/image";
import Link from "next/link";

export default function CliffsOfMoher() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-4 text-gray-800">
              Cliffs of Moher – Private Day Trip from Dublin
            </h1>
            <p className="text-20 font-medium color-text mb-6">
              with Galway or Optional Scenic Stops
            </p>
            <p className="text-18 color-text max-w-4xl mx-auto mb-6">
              This is a private day trip focused on the Cliffs of Moher, with the
              flexibility to include Galway or choose a scenic route with selected
              stops along the way.
            </p>
            
            <div className="max-w-4xl mx-auto text-left mt-8">
              <h3 className="text-20 font-semibold text-gray-800 mb-4">You can choose how you would like to spend your day:</h3>
              <ul className="text-18 color-text space-y-4 pl-8 list-disc">
                <li>
                  <strong>Cliffs of Moher and Galway</strong>
                  <br />a balanced option with time at both locations
                </li>
                <div className="font-bold my-2 ml-[-20px]">or</div>
                <li>
                  <strong>Cliffs of Moher with selected stops along the way</strong>
                  <br />such as The Burren, Doolin, Lahinch, Bunratty Castle or other places of interest
                </li>
              </ul>
            </div>

            <p className="text-16 mt-10 font-medium text-gray-600">
              Estimated duration: approximately 10–13 hours.
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

        {/* Opis miejsc */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <p className="text-18 color-text mb-6">
              <strong>Cliffs of Moher</strong> are one of the most recognised and most visited attractions in Ireland. Wide Atlantic views, cliffs rising above the ocean and open space make this a place that truly leaves an impression and is well worth seeing.
            </p>
            <p className="text-18 color-text mb-8">
              <strong>Galway</strong> offers a completely different atmosphere. Colourful streets, small cafés, music, and a relaxed, friendly feel make it a very enjoyable stop, even for a short visit.
            </p>
            <p className="text-18 color-text font-medium italic">
              This trip is designed to offer a comfortable pace rather than rushing between multiple locations. No shared transport, no fixed group schedule — just a private journey adjusted to you.
            </p>
          </div>
        </section>

        {/* Planning Your Day */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Planning Your Day</h2>
            <div className="text-18 color-text space-y-4">
              <p>
                The journey to the Cliffs of Moher takes approximately 3.5 hours from Dublin, with scenic stops along the way, making the day feel relaxed and well-paced.
              </p>
              <p>
                Due to the travel distance, the day is planned in a realistic and comfortable way, allowing you to enjoy each stop without rushing.
              </p>
              <p>
                It is not possible to include Cliffs of Moher, Galway and multiple additional stops in one day without significantly reducing the time spent at each location.
              </p>
              <p>
                The plan is always agreed in advance and adjusted to your preferences. The day is designed to be flexible. You can follow a carefully planned route or personalise it by including places that interest you along the way. If you have specific locations in mind, the itinerary can be adjusted to include them where possible.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Stops & Return */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="heading-32-medium mb-6 text-gray-800">Optional Stops</h2>
                <p className="text-18 color-text mb-4">Depending on your chosen route, it is possible to include:</p>
                <ul className="text-18 color-text space-y-2 pl-8 list-disc">
                  <li>Doolin Village</li>
                  <li>Lahinch Beach</li>
                  <li>Bunratty Castle & Folk Park</li>
                  <li>Aillwee Cave & Birds of Prey Centre</li>
                  <li>Hazel Mountain Chocolate</li>
                </ul>
              </div>
              <div>
                <h2 className="heading-32-medium mb-6 text-gray-800">Return to Dublin</h2>
                <p className="text-18 color-text">
                  Return time is flexible, depending on the final plan and pace of the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-primary pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-10 text-center" style={{ color: '#fff' }}>Price</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="card bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  First Class <span className="text-gray-600 block text-lg">(up to 3 people)</span>
                </h3>
                <p className="price text-3xl font-bold mb-4">€695</p>
                <p className="text-16 leading-relaxed text-gray-600">
                  Mercedes S-Class. Includes private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
                </p>
              </div>
              {/* Card 2 */}
              <div className="card bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Premium MPV <span className="text-gray-600 block text-lg">(up to 7 people)</span>
                </h3>
                <p className="price text-3xl font-bold mb-4">€795</p>
                <p className="text-16 leading-relaxed text-gray-600">
                  Includes private luxury transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
                </p>
              </div>
              {/* Card 3 */}
              <div className="card bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Executive MPV <span className="text-gray-600 block text-lg">(up to 6 people)</span>
                </h3>
                <p className="price text-3xl font-bold mb-4">€895</p>
                <p className="text-16 leading-relaxed text-gray-600">
                  Mercedes V-Class with individual captain seats. Includes ultra-luxury VIP transfer, extra legroom, waiting time, parking/tolls, water, and Wi-Fi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Included / Not Included Section */}
        <section className="section-primary pt-0 pb-60">
          <div className="container-sub" style={{ color: '#fff' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              
              {/* Included */}
              <div>
                <h2 className="heading-32-medium mb-6" style={{ color: '#fff' }}>What’s Included</h2>
                <ul className="text-18 space-y-3 pl-8 list-none">
                  <li>✓ Private transport with driver</li>
                  <li>✓ Door-to-door service</li>
                  <li>✓ Cliffs of Moher entrance tickets</li>
                  <li>✓ Waiting time</li>
                  <li>✓ Parking and toll fees</li>
                  <li>✓ Bottled water</li>
                  <li>✓ Wi-Fi on board</li>
                </ul>
              </div>

              {/* Not Included */}
              <div>
                <h2 className="heading-32-medium mb-6" style={{ color: '#fff' }}>What’s Not Included</h2>
                <ul className="text-18 space-y-3 pl-8 list-none">
                  <li>✕ Lunch and personal expenses</li>
                  <li>✕ Entry tickets to optional attractions (e.g. Aillwee Cave, Bunratty Castle)</li>
                  <li>✕ Guide service</li>
                  <li>✕ Gratuities (optional, at your discretion)</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/bookingdaytrip" passHref>
              <span className="btn btn-light rounded-3 px-4 py-3 fw-semibold" style={{ color: '#0EA5E9' }}>Make a booking</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}