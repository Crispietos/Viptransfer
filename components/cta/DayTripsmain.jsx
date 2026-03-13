"use client";
import Image from "next/image";
import Link from "next/link";

export default function DayTripsCTA() {
  const dayTrips = [
    {
      id: 1,
      title: "Cliffs of Moher",
      description: "Experience the breathtaking beauty of Ireland's cliffs, rising 214 metres above the Atlantic Ocean.",
      image: "/assets/imgs/daytrips/CliffsofMoher.webp",
      href: "/trips/cliffs-of-moher",
    },
    {
      id: 2,
      title: "Glendalough & Powerscourt",
      description: "Explore serene landscapes and historic gardens.",
      image: "/assets/imgs/daytrips/Glendalough.webp",
      href: "/trips/glendalough-and-powerscourt",
    },
    {
      id: 3,
      title: "Giant’s Causeway",
      description: "Marvel at the natural beauty of this UNESCO heritage site, with its unique basalt columns formed by ancient volcanic activity.",
      image: "/assets/imgs/daytrips/Giant’sCauseway.webp",
      href: "/trips/giants-causeway",
    },
  ];

  return (
    <section className="section pt-120 pb-120 bg-light">
      <div className="container-sub">
        <div className="text-center mb-60">
          <h2 className="heading-44-medium">Discover Our Day Trips</h2>
          <p className="text-16 color-text mt-10">
            Explore the most popular destinations in Ireland with our luxury chauffeur service.
          </p>
        </div>

        {/* Dodany rowGap dla większych odstępów pionowych */}
        <div className="row" style={{ rowGap: "40px" }}>
          {dayTrips.map((trip) => (
            <div key={trip.id} className="col-lg-4 col-md-6 mb-40 d-flex justify-content-center">
              <div className="cardTrip h-100 d-flex flex-column justify-content-between align-items-center" style={{ position: "relative" }}>
                {/* Tekst z minHeight dla wyrównania wysokości */}
                <div className="cardContent text-center w-100 px-2" style={{ minHeight: "160px" }}>
                  <h4 className="heading-20-medium">{trip.title}</h4>
                  <p className="text-14 color-text">{trip.description}</p>
                </div>

                <div className="mt-2">
                  <Image
                    width={370}
                    height={250}
                    src={trip.image}
                    alt={trip.title}
                    className="rounded-lg mx-auto d-block"
                  />
                </div>

                <div className="text-center mt-3 w-100 d-flex justify-content-center">
                  <span
                    className="btn rounded-3 fw-semibold mt-2 px-5 py-3"
                    style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none', minWidth: "220px" }}
                    aria-hidden="true"
                  >
                    {trip.title}
                  </span>
                </div>

                <Link
                  href={trip.href}
                  aria-label={`${trip.title} – view trip`}
                  style={{ position: 'absolute', inset: 0, zIndex: 5, display: 'block' }}
                >
                  <span className="sr-only">{trip.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-60">
          <Link
            href="/day-trip/"
            className="btn rounded-3 fw-semibold px-5 py-3"
            style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none' }}
          >
            View All Trips
          </Link>
        </div>
      </div>
    </section>
  );
}