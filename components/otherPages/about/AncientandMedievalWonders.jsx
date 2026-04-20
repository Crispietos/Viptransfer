"use client";

import Image from "next/image";
import Link from "next/link";

export default function AncientMedievalTrip() {
  return (
    <>
      <main>
        {/* --- DEDYKOWANE STYLE PREMIUM (Bezpieczne dla Bootstrapa) --- */}
        <style>{`
          .premium-hero-img {
            position: relative;
            width: 100%;
            height: 500px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            margin-bottom: 40px;
          }
          .premium-list {
            padding-left: 20px;
            margin-bottom: 20px;
          }
          .premium-list li {
            list-style-type: disc;
            margin-bottom: 15px;
            line-height: 1.6;
          }
          /* Karty Cenowe */
          .price-card-premium {
            background: #fff;
            border-radius: 20px;
            padding: 40px 30px;
            height: 100%;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
          }
          .price-card-premium:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          }
          .price-card-premium .price-value {
            font-size: 36px;
            font-weight: 800;
            color: #0EA5E9;
            margin: 20px 0;
          }
          /* Karty Glassmorphism */
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 40px;
            height: 100%;
            color: #fff;
          }
          .glass-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .glass-list li {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 17px;
            line-height: 1.5;
          }
        `}</style>

        {/* Header Section */}
        <section className="section pt-120 pb-40 text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-4 text-gray-800">
              Ancient and Medieval Wonders: A Private Journey Through Ireland’s Heritage
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto mb-6 leading-relaxed">
              Discover the history and soul of Ireland with our exclusive tour of iconic ancient and medieval sites.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded-full">
              ⏳ Duration: Approximately 10-12 hours
            </p>
          </div>
        </section>

        {/* Image Section - Opanowany rozmiar i cień */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="premium-hero-img">
              <Image
                src="/assets/imgs/daytrips/Newgrange.webp"
                alt="Newgrange Ancient Passage Tomb"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="heading-32-medium mb-8 text-gray-800 text-center">Itinerary</h2>
                <ul className="text-18 color-text premium-list">
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
            </div>
          </div>
        </section>

        {/* Pricing Section - ELEGANCJA I BOOTSTRAP GRID */}
        <section className="section-primary pt-80 pb-80">
          <div className="container-sub">
            <h2 className="heading-36-medium mb-10 text-center" style={{ color: '#fff' }}>Trip Pricing</h2>
            
            <div className="row">
              {/* Card 1: Luxury */}
              <div className="col-lg-4 col-md-12 mb-30">
                <div className="price-card-premium">
                  <h3 className="text-24 font-bold text-gray-800 mb-2">Luxury</h3>
                  <span className="text-gray-500 font-medium">up to 3 people</span>
                  <div className="price-value">From €695</div>
                  <p className="text-16 leading-relaxed text-gray-600 flex-grow">
                    <strong>Mercedes S-Class.</strong> Includes private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
                  </p>
                </div>
              </div>

              {/* Card 2: Comfort */}
              <div className="col-lg-4 col-md-12 mb-30">
                <div className="price-card-premium" style={{ transform: 'scale(1.03)', zIndex: 2, border: '2px solid #0EA5E9' }}>
                  <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#0EA5E9', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>Most Popular</div>
                  <h3 className="text-24 font-bold text-gray-800 mb-2 mt-3">Comfort</h3>
                  <span className="text-gray-500 font-medium">up to 7 people</span>
                  <div className="price-value">From €795</div>
                  <p className="text-16 leading-relaxed text-gray-600 flex-grow">
                    Includes private comfortable transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
                  </p>
                </div>
              </div>

              {/* Card 3: Executive */}
              <div className="col-lg-4 col-md-12 mb-30">
                <div className="price-card-premium">
                  <h3 className="text-24 font-bold text-gray-800 mb-2">Executive</h3>
                  <span className="text-gray-500 font-medium">up to 6 people</span>
                  <div className="price-value">From €895</div>
                  <p className="text-16 leading-relaxed text-gray-600 flex-grow">
                    <strong>Mercedes V-Class</strong> with individual captain seats. Includes ultra-luxury VIP transfer, extra legroom, waiting time, parking/tolls, water, and Wi-Fi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section - GLASSMORPHISM */}
        <section className="section-primary pt-0 pb-80">
          <div className="container-sub">
            <div className="row mt-10">
              
              {/* Not Included */}
              <div className="col-lg-6 mb-30">
                <div className="glass-card" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
                  <h2 className="heading-28-medium mb-6">What’s Not Included</h2>
                  <ul className="glass-list">
                    <li><span style={{color: '#f87171'}}>✕</span> Tour guide</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Trim Castle and Clonmacnoise entry tickets</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Meals (lunch/dinner)</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Tip for driver</li>
                  </ul>
                </div>
              </div>

              {/* Additional Options */}
              <div className="col-lg-6 mb-30">
                <div className="glass-card">
                  <h2 className="heading-28-medium mb-6">Additional Options</h2>
                  <p className="text-18" style={{ lineHeight: '1.7', color: '#fff' }}>
                    The possibility to customize the route and trip plan according to individual preferences. Flexible planning of stops and their duration.
                  </p>
                </div>
              </div>

            </div>

            <div className="text-center mt-30">
              <Link href="/bookingdaytrip" passHref>
                <span className="btn btn-light rounded-3 px-5 py-4 fw-bold text-18" style={{ color: '#0EA5E9', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  Make a booking
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}