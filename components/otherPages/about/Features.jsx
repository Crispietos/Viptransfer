import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section className="section">
      <div className="container-sub">
        <div className="mt-60">
          <h2 className="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">
            About
          </h2>
          <div className="content-single wow fadeInUp">
            <p>
              <strong>Premium Private Transfer in Ireland</strong>
            </p>
            <p>
              At <strong>Viptransfer</strong>, we offer a boutique, premium private
              transport service tailored to those who appreciate comfort,
              professionalism, and flexibility. Our service strikes the perfect
              balance—delivering high travel standards at more accessible pricing,
              making us an ideal alternative to both exclusive chauffeur companies
              and budget transport providers. This ensures a comfortable,
              reliable, and discreet journey without unnecessary formality.
            </p>
            <p>
              With over 10 years of experience, we have earned a reputation for
              trustworthy and professional service. Our fleet consists of fully
              licensed, well-maintained vehicles, and our drivers are experienced,
              courteous, and dedicated to ensuring a smooth, enjoyable ride.
            </p>
            <hr />
            <h3 className="heading-32-medium mb-20">Our Service Standards</h3>
            <ul className="list-ticks list-ticks-small">
              <li className="text-16 mb-20">
                Premium Cars – Clean, comfortable, and fully licensed vehicles.
              </li>
              <li className="text-16 mb-20">
                Professional Drivers – Experienced, well-presented, and committed
                to excellent service.
              </li>
              <li className="text-16 mb-20">
                Easy Booking – Get an instant quote and book your journey in just a
                few clicks.
              </li>
              <li className="text-16 mb-20">
                Fixed Pricing – Transparent and competitive rates with no hidden
                fees.
              </li>
              <li className="text-16 mb-20">
                Punctual & Reliable – We value your time, ensuring on-time pickups
                and smooth journeys.
              </li>
              <li className="text-16 mb-20">
                Privacy & Discretion – Enjoy a stress-free and confidential ride.
              </li>
              <li className="text-16 mb-20">
                Licensed & Insured – Fully licensed by the National Transport Authority
                (NTA) and comprehensively insured.
              </li>
            </ul>
            <hr />
            <h3 className="heading-32-medium mb-20">Our Fleet</h3>
            <p>
              Our fleet consists of luxury vehicles, all licensed as limousines by the
              National Transport Authority (NTA) and maintained to the highest
              standards:
            </p>
            <ul className="list-ticks list-ticks-small">
              <li className="text-16 mb-20">
                Mercedes-Benz S-Class – A symbol of sophistication and superior comfort.
              </li>
              <li className="text-16 mb-20">
                Mercedes-Benz E-Class – A refined blend of luxury and performance.
              </li>
              <li className="text-16 mb-20">
                Audi A8 – A sleek, high-tech executive sedan designed for a smooth ride.
              </li>
              <li className="text-16 mb-20">
                Mercedes-Benz Viano – A spacious premium van, perfect for group travel.
              </li>
              <li className="text-16 mb-20">
                Mercedes-Benz Vito – A versatile and comfortable vehicle suited for various
                travel needs.
              </li>
            </ul>
            <p>
              All vehicles are regularly serviced, carefully maintained, and fully
              insured, ensuring a safe and pleasant journey for every client.
            </p>
            <hr />
            
            <p>
              <strong>Contact us to arrange your transfer</strong> – experience comfort,
              reliability, and premium service at the right price.
            </p>

            <Link href="/contact">
              <button className="text-white px-4 py-2 rounded transition" style={{ background: 'linear-gradient(to right, #003366, #0099ff)' }}>
                Contact
              </button>
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}