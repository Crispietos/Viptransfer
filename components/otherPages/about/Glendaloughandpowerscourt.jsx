"use client";

import Image from "next/image";
import Link from "next/link"; 

export default function GlendaloughTrip() {
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
              One-Day Trip from Dublin to Glendalough, Powerscourt Garden, Powerscourt Waterfall, and Guinness Lake
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto mb-6 leading-relaxed">
              Experience the beauty of Ireland with our one-day trip from Dublin. Enjoy a private and flexible tour, perfect for groups of 1 to 7 people. Explore stunning landscapes and historical sites at your own pace.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded-full">
              ⏳ Duration: Approximately 10-11 hours
            </p>
          </div>
        </section>

        {/* Image Section - Opanowany rozmiar i cień */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="premium-hero-img">
              <Image
                src="/assets/imgs/daytrips/Glendalough.webp"
                alt="Glendalough"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="heading-32-medium mb-6 text-gray-800 text-center">Tour Highlights</h2>
                <ul className="text-18 color-text premium-list">
                  <li>
                    <strong>Glendalough:</strong> 
                    <ul className="list-disc pl-8 mt-2 mb-3">
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
                    <ul className="list-disc pl-8 mt-2 mb-3">
                      <li>Visit Johnny Fox’s, a historic pub in Glencullen known for its lively atmosphere and traditional Irish music.</li>
                      <li>Explore pubs in the charming village of Dalkey, renowned for its vibrant culture and picturesque scenery.</li>
                    </ul>
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
                    <strong>Mercedes V-Class</strong> with individual captain seats. Includes ultra-luxury VIP transfer, extra legroom, waiting time, parking and toll fees, bottled water, and free Wi-Fi.
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