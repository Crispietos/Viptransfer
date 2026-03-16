"use client";
import Image from "next/image";
import Link from "next/link";

export default function DayTripsPage() {
  const trips = [
    {
      id: 1,
      title: "Cliffs of Moher Tour",
      description: "Experience the breathtaking beauty of Ireland's cliffs.",
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
      description: "Marvel at the natural beauty of this UNESCO heritage site.",
      image: "/assets/imgs/daytrips/Giant’sCauseway.webp",
      href: "/trips/giants-causeway",
    },
    {
      id: 4,
      title: "Waterford & Kilkenny",
      description: "Discover the charm of Kilkenny and Waterford.",
      image: "/assets/imgs/Waterford.webp",
      href: "/trips/waterford-kilkenny",
    },
    {
      id: 5,
      title: "Blarney Castle Tour",
      description: "Explore Ireland’s historical gems in one day.",
      image: "/assets/imgs/Blarney Castle.webp",
      href: "/trips/Blarney-Castle",
    },
    {
      id: 6,
      title: "Castle South and Southwest",
      description: "Journey through castles in Southern Ireland.",
      image: "/assets/imgs/Castle South and Southwest.webp",
      href: "/trips/CastleSouthandSouthwest",
    },
    {
      id: 7,
      title: "Ancient and Medieval Wonders",
      description: "Experience the history of Ireland: Newgrange, Hill of Tara, and Clonmacnoise.",
      image: "/assets/imgs/daytrips/Newgrange.webp", 
      href: "/trips/AncientandMedievalWonders",
    },
   
  ];

  return (
    <>
      <section
        className="section pt-120 pb-60 text-center"
        style={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}
      >
        <div className="container-sub">
          <h1 className="heading-44-medium color-white mb-12">Day Trips</h1>
          <p className="text-16 color-white mt-10 max-w-3xl mx-auto">
            Explore Ireland's most stunning destinations with our luxury day trips.
            Sit back, relax, and let us take care of the details.
          </p>
        </div>
      </section>

      <section className="section pt-60 pb-60">
        <div className="container-sub">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="heading-32-medium mb-20">Discover Ireland Like Never Before</h2>
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
                alt="Day Trips Overview"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center text-gray-500">
        <div className="container mx-auto px-4">
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

      <section className="section pt-60 pb-60">
        <div className="container-sub">
          <h2 className="heading-32-medium text-center mb-40">
            Explore Our Day Trip Destinations
          </h2>

          {/* Display trips in two rows with three items each, ensuring uniform height and alignment */}
          <div className="row" style={{ rowGap: "40px" }}>
            {trips.map((trip) => (
              <div key={trip.id} className="col-lg-4 col-md-6 mb-40 d-flex">
                <div className="cardTrip h-100 d-flex flex-column justify-content-between" style={{width: '100%'}}>
                  {/* Text section with fixed minHeight to align buttons */}
                  <div
                    className="cardInfo text-center"
                    style={{ minHeight: "160px", display: "flex", flexDirection: "column", justifyContent: "center" }}
                  >
                    <h4 className="heading-20-medium mt-10">{trip.title}</h4>
                    <p className="text-14 color-text mb-10">{trip.description}</p>
                  </div>

                  <div className="cardImage mt-2 d-flex justify-content-center">
                    <Link href={trip.href}>
                      <Image
                        width={370}
                        height={250}
                        src={trip.image}
                        alt={trip.title}
                        className="rounded-lg"
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                  </div>

                  <div className="text-center mt-3">
                    <Link
                      href={trip.href}
                      className="btn btn-primary btn-sm text-white border-0"
                      style={{
                        backgroundColor: "#009FE3",
                        color: "#fff",
                        border: "none",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#008FCC")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#009FE3")}
                    >
                      Learn more about {trip.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}