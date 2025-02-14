"use client";

import Image from "next/image";
import Link from "next/link";

export default function DayTripsCTA() {
  const dayTrips = [
    {
      id: 1,
      title: "Cliffs of Moher",
      description: "Experience the breathtaking beauty of Ireland's cliffs.",
      image: "/assets/imgs/daytrips/CliffsofMoher.webp", // Zdjęcie: wyszukaj "cliffs of moher scenic view" na Adobe Stock
      href: "/trips/cliffs-of-moher",
    },
    {
      id: 2,
      title: "Glendalough & Powerscourt",
      description: "Explore serene landscapes and historic gardens.",
      image: "/assets/imgs/daytrips/Glendalough.webp", // Zdjęcie: wyszukaj "Glendalough valley Ireland" na Adobe Stock
      href: "/trips/glendalough-and-powerscourt",
    },
    {
      id: 3,
      title: "Giant’s Causeway",
      description: "Marvel at the natural beauty of this UNESCO heritage site.",
      image: "/assets/imgs/daytrips/Giant’sCauseway.webp", // Zdjęcie: wyszukaj "giant's causeway natural beauty" na Adobe Stock
      href: "/trips/giants-causeway",
    },
    {
      id: 4,
      title: "Waterford & Kilkenny",
      description:
        "Discover the charm of Kilkenny and Waterford.",
      image: "/assets/imgs/Waterford.webp",
      href: "/trips/waterford-kilkenny",
    },
    {
      id: 5,
      title: "Blarney Castle",
      description:
        "Explore Ireland’s historical gems in one day.",
      image: "/assets/imgs/Blarney Castle.webp",
      href: "/trips/Blarney-Castle",
    },
    {
      id: 6,
      title: "Castle South and Southwest",
      description:
        "Journey through castles in Southern Ireland.",
      image: "/assets/imgs/Castle South and Southwest.webp",
      href: "/trips/CastleSouthandSouthwest",
    },
    {
      id: 7,
                  title: "Ancient & Medieval Wonders",
                  description:
                    "A day trip through Ireland’s North West.",
                  image: "/assets/imgs/Ancient & Medieval Wonders.webp",
                  href: "/trips/AncientandMedievalWonders",
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
        <div className="row">
          {dayTrips.map((trip) => (
            <div key={trip.id} className="col-lg-4 col-md-6 mb-30">
              <div className="cardTrip">
                <Image
                  width={370}
                  height={250}
                  src={trip.image}
                  alt={trip.title}
                  className="rounded-lg"
                />
                <div className="cardContent mt-20">
                  <h4 className="heading-20-medium">{trip.title}</h4>
                  <p className="text-14 color-text">{trip.description}</p>
                  <Link href={trip.href} className="btn btn-primary mt-10">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-60">
          <Link href="/tripday/daytrips" className="btn btn-secondary">
            View All Trips
          </Link>
        </div>
      </div>
    </section>
  );
}