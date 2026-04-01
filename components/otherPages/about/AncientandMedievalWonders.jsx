"use client";

import Image from "next/image";

export default function AncientMedievalTrip() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-light text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-6 text-gray-800">
              Ancient and Medieval Wonders: A Private Journey Through Ireland’s Heritage
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto">
              Discover the history and soul of Ireland with our exclusive tour of iconic ancient and medieval sites.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600">
              Duration: Approximately 10-12 hours
            </p>
          </div>
        </section>

        {/* Image Section - Updated to the new Newgrange photo */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <Image
              src="/assets/imgs/daytrips/Newgrange.webp"
              width={1200}
              height={700}
              alt="Newgrange Ancient Passage Tomb"
              className="rounded-lg shadow-lg mx-auto"
              style={{ objectFit: 'cover' }}
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
                <strong>Newgrange:</strong> Visit this world-famous ancient passage tomb built around 3200 BCE. Famous for its alignment with the winter solstice, the site offers a deep dive into Ireland's prehistoric past through the Brú na Bóinne Visitor Centre.
              </li>
              <li>
                <strong>Trim Castle:</strong> The largest Anglo-Norman castle in Ireland, known for its massive keep and medieval history. It gained modern fame as a filming location for the movie "Braveheart."
              </li>
              <li>
                <strong>Clonmacnoise:</strong> One of Ireland’s most important early Christian monastic settlements, founded in the 6th century by St. Ciarán. Located on the banks of the River Shannon, the site features striking round towers, cathedral ruins, ancient churches and beautifully carved high crosses that tell the story of Ireland’s early religious heritage.
              </li>
              <li>
                <strong>Return to Dublin:</strong> Relax in premium comfort on your journey back to Dublin, with flexible drop-off at your hotel or preferred location.
              </li>
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
          Includes private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
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
    <ul className="text-18 color-text list-disc pl-8">
      <li style={{ color: '#fff' }}>• Tour guide</li>
      <li style={{ color: '#fff' }}>• Trim Castle and Clonmacnoise entry tickets</li>
      <li style={{ color: '#fff' }}>• Meals (lunch/dinner)</li>
      <li style={{ color: '#fff' }}>• Tip for driver</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-10 mb-6" style={{ color: '#fff' }}>Additional Options</h3>
    <p className="text-18" style={{ color: '#fff' }}>
      The possibility to customize the route and trip plan according to individual preferences. Flexible planning of stops and their duration.
    </p>
  </div>

  <div className="text-center mt-10">
    <a
      href="/bookingdaytrip"
      className="btn btn-light rounded-3 px-4 py-3 fw-semibold"
      style={{ color: '#0EA5E9' }}
    >
      Make a booking
    </a>
  </div>
</section>
      </main>
    </>
  );
}