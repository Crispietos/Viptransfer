"use client";

import React from "react";
import Image from "next/image";

export default function LongDistanceTransferPage() {
  return (
    <main>
      <section className="section bg-light pt-90 pb-90">
        <div className="container-sub">
          <article className="my-5">
            <h1 className="heading-32-medium color-text mb-4 text-center">
              Long Distance Transfer from Dublin Airport
            </h1>
            <div className="mb-5 pb-3 text-center">
              <Image
                src="/assets/imgs/DublinCity.webp"
                alt="Long Distance Private Transfer from Dublin Airport"
                width={900}
                height={450}
                className="rounded-lg mb-4 mx-auto d-block shadow-lg"
                priority
              />
            </div>
            {/* BOXY BENEFITÓW */}
            <div className="row g-4 mb-5 mt-5">
              <div className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center benefit-hover">
                  <i className="bi bi-car-front text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Private & Direct</h4>
                  <p>Door-to-door transfers from Dublin Airport to any city in Ireland, including Cork, Galway, Limerick, and more.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center benefit-hover">
                  <i className="bi bi-person-check text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Professional Drivers</h4>
                  <p>English-speaking, punctual chauffeurs. Mercedes-Benz fleet. Complimentary Wi-Fi & bottled water on board.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 shadow-sm rounded bg-white h-100 text-center benefit-hover">
                  <i className="bi bi-cash-coin text-primary mb-3" style={{fontSize: 36}} />
                  <h4 className="mb-2 fs-5">Transparent Pricing</h4>
                  <p>No hidden fees, all-inclusive rates, flexible pick-up times, and flight monitoring for your peace of mind.</p>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="bg-white shadow-sm rounded p-4 text-center my-5">
              <h2 className="fs-4 mb-2">Book Your Premium Transfer Today</h2>
              <p>
                Enjoy a seamless <strong>door-to-door transfer</strong> from Dublin Airport with VIPTransfer. Book online or contact us for a custom quote.
              </p>
              <a href="/" className="btn btn-primary btn-lg mt-2 px-5">Book Now</a>
            </div>
            {/* DESTYNACJE */}
            <div className="my-5 text-center">
              <h3 className="mb-3">Popular Destinations</h3>
              <p>Dublin Airport to Cork • Galway • Limerick • Belfast • Hotels & Private Addresses Nationwide</p>
            </div>
            {/* KEYWORDS DLA SEO (opcjonalnie w d-none, żeby nie zaburzało wizualnie) */}
            <div className="d-none d-md-block"><small>
              long distance transfer from Dublin Airport, private driver Dublin, Mercedes transfers Ireland, premium airport transfer, door-to-door chauffeur, Dublin to Cork transfer, Dublin to Galway transfer, airport to city transfer Ireland
            </small></div>
          </article>
        </div>
        <style jsx>{`
          .benefit-hover {
            transition: transform 0.22s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s cubic-bezier(0.4,0,0.2,1);
          }
          .benefit-hover:hover {
            transform: translateY(-7px) scale(1.025);
            box-shadow: 0 0.5rem 2rem rgba(13,110,253,.17), 0 .125rem .25rem rgba(0,0,0,.09);
          }
        `}</style>
      </section>
    </main>
  );
}