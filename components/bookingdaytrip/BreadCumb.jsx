import Link from "next/link";
import React from "react";

export default function BreadCumb() {
  return (
    <div className="section pt-60 pb-60 bg-primary">
      <div className="container-sub">
        <h1 className="heading-44-medium color-white mb-5">Booking Day Trip</h1>
        <div className="box-breadcrumb">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/service-grid">Booking Day Trip</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
