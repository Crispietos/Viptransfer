"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import Link from "next/link";

import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import DatePickerComponent from "@/components/common/DatePickerComponent"; // Upewnij się, że plik istnieje
import TimePickerComponent from "@/components/common/TimePickerComponent";   // Upewnij się, że plik istnieje
import GooglePlacePicker from "@/components/common/GooglePlacePicker";       // Upewnij się, że plik istnieje

// Lista darmowych dodatków (extras)
const quantityItem = [
  { id: 1, name: "Child Seat", price: 0, description: "Suitable for toddlers weighing 0-18 kg.", quantity: 0 },
  { id: 2, name: "Booster Seat", price: 0, description: "Suitable for children weighing 15-36 kg.", quantity: 0 },
  { id: 3, name: "Vodka Bottle", price: 0, description: "Absolut Vodka 0.7l Bottle", quantity: 0 },
  { id: 4, name: "Bouquet of Flowers", price: 0, description: "A bouquet of seasonal flowers.", quantity: 0 },
];

// Klucz Google Maps (używany do autouzupełniania adresów)
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log("📌 Google API Key:", GOOGLE_API_KEY);

// Obrazki pojazdów
const vehicleImages = {
  Business: "/assets/imgs/E-Class.png",
  First: "/assets/imgs/s-class.webp",
  MPV: "/assets/imgs/MercedesBenzV-Class.png",
};

// Funkcja wyliczająca ceny na podstawie dystansu (wszystko w euro)
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
    Business: Math.ceil(baseFare.Business + distance * rates.Business),
    First: Math.ceil(baseFare.First + distance * rates.First),
    MPV: Math.ceil(baseFare.MPV + distance * rates.MPV),
  };
};

export default function BookingExtra() {
  // Odczyt parametrów z URL (przekazywanych z pierwszego kroku, np. z Hero)
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date") || "";
  const timeParam = searchParams.get("time") || "";
  const pickupParam = searchParams.get("pickup") || "";
  const dropoffParam = searchParams.get("dropoff") || "";

  // Stan formularza
  const [quantityItems, setQuantityItems] = useState(quantityItem);

  // Data i czas – edytowalne, inicjowane wartością z URL
  const [selectedDate, setSelectedDate] = useState(dateParam);
  const [selectedTime, setSelectedTime] = useState(timeParam);

  // Lokalizacje
  const [pickup, setPickup] = useState(pickupParam);
  const [dropoff, setDropoff] = useState(dropoffParam);

  // Dystans, stawki, wybrany pojazd
  const [distance, setDistance] = useState(null);
  const [fares, setFares] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Return Trip
  const [returnTrip, setReturnTrip] = useState(false);

  // Aktualizacja stanu, gdy parametry URL się zmienią
  useEffect(() => {
    setSelectedDate(dateParam);
    setSelectedTime(timeParam);
    setPickup(pickupParam);
    setDropoff(dropoffParam);
  }, [dateParam, timeParam, pickupParam, dropoffParam]);

  // Inicjalizacja Google Autocomplete
  useEffect(() => {
    activeInputFocus();
    if (window.google && window.google.maps) {
      const input1 = document.getElementById("pickupLocation");
      const autocompletePickup = new window.google.maps.places.Autocomplete(input1);
      autocompletePickup.addListener("place_changed", () => {
        const place = autocompletePickup.getPlace();
        const address = place.formatted_address || place.name || "";
        setPickup(address);
      });

      const input2 = document.getElementById("dropoffLocation");
      const autocompleteDropoff = new window.google.maps.places.Autocomplete(input2);
      autocompleteDropoff.addListener("place_changed", () => {
        const place = autocompleteDropoff.getPlace();
        const address = place.formatted_address || place.name || "";
        setDropoff(address);
      });
    }
  }, []);

  // Obliczanie dystansu
  const calculateDistance = () => {
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
        if (status === "OK") {
          const distanceValue = response.rows[0].elements[0].distance.value / 1000;
          setDistance(distanceValue);
          const calculatedFares = calculateFares(distanceValue);
          setFares(calculatedFares);
        } else {
          alert("Could not calculate distance. Status: " + status);
        }
      }
    );
  };

  // Łączny koszt (Return Trip uwzględniony)
  const totalFare =
    selectedVehicle && fares
      ? fares[selectedVehicle] * (returnTrip ? 2 : 1)
      : 0;

  return (
    <div className="box-row-tab mt-50">
      {/* Lewa strona – formularz */}
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30">Book Your Ride</h3>
          {/* Edytowalne pola daty i czasu */}
          <div className="form-group">
            <label className="form-label">Date</label>
            <DatePickerComponent
              value={selectedDate}
              onChange={(val) => setSelectedDate(val)}
            />
          </div>
          <div className="form-group mt-20">
            <label className="form-label">Time</label>
            <TimePickerComponent
              value={selectedTime}
              onChange={(val) => setSelectedTime(val)}
            />
          </div>
          {/* Pickup */}
          <div className="form-group mt-20">
            <label className="form-label">Pickup Location</label>
            <input
              id="pickupLocation"
              className="form-control"
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          {/* Dropoff */}
          <div className="form-group mt-20">
            <label className="form-label">Dropoff Location</label>
            <input
              id="dropoffLocation"
              className="form-control"
              type="text"
              placeholder="Enter dropoff location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          {/* Przycisk obliczania ceny */}
          <div className="col-lg-12 text-center mt-20">
            <button type="button" className="btn btn-primary" onClick={calculateDistance}>
              Calculate Price
            </button>
          </div>
          {/* Wynik obliczeń */}
          {distance && (
            <div className="col-lg-12 text-center mt-4">
              <p className="text-20">Distance: {distance} km</p>
              {fares && (
                <div className="fare-options flex flex-row flex-nowrap items-start justify-center gap-6 mt-6 mb-8" style={{ overflowX: "auto" }}>
                  {/* Business */}
                  <div className="fare-option flex flex-col items-center min-w-[120px]">
                    <img src={vehicleImages.Business} alt="Business Class" className="fare-image mb-2" />
                    <p>Business: €{fares.Business}</p>
                    <button className="btn btn-secondary mt-2 text-sm px-3 py-2" onClick={() => setSelectedVehicle("Business")}>
                      {selectedVehicle === "Business" ? "Selected" : "Select"}
                    </button>
                  </div>
                  {/* First */}
                  <div className="fare-option flex flex-col items-center min-w-[120px]">
                    <img src={vehicleImages.First} alt="First Class" className="fare-image mb-2" />
                    <p>First: €{fares.First}</p>
                    <button className="btn btn-secondary mt-2 text-sm px-3 py-2" onClick={() => setSelectedVehicle("First")}>
                      {selectedVehicle === "First" ? "Selected" : "Select"}
                    </button>
                  </div>
                  {/* MPV */}
                  <div className="fare-option flex flex-col items-center min-w-[120px]">
                    <img src={vehicleImages.MPV} alt="MPV" className="fare-image mb-2" />
                    <p>MPV: €{fares.MPV}</p>
                    <button className="btn btn-secondary mt-2 text-sm px-3 py-2" onClick={() => setSelectedVehicle("MPV")}>
                      {selectedVehicle === "MPV" ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Return Trip */}
          {selectedVehicle && (
            <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
              <label style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#f0f4ff", border: "1px solid #cce0ff", borderRadius: "0.5rem", padding: "1rem" }}>
                <input type="checkbox" style={{ width: "1.5rem", height: "1.5rem" }} checked={returnTrip} onChange={(e) => setReturnTrip(e.target.checked)} />
                <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem", color: "#1e40af", fontWeight: "600" }}>
                  Return Trip (double price)
                </span>
              </label>
            </div>
          )}
          {/* Extras */}
          <h3 className="heading-24-medium color-text mb-30 mt-40">Extra Options (Free)</h3>
          <div className="list-extras">
            {quantityItems.map((elm, i) => (
              <div key={i} className="item-extra">
                <div className="extra-info">
                  <h5 className="text-20-medium color-text mb-5">
                    {elm.name} <span className="price">Free</span>
                  </h5>
                  <p className="text-14 color-grey">{elm.description}</p>
                </div>
                <div className="extra-quantity">
                  <span
                    onClick={() =>
                      setQuantityItems((prev) =>
                        prev.map((item, index) =>
                          index === i ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
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
          <div className="mt-30 mb-120">
            <Link className="btn btn-primary btn-primary-big w-100" href="/booking-passenger">
              Continue
            </Link>
          </div>
        </div>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("Google Maps script loaded, window.google:", window.google);
          }}
        />
      </div>
      {/* Prawy sidebar – podsumowanie */}
      <SideBar
        pickup={pickup}
        dropoff={dropoff}
        distance={distance}
        selectedVehicle={selectedVehicle}
        fares={fares}
        extras={quantityItems}
        totalFare={totalFare}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </div>
  );
}