"use client";

import Image from "next/image";
import Link from "next/link";

export default function DayTrips() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">Day Trips</h1>
            <p className="text-16 color-white mt-10">
              Explore Ireland's most stunning destinations with our luxury day trips. Sit back, relax, and let us take care of the details.
            </p>
          </div>
        </section>

        {/* Service Description Section */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Discover Ireland Like Never Before
                </h2>
                <p className="text-16 color-text mb-20">
                  Our Day Trips are designed to provide unforgettable experiences while traveling in comfort and style. From historic landmarks to breathtaking landscapes, VIPTransfer ensures that every journey is tailored to your preferences.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Luxury vehicles for ultimate comfort</li>
                  <li>✔ Knowledgeable chauffeurs with local insights</li>
                  <li>✔ Customizable itineraries to fit your schedule</li>
                  <li>✔ Stress-free travel with our professional service</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}
                  src="/assets/imgs/daytrips/overview.webp"
                  alt="Day Trips"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Section */}
        <section className="bg-white py-24 text-center text-gray-500">
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto p-4 w-full lg:w-8/12">
                <h2 className="font-bold leading-tight mb-6 text-3xl text-red-700 uppercase">
                  Explore Ireland with Our Day Trips
                </h2>
                <p className="font-bold mb-8 pt-10 text-black text-lg">
                  Discover the beauty of Ireland with our flexible and private day trips. Whether you're looking to explore the stunning Cliffs of Moher, the historic sites of Glendalough & Powerscourt, the natural wonder of Giant’s Causeway, or the charming cities of Waterford & Kilkenny, we have something for everyone. Our day trips are designed to offer you the freedom to enjoy these unique regions at your own pace, with the comfort of private transport and the flexibility to cater to groups of <strong>1 to 7</strong> people. Choose your adventure and experience the best of Ireland with us.
                </p>
                <p className="font-bold mb-7 text-lg text-red-700 uppercase">
                  Estimated trip duration: varies depending on the destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Day Trips Grid Section */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Explore Our Day Trip Destinations
            </h2>
            <div className="row">
              {[
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

                            
              ].map((trip) => (
                <div key={trip.id} className="col-lg-4 mb-30">
                  <div className="cardTrip">
                    <div className="cardImage">
                      <Link href={trip.href}>
                        <Image
                          width={370}
                          height={250}
                          src={trip.image}
                          alt={trip.title}
                          className="rounded-lg"
                        />
                      </Link>
                    </div>
                    <div className="cardInfo text-center">
                      <h4 className="heading-20-medium mt-10">{trip.title}</h4>
                      <p className="text-14 color-text mb-10">
                        {trip.description}
                      </p>
                      <Link
                        href={trip.href}
                        className="btn btn-primary btn-sm mt-10"
                      >
                        Learn More
                      </Link>
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