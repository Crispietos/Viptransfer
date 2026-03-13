"use client";

import React from "react";
import Image from "next/image";

export default function PrivateDriverPage() {
  return (
    <main>
      <section className="section bg-light pt-90 pb-90">
        <div className="container-sub">
          <article className="my-5">
            <h1 className="heading-32-medium color-text mb-4 text-center">
              Private Driver – Chauffeur Service Ireland
            </h1>
            <div className="row justify-content-center mb-5">
              <div className="col-md-6 mb-4 mb-md-0">
                <Image
                  src="/assets/imgs/LuxuryVehicles.webp"
                  alt="Private Driver Ireland"
                  width={900}
                  height={450}
                  className="rounded-lg mb-4 mx-auto d-block shadow"
                  priority
                />
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/imgs/WeddingPersonalization.webp"
                  alt="Private Chauffeur Ireland"
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
                  <i className="bi bi-person-check text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Experienced Drivers</h4>
                  <p>All chauffeurs are licensed, English-speaking and ensure punctual, safe, and comfortable journeys across Ireland.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center box-animate">
                  <i className="bi bi-car-front text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Mercedes Fleet</h4>
                  <p>Travel in a modern Mercedes – clean, elegant, equipped with Wi-Fi, water, and all amenities for your comfort.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center box-animate">
                  <i className="bi bi-geo-alt text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Flexible & Discreet</h4>
                  <p>Door-to-door transfers, hourly bookings, business meetings, sightseeing, airport pickups. Always discreet and tailored to your needs.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white shadow-sm rounded p-4 text-center my-5">
              <h2 className="fs-4 mb-2">Book Your Private Driver in Ireland</h2>
              <p>
                Book a <strong>professional private driver</strong> for transfers in Dublin, across Ireland or for business/leisure trips. Reserve online or contact us for a tailored quote.
              </p>
              <a href="/" className="btn btn-primary btn-lg mt-2 px-5">Book Now</a>
            </div>

            {/* DESTYNACJE */}
            <div className="my-5 text-center">
              <h3 className="mb-3">Popular Private Driver Destinations</h3>
              <p>Dublin • Cork • Galway • Limerick • Belfast • Airports • Hotels • Business & Events</p>
            </div>

            {/* KEYWORDS SEO */}
            <div className="d-none">
              private driver Ireland, chauffeur service Dublin, professional driver Ireland, private driver Cork, private driver Galway, airport chauffeur Ireland, Mercedes chauffeur service, business transfer Ireland, private driver booking Ireland
            </div>
          </article>
        </div>
      </section>
      <style jsx>{`
        .box-animate {
          transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.2s;
        }
        .box-animate:hover {
          transform: translateY(-7px) scale(1.025);
          box-shadow: 0 10px 28px rgba(0,0,0,0.13), 0 2px 4px rgba(0,0,0,0.10);
        }
      `}</style>
    </main>
  );
}