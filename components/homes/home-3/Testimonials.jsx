"use client";

import Image from "next/image";

export default function PrivateChauffeur() {
  return (
    <>
      <main>
  {/* Nagłówek */}
  <section
  className="section pt-120 pb-60 text-center"
  style={{ background: "linear-gradient(to right, #003366, #0099ff)" }}
>
    <div className="container-sub">
      <h1 className="heading-44-medium color-white">Private Driver – Comfort and Style, Wherever You Go</h1>
      <p className="text-16 color-white mt-10">
        Our Private Driver service is designed to provide you with comfortable and hassle-free transportation across Ireland.
      </p>
    </div>
  </section>

  {/* Opis usługi */}
  <section className="section pt-60 pb-60">
    <div className="container-sub">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="heading-32-medium mb-20">
            Why Choose Private Driver Services?
          </h2>
          <p className="text-16 color-text mb-20">
            Whether you’re traveling for business, leisure, or everyday needs, we offer reliable, stylish, and professional transfers from point A to point B. Wherever you need to go, we’ll get you there.
          </p>
          <ul className="text-16 color-text">
            <li>✔ Premium-class vehicles ensure a smooth and comfortable journey</li>
            <li>✔ Flexible routes tailored to your schedule and preferences</li>
            <li>✔ Available for all occasions – business meetings, personal trips, or daily commutes</li>
            <li>✔ Covering all of Ireland – pick-ups and drop-offs from any location nationwide</li>
            <li>✔ Hourly hire option available for multi-stop journeys or flexible plans</li>
            <li>✔ Early morning and late-night transfers available upon request</li>
          </ul>
          <p className="text-16 color-text mt-20">
            Our drivers always maintain a smart, business-casual appearance. If you require a driver in a formal suit, just let us know in advance, and we’ll gladly arrange it.
          </p>
        </div>
        <div className="col-lg-6">
          <Image
            width={600}
            height={400}
            src="/assets/imgs/PrivateChauffeur.webp"
            alt="Private Chauffeur"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>



      
      </main>
    </>
  );
}