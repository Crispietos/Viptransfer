"use client";

import Image from "next/image";
import Link from "next/link";

export default function SouthWestTrip() {
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
              Kilkenny Castle & Rock of Cashel: Medieval Majesty and Timeless Legends
            </h1>
            <p className="text-18 color-text max-w-4xl mx-auto mb-6 leading-relaxed">
              Discover two of Ireland’s most celebrated landmarks in one unforgettable day. This trip combines the medieval elegance of Kilkenny Castle with the legendary Rock of Cashel – known as the Rock of Kings – offering a perfect blend of history, culture, and scenery.
            </p>
            <p className="text-16 mt-4 font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded-full">
              ⏳ Duration: Approximately 9–11 hours
            </p>
          </div>
        </section>

        {/* Image Section - Opanowany rozmiar i cień */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="premium-hero-img">
              <Image
                src="/assets/imgs/trips/kilkenny-cashel-hero.webp"
                alt="Kilkenny Castle & Rock of Cashel"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Highlights & Itinerary Section */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="heading-32-medium mb-6 text-gray-800 text-center">Highlights</h2>
                <ul className="text-18 color-text premium-list mb-10">
                  <li>
                    <strong>Kilkenny Castle & Medieval City –</strong> Step into the grandeur of this iconic Norman castle, explore its beautifully restored rooms, and learn about the influential Butler family. Afterwards, enjoy the charm of Kilkenny’s cobbled streets, colourful shopfronts, and lively atmosphere.
                  </li>
                  <li>
                    <strong>Rock of Cashel – The Rock of Kings –</strong> Once the seat of the Kings of Munster and the coronation site of High King Brian Boru in 978, this spectacular site rises dramatically above the Golden Vale. According to legend, St. Patrick baptised King Aengus here in the 5th century. Its medieval towers, cathedral, and chapel create an awe-inspiring silhouette against the Irish sky.
                  </li>
                  <li>
                    <strong>Optional Stop – Irish National Stud & Japanese Gardens –</strong> Visit Ireland’s world‑famous thoroughbred horse breeding centre and stroll through the tranquil Japanese Gardens, symbolising the journey of life.
                  </li>
                </ul>

                <h2 className="heading-32-medium mb-6 text-gray-800 text-center mt-10">Itinerary</h2>
                <ul className="text-18 color-text premium-list">
                  <li><strong>Departure from Dublin –</strong> Flexible departure time to suit your schedule.</li>
                  <li><strong>Kilkenny Castle & City –</strong> Guided or self‑guided visit to explore the castle, followed by time to enjoy the medieval charm of Kilkenny.</li>
                  <li><strong>Rock of Cashel –</strong> Discover the heritage, legends, and breathtaking views of this remarkable site.</li>
                  <li><strong>Optional Stop –</strong> Experience the beauty and serenity of the Irish National Stud & Japanese Gardens.</li>
                  <li><strong>Lunch –</strong> Optional stop for a traditional Irish meal in a local pub or restaurant along the route.</li>
                  <li><strong>Return to Dublin –</strong> Flexible return time based on your preferences.</li>
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
                    <li><span style={{color: '#f87171'}}>✕</span> Entry tickets to Kilkenny Castle, Rock of Cashel, or Irish National Stud & Japanese Gardens (optional stop)</li>
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