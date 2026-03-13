"use client";

import Image from "next/image";
import Link from "next/link";

export default function WeddingCar() {
  return (
    <main>
      {/* Nagłówek */}
      <section
        className="section pt-60 pb-40 text-center"
        style={{ background: "linear-gradient(to right, #003366, #0099ff)" }}
      >
        <div className="container-sub">
          <h1 className="heading-44-medium color-white">Wedding Car</h1>
          <p className="text-16 color-white mt-4 max-w-2xl mx-auto">
            Arrive in style on your special day with our elegant, chauffeur-driven Mercedes S-Class.
          </p>
        </div>
      </section>

      {/* Ceny */}
      <section className="section pt-40 pb-40 bg-light">
        <div className="container-sub text-center max-w-2xl mx-auto">
          

          <h2 className="heading-32-medium mb-6">
            Mercedes S-Class LWB 
          </h2>
          <p className="text-16 color-text mb-2">
            start from €300
          </p>
          <p className="text-16 color-text mb-6">
            Mileage included: 40 km
          </p>

          <p className="text-16 color-text mb-6">
           Rental duration: up to 4hours
          </p>




          <Link
            href="/contact"
            className="inline-block mt-10 text-white font-medium py-3 px-8 rounded-md transition"
            style={{ backgroundColor: '#0EA5E9', border: 'none', textDecoration: 'none', display: 'inline-block', padding: '12px 24px', borderRadius: '6px', textAlign: 'center', minWidth: '160px' }}
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Opis pojazdu */}
    {/* Opis pojazdu */}
<section className="section pt-40 pb-40">
  <div className="container-sub grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="heading-32-medium mb-6">Experience Luxury and Comfort</h2>
      <p className="text-16 color-text mb-4">
        On your wedding day, enjoy a chauffeur-driven Mercedes S-Class in classic black. This elegant vehicle features a spacious interior adorned with light cream leather upholstery and a panoramic glass sunroof, filling the cabin with natural light to create an exceptional atmosphere.
      </p>
      <p className="text-16 color-text mb-4">
        The black Mercedes S-Class combines modern styling with timeless sophistication, ensuring a grand and refined arrival at your wedding. With an extended wheelbase, the vehicle offers generous legroom, perfect even for the most elaborate wedding gowns.
      </p>
      <p className="text-16 color-text mb-4">
        One of the unique highlights of our service is the “Lady Driver” option — an experienced female chauffeur who ensures a smooth, professional, and comforting experience on your special day.
      </p>
      <p className="text-16 color-text mb-4">
        The car comes with subtle decorative touches as standard, such as ribbons or simple floral arrangements. However, we’re happy to discuss your personal preferences and offer custom decoration options to match your wedding theme and vision.
      </p>
      <p className="text-16 color-text">
        With the perfect combination of elegance, comfort, and exclusive service, this luxury experience will be a memorable part of your wedding journey.
      </p>
    </div>
  </div>
</section>

      {/* Mini Gallery */}
      <section className="section pt-20 pb-40">
        <div className="container-sub grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            width={400}
            height={300}
            src="/assets/imgs/daytrips/WeddingTransfers.webp"
            alt="Wedding Car"
            className="rounded-lg shadow-md"
          />
          <Image
            width={400}
            height={300}
            src="/assets/imgs/weeding/weding1.webp"
            alt="Elegant black Mercedes S-Class decorated for wedding"
            className="rounded-lg shadow-md"
          />
          <Image
            width={400}
            height={300}
            src="/assets/imgs/weeding/weding2.webp"
            alt="Wedding car interior with cream leather seats"
            className="rounded-lg shadow-md"
          />
          <Image
            width={400}
            height={300}
            src="/assets/imgs/weeding/weding3.webp"
            alt="Chauffeur opening the door for bride"
            className="rounded-lg shadow-md"
          />
          <Image
            width={400}
            height={300}
            src="/assets/imgs/weeding/weding4.webp"
            alt="Bride and groom beside Mercedes S-Class"
            className="rounded-lg shadow-md"
          />
        
        </div>
      </section>
    </main>
  );
}