import Header from "@/components/headers/Header1";
import Footer from "@/components/footers/Footer1";
import Image from "next/image";
import Link from "next/link";
import DayTripsCTA from "@/components/cta/DayTripsCTA";

export const metadata = {
  title: "Day Trips from Dublin – Private Chauffeur Tours | VIPtransfer.ie",
  description:
    "Tailor-made day trips from Dublin with a private driver and premium fleet. Fixed pricing, meet & greet, flight tracking, complimentary water & Wi‑Fi. Book your tour today.",
  alternates: {
    canonical: "https://viptransfer.ie/day-trip/",
  },
  openGraph: {
    title: "Day Trips from Dublin – Private Chauffeur Tours",
    description: "Tailor-made day trips with a private driver and premium fleet.",
    url: "https://viptransfer.ie/day-trip/",
    siteName: "VIPtransfer.ie",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og/day-trips.jpg",
        width: 1200,
        height: 630,
        alt: "VIPtransfer Day Trips from Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Trips from Dublin – Private Chauffeur Tours",
    description: "Tailor-made day trips with a private driver and premium fleet.",
    images: ["/assets/imgs/og/day-trips.jpg"],
  },
};

const dayTrips = [
  {
    title: "Cliffs of Moher & Galway",
    desc: "Experience the majestic cliffs and the vibrant city of Galway at your own pace.",
    image: "/assets/imgs/daytrips/CliffsofMoher.webp",
    link: "/trips/cliffs-of-moher",
    price: "From €695",
  },
  {
    title: "Giant’s Causeway",
    desc: "Discover the unique rock formations and the stunning Northern Irish coast.",
    image: "/assets/imgs/daytrips/Giant’sCauseway.webp",
    link: "/trips/giants-causeway", // <-- Upewnij się, że ten plik tak się nazywa w folderze trips
    price: "From €695",
  },
  {
    title: "Glendalough & Powerscourt",
    desc: "Explore stunning ancient landscapes, lakes, and exquisite historical gardens.",
    image: "/assets/imgs/daytrips/Glendalough.webp",
    link: "/trips/glendalough-and-powerscourt",
    price: "From €695",
  },
  {
    title: "Waterford & Kilkenny",
    desc: "A journey through Ireland's ancient east, medieval castles, and crystal history.",
    image: "/assets/imgs/Waterford.webp",
    link: "/trips/waterford-kilkenny",
    price: "From €695",
  },
  {
    title: "Blarney Castle & Cobh",
    desc: "Kiss the legendary Blarney Stone and explore the historic port town of Cobh.",
    image: "/assets/imgs/Blarney Castle.webp",
    link: "/trips/Blarney-Castle",
    price: "From €695",
  },
  {
    title: "Ancient & Medieval Wonders",
    desc: "A deep dive into Ireland's prehistoric past, featuring Newgrange and Trim Castle.",
    image: "/assets/imgs/daytrips/Newgrange.webp",
    link: "/trips/AncientandMedievalWonders",
    price: "From €695",
  },
  {
    title: "Kilkenny Castle & Cashel",
    desc: "Medieval majesty and timeless legends in one unforgettable day.",
    image: "/assets/imgs/trips/kilkenny-cashel-hero.webp",
    link: "/trips/south-west-trip", // <-- Upewnij się, że ten plik tak się nazywa w folderze trips
    price: "From €695",
  }
];

export default function PrivateChauffeur() {
  return (
    <>
      <Header />
      <main>
        {/* --- CZYSTY CSS DLA EFEKTÓW HOVER --- */}
        <style>{`
          .day-trip-card {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.06);
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #f0f0f0;
          }
          .day-trip-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.12);
          }
          .card-img-wrapper {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
          }
          .day-trip-card .card-img {
            transition: transform 0.6s ease;
            object-fit: cover;
          }
          .day-trip-card:hover .card-img {
            transform: scale(1.08);
          }
          .card-content {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }
          .day-trip-title {
            font-size: 20px;
            font-weight: 700;
            color: #111;
            margin-bottom: 10px;
            transition: color 0.3s ease;
          }
          .day-trip-card:hover .day-trip-title {
            color: #0EA5E9;
          }
          .day-trip-desc {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
            flex-grow: 1;
            line-height: 1.6;
          }
          .price-section {
            border-top: 1px solid #f0f0f0;
            padding-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .arrow-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f4f7fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0EA5E9;
            transition: all 0.3s ease;
          }
          .day-trip-card:hover .arrow-btn {
            background-color: #0EA5E9;
            color: #fff;
          }
        `}</style>

        {/* Hero / SEO heading */}
        <section className="section pt-120 pb-40 text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium text-gray-800">Private Day Trips from Dublin</h1>
            <p className="text-18 color-text mt-10 max-w-4xl mx-auto">
              Discover Ireland in comfort with your personal chauffeur.
            </p>
            <p className="text-16 color-text mt-10 max-w-4xl mx-auto">
              Experience Ireland’s highlights with a dedicated private driver. Choose from curated routes or design your own itinerary. Enjoy door-to-door service, premium vehicles, and flexible schedules tailored to you.
            </p>
          </div>
        </section>

        {/* Sekcja z listą wycieczek */}
        <section className="section pt-0 pb-90">
          <div className="container-sub">
            <div className="row mt-40">
              {dayTrips.map((trip, index) => (
                <div className="col-lg-4 col-md-6 mb-30" key={index}>
                  <Link href={trip.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    
                    <div className="day-trip-card">
                      {/* Obrazek */}
                      <div className="card-img-wrapper">
                        <Image
                          src={trip.image}
                          alt={trip.title}
                          fill
                          className="card-img"
                        />
                      </div>
                      
                      {/* Treść karty */}
                      <div className="card-content">
                        <h3 className="day-trip-title">
                          {trip.title}
                        </h3>
                        <p className="day-trip-desc">
                          {trip.desc}
                        </p>
                        
                        {/* Premium Price Tag */}
                        <div className="price-section">
                          <div>
                            <span style={{ display: 'block', fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Starting from</span>
                            <span style={{ display: 'block', fontSize: '22px', fontWeight: '800', color: '#111' }}>{trip.price}</span>
                          </div>
                          <div className="arrow-btn">
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sekcja CTA */}
        <section className="section bg-light pt-90 pb-90">
          <div className="container-sub">
            <DayTripsCTA />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}