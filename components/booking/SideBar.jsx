import React from "react";

<<<<<<< HEAD
export default function SideBar({ pickup, dropoff, distance, selectedVehicle, fares, extras, totalFare }) {
=======
export default function SideBar() {
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
  return (
    <div className="box-tab-right">
      <div className="sidebar">
        <div className="d-flex align-items-center justify-content-between wow fadeInUp">
          <h6 className="text-20-medium color-text">Ride Summary</h6>
<<<<<<< HEAD
      
=======
          <a
            className="text-14-medium color-text text-decoration-underline"
            href="#"
          >
            Edit
          </a>
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
        </div>
        <div className="mt-20 wow fadeInUp">
          <ul className="list-routes">
            <li>
<<<<<<< HEAD
              <span className="location-item">From: </span>
              <span className="info-location text-14-medium">{pickup || "Not selected"}</span>
            </li>
            <li>
              <span className="location-item">To: </span>
              <span className="info-location text-14-medium">{dropoff || "Not selected"}</span>
            </li>
          </ul>
        </div>
        {distance && (
          <div className="mt-20 wow fadeInUp">
            <ul className="list-icons">
              <li>
                <span className="icon-item icon-plan"> </span>
                <span className="info-location text-14-medium">Distance: {distance} km</span>
              </li>
            </ul>
          </div>
        )}
        <div className="border-bottom mt-30 mb-25"></div>
        <div className="mt-0">
          <span className="text-14 color-grey">Vehicle</span>
          <br />
          <span className="text-14-medium color-text">
            {selectedVehicle || "Not selected"}
          </span>
          {selectedVehicle && fares && (
            <div>
              <span className="text-14 color-grey">Fare</span>
              <br />
              <span className="text-14-medium color-text">
                €{fares[selectedVehicle].toFixed(2)}
              </span>
            </div>
          )}
        </div>
        <div className="border-bottom mt-30 mb-25"></div>
        <div className="mt-0">
          <span className="text-14 color-grey">Extra Options</span>
          <br />
          {extras && extras.length > 0 ? (
            extras.map((item) => (
              <div key={item.id} className="text-14-medium color-text">
                {item.name} x {item.quantity} - €{(item.price * item.quantity).toFixed(2)}
              </div>
            ))
          ) : (
            <span className="text-14-medium color-text">None</span>
          )}
=======
              <span className="location-item">A </span>
              <span className="info-location text-14-medium">
                Manchester, UK
              </span>
            </li>
            <li>
              <span className="location-item">A </span>
              <span className="info-location text-14-medium">London, UK</span>
            </li>
          </ul>
        </div>
        <div className="mt-20 wow fadeInUp">
          <ul className="list-icons">
            <li>
              <span className="icon-item icon-plan"> </span>
              <span className="info-location text-14-medium">
                Thu, Oct 06, 2022
              </span>
            </li>
            <li>
              <span className="icon-item icon-time"></span>
              <span className="info-location text-14-medium">6 PM : 15</span>
            </li>
          </ul>
        </div>
        <div className="mt-20 wow fadeInUp">
          <div className="box-map-route">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1679223612023!5m2!1svi!2s"
              style={{ border: "0px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="box-info-route">
            <div className="info-route-left">
              <span className="text-14 color-grey">Total Distance</span>
              <span className="text-14-medium color-text">
                311 km/ 194 miles
              </span>
            </div>
            <div className="info-route-left">
              <span className="text-14 color-grey">Total Time</span>
              <span className="text-14-medium color-text">3h 43m</span>
            </div>
          </div>
          <div className="border-bottom mt-30 mb-25"></div>
          <div className="mt-0">
            <span className="text-14 color-grey">Vehicle</span>
            <br />
            <span className="text-14-medium color-text">
              Mercedes-Benz E220
            </span>
          </div>
          <div className="border-bottom mt-30 mb-25"></div>
          <div className="mt-0">
            <span className="text-14 color-grey">Extra Options</span>
            <br />
            <span className="text-14-medium color-text">
              1 x Child Seat - $5.00
            </span>
            <br />
            <span className="text-14-medium color-text">
              1 x Bouquet of Flowers - $75.00
            </span>
            <br />
            <span className="text-14-medium color-text">
              2 x Vodka Bottle - $78.00
            </span>
            <br />
            <span className="text-14-medium color-text">
              1 x Bodyguard Service - $750.00
            </span>
          </div>
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
        </div>
      </div>
      <div className="sidebar wow fadeInUp">
        <ul className="list-prices list-prices-2">
          <li>
            <span className="text">Selected vehicle</span>
<<<<<<< HEAD
            <span className="price">
              {selectedVehicle && fares
                ? "€" + fares[selectedVehicle].toFixed(2)
                : "€0.00"}
            </span>
          </li>
          <li>
            <span className="text">Extra options</span>
            <span className="price">
              {extras
                ? "€" +
                  extras.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
                : "€0.00"}
            </span>
=======
            <span className="price">$174</span>
          </li>
          <li>
            <span className="text">Extra options</span>
            <span className="price">$90.25</span>
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
          </li>
        </ul>
        <div className="border-bottom mt-30 mb-15"></div>
        <ul className="list-prices">
          <li>
            <span className="text text-20-medium">Total</span>
<<<<<<< HEAD
            <span className="price text-20-medium">
              {totalFare ? "€" + totalFare.toFixed(2) : "€0.00"}
            </span>
=======
            <span className="price text-20-medium">$909.47</span>
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
          </li>
        </ul>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
