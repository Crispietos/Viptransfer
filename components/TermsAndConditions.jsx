import React from "react";

export default function TermsAndConditions() {
  // Przykładowe dane kontaktowe – dostosuj do realnych danych z viptransfer.ie
  const contact = {
    phone: " +353 876 899 968",
    email: "info@viptransfer.ie",
    address: "Dublin, Ireland",
  };

  return (
    <div className="section pt-60">
      <div className="container-sub">
        <h2 className="text-30 fw-bold mb-20">
          Terms and Conditions – Viptransfer
        </h2>

        {/* 1. Scope of Services */}
        <h3 className="text-20 fw-bold mt-30">1. Scope of Services</h3>
        <p>
          Viptransfer provides private transportation services across Ireland,
          including:
        </p>
        <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
          <li>Airport transfers</li>
          <li>Private day tours</li>
          <li>Business and event transfers</li>
          <li>Golf resort and hotel transfers</li>
        </ul>
        <p>
          All services operate on a pre-booking basis, and availability is not
          guaranteed for bookings made less than 24 hours before pickup.
        </p>

        {/* 2. Reservations and Payments */}
        <h3 className="text-20 fw-bold mt-30">2. Reservations and Payments</h3>
        <p>
          • Clients can estimate the cost of their transfer online or request a
          custom quote for specific services, such as hourly or full-day
          rentals.
          <br />
          • Reservations can be made via the website or by contacting Viptransfer
          directly.
          <br />
          • Required details include full name, contact information, pickup time
          and location, destination, number of passengers and luggage, and flight
          number for airport pickups.
          <br />
          • Full payment is required at the time of booking. For bookings made
          well in advance, a 30% deposit may be accepted, with the balance due
          before the service.
          <br />
          • Accepted payment methods: credit/debit cards, bank transfers, and
          PayPal.
        </p>

        {/* 3. Cancellations and Refunds */}
        <h3 className="text-20 fw-bold mt-30">3. Cancellations and Refunds</h3>
        <p>
          • Clients may cancel their booking up to 24 hours before the scheduled
          transfer and receive a full refund within 10 working days, excluding
          any transaction fees or currency exchange differences applied by the
          client’s bank or payment provider.
          <br />
          • For cancellations made less than 24 hours before pickup, partial
          refunds may be considered, but are not guaranteed. Clients should
          contact Viptransfer directly to discuss their individual case.
        </p>

        {/* 4. Client Responsibilities */}
        <h3 className="text-20 fw-bold mt-30">4. Client Responsibilities</h3>
        <p>
          • Provide accurate booking details and be on time for pickup.
          <br />
          • Follow safety regulations, including wearing seat belts.
          <br />
          • No smoking or alcohol consumption in the vehicle.
          <br />
          • Inform Viptransfer in advance of special luggage or requests.
        </p>

        {/* 5. Company Responsibilities */}
        <h3 className="text-20 fw-bold mt-30">5. Company Responsibilities</h3>
        <p>
          • Provide licensed vehicles and drivers in compliance with SPSV
          regulations.
          <br />
          • Maintain high service standards, ensuring comfort and punctuality.
          <br />
          • In case of unforeseen circumstances, Viptransfer reserves the right
          to arrange a licensed taxi instead of a limousine, maintaining the same
          service standard.
        </p>

        {/* 6. Liability and Limitations */}
        <h3 className="text-20 fw-bold mt-30">6. Liability and Limitations</h3>
        <p>
          • Viptransfer is not liable for delays or service disruptions caused by
          unforeseen events, including but not limited to:
        </p>
        <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
          <li>Road accidents or severe traffic congestion beyond our control.</li>
          <li>Extreme weather conditions or official weather warnings.</li>
          <li>Other emergency situations preventing timely service delivery.</li>
        </ul>
        <p>
          • In the event of a vehicle breakdown, Viptransfer will arrange
          alternative transportation as quickly as possible.
        </p>

        {/* 7. Privacy Policy */}
        <h3 className="text-20 fw-bold mt-30">7. Privacy Policy</h3>
        <p>
          • Client data is collected only for service purposes and protected
          under GDPR.
          <br />
          • Clients may request access, modification, or deletion of their
          personal data.
        </p>

        {/* 8. Complaints */}
        <h3 className="text-20 fw-bold mt-30">8. Complaints</h3>
        <p>
          • Complaints must be submitted via email within 14 days of the service.
          <br />
          • Viptransfer will review and respond within 14 business days.
        </p>

        {/* 9. Governing Law */}
        <h3 className="text-20 fw-bold mt-30">9. Governing Law</h3>
        <p>
          • These Terms and Conditions are governed by Irish law, and disputes
          fall under the jurisdiction of Irish courts.
        </p>

        {/* 10. Insurance */}
        <h3 className="text-20 fw-bold mt-30">10. Insurance</h3>
        <p>
          • All Viptransfer vehicles are fully insured, covering both passengers
          and the vehicle.
        </p>

        {/* Kontakt / Inquiries */}
        <h3 className="text-20 fw-bold mt-30">Contact / Inquiries</h3>
        <p>
          For any inquiries regarding these Terms and Conditions, please contact
          Viptransfer:
        </p>
        <ul style={{ listStyle: "none", marginLeft: "0", padding: "0" }}>
          <li>
            <strong>Phone:</strong> {contact.phone}
          </li>
          <li>
            <strong>Email:</strong> {contact.email}
          </li>
          <li>
            <strong>Address:</strong> {contact.address}
          </li>
        </ul>
      </div>
    </div>
  );
}