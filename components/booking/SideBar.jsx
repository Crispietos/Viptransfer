import React from "react";

export default function SideBar({ pickup, dropoff, distance, selectedVehicle, fares, extras, totalFare }) {
  return (
    <div className="box-tab-right">
      <div className="sidebar">
        <div className="d-flex align-items-center justify-content-between wow fadeInUp">
          <h6 className="text-20-medium color-text">Ride Summary</h6>
      
        </div>
        <div className="mt-20 wow fadeInUp">
          <ul className="list-routes">
            <li>
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
        </div>
      </div>
      <div className="sidebar wow fadeInUp">
        <ul className="list-prices list-prices-2">
          <li>
            <span className="text">Selected vehicle</span>
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
          </li>
        </ul>
        <div className="border-bottom mt-30 mb-15"></div>
        <ul className="list-prices">
          <li>
            <span className="text text-20-medium">Total</span>
            <span className="price text-20-medium">
              {totalFare ? "€" + totalFare.toFixed(2) : "€0.00"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}