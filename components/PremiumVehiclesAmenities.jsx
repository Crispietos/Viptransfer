"use client";

import React from "react";
import Image from "next/image";

export default function PremiumVehiclesAmenities() {
  return (
    <article className="my-5">
      <h1 className="heading-32-medium color-text mb-4 text-center">
        Premium Vehicles & Amenities
      </h1>
      {/* Dwa zdjęcia obok siebie */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <Image
            src="/assets/imgs/merc.png"
            alt="Mercedes Premium Vehicle"
            width={900}
            height={450}
            className="rounded-lg mb-4 mx-auto d-block shadow"
            priority
          />
        </div>
        <div className="col-md-6">
          <Image
            src="/assets/imgs/PrivateChauffeur.webp"
            alt="VIP Transfer Amenities"
            width={900}
            height={450}
            className="rounded-lg mb-4 mx-auto d-block shadow"
            priority
          />
        </div>
      </div>
      {/* BOXY BENEFITÓW */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white h-100 text-center box-animate">
            <i className="bi bi-wifi text-primary mb-3" style={{fontSize: 36}} />
            <h4 className="mb-2 fs-5">Complimentary Wi-Fi</h4>
            <p>Stay connected on the go – free high-speed Wi-Fi in every Mercedes vehicle, perfect for business and leisure travel.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white h-100 text-center box-animate">
            <i className="bi bi-cup-straw text-primary mb-3" style={{fontSize: 36}} />
            <h4 className="mb-2 fs-5">Refreshments Included</h4>
            <p>Enjoy complimentary bottled water and refreshments in our premium fleet, for maximum comfort on every journey.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white h-100 text-center box-animate">
            <i className="bi bi-airplane text-primary mb-3" style={{fontSize: 36}} />
            <h4 className="mb-2 fs-5">Flight Monitoring</h4>
            <p>Real-time flight tracking for airport transfers – always on time, with flexible pickup for delayed or early flights.</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-white shadow-sm rounded p-4 text-center my-5">
        <h2 className="fs-4 mb-2">Travel in Comfort & Style</h2>
        <p>
          Book your <strong>premium transfer</strong> with VIPTransfer and enjoy the luxury of our Mercedes fleet, complimentary amenities, and professional service throughout Ireland.
        </p>
        <a href="/booking" className="btn btn-primary btn-lg mt-2 px-5">Book Now</a>
      </div>
      {/* DESTYNACJE */}
      <div className="my-5 text-center">
        <h3 className="mb-3">Where Do We Go?</h3>
        <p>Dublin • Cork • Galway • Limerick • Belfast • Major Hotels • Airports • Events & Private Addresses</p>
      </div>
      {/* KEYWORDS SEO */}
      <div className="d-none">
        premium vehicles Ireland, Mercedes VIP fleet, transfer with Wi-Fi, airport transfer amenities, luxury car Ireland, chauffeur service with refreshments, flight monitoring transfer Ireland, premium transfer Dublin
      </div>
      <style jsx>{`
        .box-animate {
          transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.2s;
        }
        .box-animate:hover {
          transform: translateY(-7px) scale(1.025);
          box-shadow: 0 10px 28px rgba(0,0,0,0.13), 0 2px 4px rgba(0,0,0,0.10);
        }
      `}</style>
    </article>
  );
}