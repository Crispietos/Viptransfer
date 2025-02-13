"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import Link from "next/link";

// Dodatkowe opcje (extras)
const quantityItem = [
  { id: 1, name: "Child Seat", price: 12, description: "Suitable for toddlers weighing 0-18 kg.", quantity: 0 },
  { id: 2, name: "Booster Seat", price: 12, description: "Suitable for children weighing 15-36 kg.", quantity: 0 },
  { id: 3, name: "Vodka Bottle", price: 12, description: "Absolut Vodka 0.7l Bottle", quantity: 0 },
  { id: 4, name: "Bouquet of Flowers", price: 12, description: "A bouquet of seasonal flowers.", quantity: 0 },
];

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log("📌 Google API Key:", GOOGLE_API_KEY);

// Mapowanie typów pojazdów na obrazki miniatur
const vehicleImages = {
  Business: "/assets/imgs/E-Class.png",       // Mercedes E-Class
  First: "/assets/imgs/s-class.webp",            // Mercedes S-Class
  MPV: "/assets/imgs/MercedesBenzV-Class.png",     // Mercedes V-Class
};

// Funkcja wyliczająca ceny na podstawie dystansu (w km)
const calculateFares = (distance) => {
  let rates;
  if (distance > 250) {
    rates = { Business: 1.5, First: 1.9, MPV: 1.8 };
  } else if (distance > 200) {
    rates = { Business: 1.6, First: 2.0, MPV: 1.8 };
  } else if (distance > 150) {
    rates = { Business: 1.7, First: 2.2, MPV: 2.0 };
  } else if (distance > 100) {
    rates = { Business: 1.8, First: 2.3, MPV: 2.1 };
  } else if (distance > 50) {
    rates = { Business: 1.9, First: 2.3, MPV: 2.1 };
  } else if (distance > 17) {
    rates = { Business: 2.0, First: 2.3, MPV: 2.1 };
  } else {
    rates = { Business: 3.3, First: 3.7, MPV: 3.5 };
  }
  const baseFare = { Business: 90, First: 110, MPV: 120 };
  return {
    Business: baseFare.Business + distance * rates.Business,
    First: baseFare.First + distance * rates.First,
    MPV: baseFare.MPV + distance * rates.MPV,
  };
};

export default function BookingExtra() {
  const [quantityItems, setQuantityItems] = useState(quantityItem);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(null);
  const [fares, setFares] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    console.log("useEffect: window.google:", window.google);
    activeInputFocus();

    if (window.google && window.google.maps) {
      console.log("Inicjalizujemy Autocomplete...");
      const input1 = document.getElementById("pickupLocation");
      const autocompletePickup = new window.google.maps.places.Autocomplete(input1);
      autocompletePickup.addListener("place_changed", () => {
        const place = autocompletePickup.getPlace();
        const address = place.formatted_address || place.name || "";
        console.log("Pickup place_changed:", address);
        setPickup(address);
      });

      const input2 = document.getElementById("dropoffLocation");
      const autocompleteDropoff = new window.google.maps.places.Autocomplete(input2);
      autocompleteDropoff.addListener("place_changed", () => {
        const place = autocompleteDropoff.getPlace();
        const address = place.formatted_address || place.name || "";
        console.log("Dropoff place_changed:", address);
        setDropoff(address);
      });
    }
  }, []);

  // Używamy DistanceMatrixService, aby ominąć problem CORS
  const calculateDistance = () => {
    console.log("calculateDistance:", pickup, dropoff);
    if (!pickup || !dropoff) {
      alert("Please enter both addresses.");
      return;
    }
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [pickup],
        destinations: [dropoff],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        console.log("DistanceMatrix response:", response);
        if (status === "OK") {
          const distanceValue = response.rows[0].elements[0].distance.value / 1000;
          console.log("Calculated distance (km):", distanceValue);
          setDistance(distanceValue);
          const calculatedFares = calculateFares(distanceValue);
          console.log("Calculated fares:", calculatedFares);
          setFares(calculatedFares);
        } else {
          alert("Could not calculate distance. Status: " + status);
        }
      }
    );
  };

  // Obliczenie sumy ekstra opcji
  const extrasTotal = quantityItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  // Łączna cena: cena wybranego pojazdu + extras
  const totalFare = (selectedVehicle && fares ? fares[selectedVehicle] : 0) + extrasTotal;

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">Book Your Ride</h3>
          <div className="form-group">
            <label className="form-label">Pickup Location</label>
            <input
              id="pickupLocation"
              className="form-control"
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => {
                console.log("Pickup input changed:", e.target.value);
                setPickup(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-20">
            <label className="form-label">Dropoff Location</label>
            <input
              id="dropoffLocation"
              className="form-control"
              type="text"
              placeholder="Enter dropoff location"
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          <div className="col-lg-12 text-center mt-20">
            <button type="button" className="btn btn-primary" onClick={calculateDistance}>
              Calculate Price
            </button>
          </div>
          
          {distance && (
  <div className="col-lg-12 text-center mt-4">
    <p className="text-20">Distance: {distance} km</p>
    {fares && (
      <div
        className="
          fare-options
          flex
          flex-row
          flex-nowrap
          items-start
          justify-center
          gap-6
          mt-6
          mb-8        /* <-- Dodajemy większy odstęp na dole */
        "
        style={{ overflowX: "auto" }}
      >
        <div className="fare-option flex flex-col items-center min-w-[120px]">
          <img
            src={vehicleImages.Business}
            alt="Business Class"
            className="fare-image mb-2"
          />
          <p>Business: €{fares.Business.toFixed(2)}</p>
          <button
            className="btn btn-secondary mt-2 text-sm px-3 py-2" // <-- Mniejsze przyciski
            onClick={() => setSelectedVehicle("Business")}
          >
            {selectedVehicle === "Business" ? "Selected" : "Select"}
          </button>
        </div>
        <div className="fare-option flex flex-col items-center min-w-[120px]">
          <img
            src={vehicleImages.First}
            alt="First Class"
            className="fare-image mb-2"
          />
          <p>First: €{fares.First.toFixed(2)}</p>
          <button
            className="btn btn-secondary mt-2 text-sm px-3 py-2"
            onClick={() => setSelectedVehicle("First")}
          >
            {selectedVehicle === "First" ? "Selected" : "Select"}
          </button>
        </div>
        <div className="fare-option flex flex-col items-center min-w-[120px]">
          <img
            src={vehicleImages.MPV}
            alt="MPV"
            className="fare-image mb-2"
          />
          <p>MPV: €{fares.MPV.toFixed(2)}</p>
          <button
            className="btn btn-secondary mt-2 text-sm px-3 py-2"
            onClick={() => setSelectedVehicle("MPV")}
          >
            {selectedVehicle === "MPV" ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    )}
  </div>
)}
          <h3 className="heading-24-medium color-text mb-30 mt-40 wow fadeInUp">Extra Options</h3>
          <div className="list-extras wow fadeInUp">
            {quantityItems.map((elm, i) => (
              <div key={i} className="item-extra">
                <div className="extra-info">
                  <h5 className="text-20-medium color-text mb-5">
                    {elm.name} <span className="price">${elm.price}</span>
                  </h5>
                  <p className="text-14 color-grey">{elm.description}</p>
                </div>
                <div className="extra-quantity">
                  <span
                    onClick={() =>
                      setQuantityItems((prev) =>
                        prev.map((item, index) =>
                          index === i ? { ...item, quantity: item.quantity - 1 } : item
                        )
                      )
                    }
                    className="minus"
                  ></span>
                  <input className="form-control" type="text" value={elm.quantity} readOnly />
                  <span
                    onClick={() =>
                      setQuantityItems((prev) =>
                        prev.map((item, index) =>
                          index === i ? { ...item, quantity: item.quantity + 1 } : item
                        )
                      )
                    }
                    className="plus"
                  ></span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-30 mb-120 wow fadeInUp">
            <Link className="btn btn-primary btn-primary-big w-100" href="/booking-passenger">
              Continue
            </Link>
          </div>
        </div>

        {/* Ładowanie Google Maps API */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("Google Maps script loaded, window.google:", window.google);
          }}
        />
      </div>

      {/* Przekazujemy dynamiczne dane do SideBar */}
      <SideBar
        pickup={pickup}
        dropoff={dropoff}
        distance={distance}
        selectedVehicle={selectedVehicle}
        fares={fares}
        extras={quantityItems}
        totalFare={totalFare}
      />
    </div>
  );
}