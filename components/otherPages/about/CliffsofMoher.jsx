"use client";

import Image from "next/image";
import Link from "next/link";

export default function CliffsOfMoher() {
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
            margin-bottom: 12px;
            line-height: 1.6;
          }
          .choice-box {
            background: #f8f9fa;
            border-left: 4px solid #0EA5E9;
            padding: 30px;
            border-radius: 0 16px 16px 0;
            margin: 40px auto;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
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
          /* Karty Included/Excluded (Glassmorphism) */
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

        {/* Nagłówek */}
        <section className="section pt-120 pb-40 text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium mb-4 text-gray-800">
              Cliffs of Moher – Private Day Trip from Dublin
            </h1>
            <p className="text-20 font-medium color-text mb-6">
              with Galway or Optional Scenic Stops
            </p>
            <p className="text-18 color-text max-w-4xl mx-auto mb-6 leading-relaxed">
              This is a private day trip focused on the Cliffs of Moher, with the
              flexibility to include Galway or choose a scenic route with selected
              stops along the way.
            </p>
            
            <div className="max-w-4xl mx-auto text-left choice-box">
              <h3 className="text-20 font-bold text-gray-800 mb-4">You can choose how you would like to spend your day:</h3>
              <ul className="text-18 color-text premium-list">
                <li>
                  <strong>Cliffs of Moher and Galway</strong>
                  <br />a balanced option with time at both locations
                </li>
                <div className="font-bold my-3 text-center" style={{ marginLeft: '-20px', color: '#0EA5E9' }}>— OR —</div>
                <li>
                  <strong>Cliffs of Moher with selected stops along the way</strong>
                  <br />such as The Burren, Doolin, Lahinch, Bunratty Castle or other places of interest
                </li>
              </ul>
            </div>

            <p className="text-16 mt-10 font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded-full">
              ⏳ Estimated duration: approximately 10–13 hours.
            </p>
          </div>
        </section>

        {/* Obrazek - Opanowany rozmiar i cień */}
        <section className="section pt-0 pb-60">
          <div className="container-sub">
            <div className="premium-hero-img">
              <Image
                src="/assets/imgs/daytrips/CliffsofMoher.webp"
                alt="Cliffs of Moher"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Opis miejsc */}
        <section className="section pt-0 pb-40">
          <div className="container-sub max-w-4xl mx-auto text-center">
            <p className="text-18 color-text mb-6 leading-relaxed">
              <strong>Cliffs of Moher</strong> are one of the most recognised and most visited attractions in Ireland. Wide Atlantic views, cliffs rising above the ocean and open space make this a place that truly leaves an impression and is well worth seeing.
            </p>
            <p className="text-18 color-text mb-8 leading-relaxed">
              <strong>Galway</strong> offers a completely different atmosphere. Colourful streets, small cafés, music, and a relaxed, friendly feel make it a very enjoyable stop, even for a short visit.
            </p>
            <div className="p-4" style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
              <p className="text-18 color-text font-medium italic m-0">
                This trip is designed to offer a comfortable pace rather than rushing between multiple locations. No shared transport, no fixed group schedule — just a private journey adjusted to you.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Your Day */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <h2 className="heading-32-medium mb-6 text-gray-800">Planning Your Day</h2>
                <div className="text-18 color-text" style={{ lineHeight: '1.8' }}>
                  <p className="mb-4">
                    The journey to the Cliffs of Moher takes approximately 3.5 hours from Dublin, with scenic stops along the way, making the day feel relaxed and well-paced.
                  </p>
                  <p className="mb-4">
                    Due to the travel distance, the day is planned in a realistic and comfortable way, allowing you to enjoy each stop without rushing.
                  </p>
                  <p className="mb-4">
                    It is not possible to include Cliffs of Moher, Galway and multiple additional stops in one day without significantly reducing the time spent at each location.
                  </p>
                  <p>
                    The plan is always agreed in advance and adjusted to your preferences. You can follow a carefully planned route or personalise it by including places that interest you along the way.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <h2 className="heading-32-medium mb-6 text-gray-800">Optional Stops</h2>
                <p className="text-18 color-text mb-4">Depending on your chosen route, it is possible to include:</p>
                <ul className="text-18 color-text premium-list">
                  <li>Doolin Village</li>
                  <li>Lahinch Beach</li>
                  <li>Bunratty Castle & Folk Park</li>
                  <li>Aillwee Cave & Birds of Prey Centre</li>
                  <li>Hazel Mountain Chocolate</li>
                </ul>
                
                <h2 className="heading-24-medium mb-4 mt-10 text-gray-800">Return to Dublin</h2>
                <p className="text-18 color-text">
                  Return time is flexible, depending on the final plan and pace of the day.
                </p>
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

        {/* Included / Not Included Section - GLASSMORPHISM */}
        <section className="section-primary pt-0 pb-80">
          <div className="container-sub">
            <div className="row mt-10">
              
              {/* Included */}
              <div className="col-lg-6 mb-30">
                <div className="glass-card">
                  <h2 className="heading-28-medium mb-6">What’s Included</h2>
                  <ul className="glass-list">
                    <li><span style={{color: '#4ade80'}}>✓</span> Private transport with driver</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Door-to-door service</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Cliffs of Moher entrance tickets</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Waiting time</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Parking and toll fees</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Bottled water</li>
                    <li><span style={{color: '#4ade80'}}>✓</span> Wi-Fi on board</li>
                  </ul>
                </div>
              </div>

              {/* Not Included */}
              <div className="col-lg-6 mb-30">
                <div className="glass-card" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
                  <h2 className="heading-28-medium mb-6">What’s Not Included</h2>
                  <ul className="glass-list">
                    <li><span style={{color: '#f87171'}}>✕</span> Lunch and personal expenses</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Entry tickets to optional attractions (e.g. Aillwee Cave, Bunratty Castle)</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Guide service</li>
                    <li><span style={{color: '#f87171'}}>✕</span> Gratuities (optional, at your discretion)</li>
                  </ul>
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