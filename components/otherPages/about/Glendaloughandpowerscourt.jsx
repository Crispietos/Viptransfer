"use client";

import Image from "next/image";
import Link from "next/link"; // Import powinien być tutaj, na górze

export default function GlendaloughTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              One-Day Trip from Dublin to Glendalough, Powerscourt Garden, Powerscourt Waterfall, and Guinness Lake
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Experience the beauty of Ireland with our one-day trip from Dublin. Enjoy a private and flexible tour, perfect for groups of 1 to 7 people. Explore stunning landscapes and historical sites at your own pace.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Duration: Approximately 10-11 hours
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image

              src="/assets/imgs/daytrips/Glendalough.webp"

              src="/assets/imgs/daytrips/Glendalough.WebP"
 
              width={1200}
              height={700}
              alt="Glendalough"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium mb-6 text-gray-800">Tour Highlights</h2>
            <ul className="text-18 color-text space-y-6 pl-8">
              <li>
                <strong>Glendalough:</strong> 
                <ul className="list-disc pl-8">
                  <li>Founded by St. Kevin in the 6th century with several historical churches and chapels.</li>
                  <li>The round tower is one of the best-preserved in Ireland and served multiple functions, including refuge from raids.</li>
                  <li>Walk along trails surrounded by picturesque landscapes and two lakes (Upper and Lower).</li>
                </ul>
              </li>
              <li>
                <strong>Powerscourt House and Garden:</strong> Renowned for its exquisitely landscaped grounds, including Italian, Japanese, and walled gardens, set against Sugarloaf Mountain.
              </li>
              <li>
                <strong>Lunch Break:</strong> Lunch at a local restaurant (cost not included in the trip price). The proposed lunch time is flexible.
              </li>
              <li>
                <strong>Powerscourt Waterfall:</strong> Admire Ireland's highest waterfall, surrounded by forests and wild nature.
              </li>
              <li>
                <strong>Guinness Lake (Lough Tay):</strong> A short visit and photo opportunity at one of Ireland’s most picturesque lakes.
              </li>
              <li>
                <strong>Optional Stops:</strong> 
                <ul className="list-disc pl-8">
                  <li>Visit Johnny Fox’s, a historic pub in Glencullen known for its lively atmosphere and traditional Irish music.</li>
                  <li>Explore pubs in the charming village of Dalkey, renowned for its vibrant culture and picturesque scenery.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

       {/* Pricing Section */}
<section className="section-primary pt-60 pb-60">
  <div className="container-sub">
    <h2 className="heading-32-medium mb-10 text-center">Price</h2>
    <div className="grid grid-cols-1 gap-10">
      {/* Card for Group of 3 */}
      <div className="card">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Group of up to 3 people
        </h3>
        <p className="price">€595</p>
        <p className="text-16 leading-relaxed">
          Includes private driver, transport in a luxury vehicle, tickets to Powerscourt Garden, entrance to Powerscourt Waterfall, bottled water, and Wi-Fi on board.
        </p>
      </div>
      {/* Card for Group of 7 */}
      <div className="card mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Group of up to 7 people
        </h3>
        <p className="price">€745</p>
        <p className="text-16 leading-relaxed">
          Includes private driver, transport in a luxury vehicle, tickets to Powerscourt Garden, entrance to Powerscourt Waterfall, bottled water, and Wi-Fi on board.
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