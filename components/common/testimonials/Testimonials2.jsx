"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="py-5" style={{ backgroundColor: '#0EA5E9' }}>
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-2" style={{ color: '#fff' }}>Private Day Trips from Dublin</h2>
            <p className="mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Airport transfers & custom itineraries across Ireland
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
              <li>Friendly private driver, comfortable car</li>
              <li>Popular routes: <strong>Cliffs of Moher</strong>, <strong>Wicklow Mountains</strong>, <strong>Kilkenny</strong></li>
              <li><strong>Dublin Airport transfers</strong> with flight monitoring</li>
              <li>Flexible stops and timings to fit your day</li>
            </ul>
            <Link href="/day-trip/">
              <p style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>
                Plan your trip today →
              </p>
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <Image
              src="/assets/imgs/gallery/Gallery8.webp "
              alt="VIP Transfer Day Trips and Airport Transfers"
              width={500}
              height={350}
              className="img-fluid rounded-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}