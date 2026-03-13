"use client";

import Image from "next/image";

export default function CityTours() {
  // Możesz wrzucić dane w tablicy, żeby kod był czytelniejszy
  const features = [
    {
      title: "Meet & Greet Service",
      imgSrc: "/assets/imgs/page/homepage1/Meet & Greet Service.webp",
      description:
        "Your driver will be waiting inside the arrivals hall with a sign displaying your name, so you can easily find each other.",
    },
    {
      title: "Flight Monitoring",
      imgSrc: "/assets/imgs/page/homepage1/Flight Monitoring.webp",
      description:
        "We track your flight in real time and adjust pickup times so your driver arrives exactly when you do.",
    },
    {
      title: "Included Waiting Time",
      imgSrc: "/assets/imgs/page/homepage1/IncludedWaitingTime.webp",
      description:
        "We allow up to 60 minutes (Europe) or 90 minutes (Intercontinental) of waiting time before any additional charges apply.",
    },
    {
      title: "Fixed Prices",
      imgSrc: "/assets/imgs/page/homepage1/Fixed Prices.webp",
      description:
        "No hidden fees or last-minute surprises. The price you see is the price you pay.",
    },
    {
      title: "Easy Booking & Secure Payment",
      imgSrc: "/assets/imgs/page/homepage1/Easy Booking & Secure Payment.webp",
      description:
        "Reserve online in just a few clicks and pay securely in advance—simple and convenient.",
    },
    {
      title: "24/7 Availability",
      imgSrc: "/assets/imgs/page/homepage1/Availability.webp",
      description:
        "No matter what time your flight arrives or departs, we operate around the clock to get you where you need to be.",
    },
  ];

  return (
    <>
      <main>
        {/* NAGŁÓWEK */}
        <section className="section pt-120 pb-60 text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-text">Airport Transfers</h1>
            <p className="text-16 color-text mt-10">
              Traveling to or from Dublin Airport? We offer
              professional, stress-free transfers to any location in Ireland, ensuring a
              smooth and comfortable journey. For long-distance transfers, we also provide
              pickups from all major Irish airports, including Cork, Shannon, and Belfast.
            </p>
          </div>
        </section>

        {/* SEKCJA Z 6 PUNKTAMI W RAMKACH (2 rzędy x 3 kolumny) */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              {features.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="feature-box text-center"
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "20px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={400}
                      height={225}
                      style={{ objectFit: "contain" }}
                    />
                    <h3 className="text-20 color-text mt-20">{item.title}</h3>
                    <p className="text-16 color-text mt-10">{item.description}</p>
                    <div style={{ marginTop: "auto" }}>
                      <a
                        href="https://viptransfer.ie/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '12px 32px',
                          background: '#28584B',
                          color: '#fff',
                          borderRadius: '2rem',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          textDecoration: 'none',
                          transition: 'background 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#21463b'}
                        onMouseOut={e => e.currentTarget.style.background = '#28584B'}
                      >
                        Make a booking
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
     
      </main>
    </>
  );
}