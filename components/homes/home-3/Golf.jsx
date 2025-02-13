"use client";

import Image from "next/image";

export default function GolfResortTransfers() {
  return (
    <>
      <main>
        {/* Nagłówek */}
        <section className="section pt-120 pb-60 bg-dark text-center">
          <div className="container-sub">
            <h1 className="heading-44-medium color-white">
              Golf Resort Transfers
            </h1>
            <p className="text-16 color-white mt-10">
              Luxury transportation to Ireland's premier golf resorts for a seamless and relaxing journey.
            </p>
          </div>
        </section>

        {/* Opis usługi */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-32-medium mb-20">
                  Why Choose Our Golf Resort Transfers?
                </h2>
                <p className="text-16 color-text mb-20">
                  We provide exclusive transportation to Ireland’s top golf resorts, ensuring you arrive in comfort and style. Whether it’s a corporate outing, a friendly match, or a golfing vacation, our tailored service caters to your needs.
                </p>
                <ul className="text-16 color-text">
                  <li>✔ Luxurious vehicles for maximum comfort</li>
                  <li>✔ Professional chauffeurs with punctual service</li>
                  <li>✔ Ample space for golf equipment and luggage</li>
                  <li>✔ Flexible pick-up and drop-off locations</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  width={600}
                  height={400}
                  src="/assets/imgs/GolfResortMain.png" // Zdjęcie: "Luxury golf transport Ireland"
                  alt="Golf Resort Transfers"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja dodatkowa */}
        <section className="section pt-60 pb-60 bg-light">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Top Golf Destinations
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/BallybunionGolf.png" // Zdjęcie: "Ballybunion golf resort"
                  alt="Ballybunion Golf Club"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Ballybunion Golf Club</h4>
                <p className="text-16 color-text">
                  A world-renowned golf destination offering stunning views and challenging courses.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/LahinchGolf.png" // Zdjęcie: "Lahinch golf course"
                  alt="Lahinch Golf Club"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">Lahinch Golf Club</h4>
                <p className="text-16 color-text">
                  Known for its rich history and unique links, it's a golfer's paradise.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/PortmarnockGolf.png" // Zdjęcie: "Portmarnock golf resort"
                  alt="Portmarnock Golf Club"
                  className="mb-20"
                />
                <h4 className="heading-20-medium mb-10">
                  Portmarnock Golf Club
                </h4>
                <p className="text-16 color-text">
                  Offers championship-level courses with breathtaking seaside views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lista dostępnych golf resortów */}
        <section className="section pt-60 pb-60">
          <div className="container-sub">
            <h2 className="heading-32-medium text-center mb-40">
              Featured Golf Resorts
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/AdareManor.png" // Zdjęcie: "Adare Manor golf resort"
                  alt="Adare Manor"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Adare Manor</h4>
                <p className="text-16 color-text">
                  Home to the Ryder Cup 2027, Adare Manor offers unparalleled luxury and golfing experience.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/OldHeadGolf.png" // Zdjęcie: "Old Head golf resort Ireland"
                  alt="Old Head Golf Links"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">Old Head Golf Links</h4>
                <p className="text-16 color-text">
                  A dramatic location on the Atlantic coast with some of the most scenic golf holes in the world.
                </p>
              </div>
              <div className="col-lg-4 text-center mb-30">
                <Image
                  width={350}
                  height={200}
                  src="/assets/imgs/KClub.png" // Zdjęcie: "The K Club golf Ireland"
                  alt="The K Club"
                  className="rounded-lg mb-20"
                />
                <h4 className="heading-20-medium mb-10">The K Club</h4>
                <p className="text-16 color-text">
                  A prestigious resort known for hosting the Ryder Cup and European Open.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}