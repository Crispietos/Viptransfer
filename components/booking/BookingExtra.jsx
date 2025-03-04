"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import SideBar from "./SideBar";
import MapModal from "./MapModal"; // Plik MapModal.jsx powinien być w tym samym folderze

// Dynamiczne importy (DatePicker, TimePicker)
const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), { ssr: false });
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), { ssr: false });

// Klucz Google
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log("📌 Google API Key:", GOOGLE_API_KEY);

// Lista extras
const extrasList = [
  { id: 1, name: "Child Seat", description: "0-18 kg", selected: false },
  { id: 2, name: "Booster Seat", description: "15-36 kg", selected: false },
  { id: 3, name: "Vodka Bottle", description: "Absolut 0.7l", selected: false },
  { id: 4, name: "Bouquet of Flowers", description: "Seasonal", selected: false },
];

// Funkcja obliczająca stawki
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

// Obrazy pojazdów
const vehicleImages = {
  Business: "/assets/imgs/E-Class.png",
  First: "/assets/imgs/s-class.webp",
  MPV: "/assets/imgs/MercedesBenzV-Class.png",
};

export default function BookingExtra() {
  // --- STANY ---
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [distance, setDistance] = useState(null);
  const [fares, setFares] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [returnTrip, setReturnTrip] = useState(false);
  const [showMap, setShowMap] = useState(false); // <-- Hook umieszczony wewnątrz komponentu

  // Extras
  const [extras, setExtras] = useState(extrasList);

  // Dane pasażera
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [passengers, setPassengers] = useState("");
  const [luggage, setLuggage] = useState("");
  const [notes, setNotes] = useState("");

  // Czytanie parametrów z URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setPickup(params.get("pickup") || "");
      setDropoff(params.get("dropoff") || "");
      setSelectedDate(params.get("date") || "");
      setSelectedTime(params.get("time") || "");
    }
  }, []);

  // Inicjalizacja Google Autocomplete (z ograniczeniem do Irlandii)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.google &&
      window.google.maps &&
      window.google.maps.places
    ) {
      console.log("✅ Google Maps Places załadowane.");

      const options = {
        fields: ["formatted_address", "geometry", "name"],
        types: ["geocode"],
        componentRestrictions: { country: "IE" }, // Tylko Irlandia
      };

      // Pickup
      const pickupInput = document.getElementById("pickupLocation");
      if (pickupInput) {
        const autocompletePickup = new window.google.maps.places.Autocomplete(
          pickupInput,
          options
        );
        autocompletePickup.addListener("place_changed", () => {
          const place = autocompletePickup.getPlace();
          const address = place.formatted_address || place.name || "";
          console.log("Pickup selected:", address);
          setPickup(address);
        });
      } else {
        console.warn("❗ pickupLocation input not found in DOM");
      }

      // Dropoff
      const dropoffInput = document.getElementById("dropoffLocation");
      if (dropoffInput) {
        const autocompleteDropoff = new window.google.maps.places.Autocomplete(
          dropoffInput,
          options
        );
        autocompleteDropoff.addListener("place_changed", () => {
          const place = autocompleteDropoff.getPlace();
          const address = place.formatted_address || place.name || "";
          console.log("Dropoff selected:", address);
          setDropoff(address);
        });
      } else {
        console.warn("❗ dropoffLocation input not found in DOM");
      }
    } else {
      console.log("⏳ Google Maps Places jeszcze nie załadowane.");
    }
  }, []);

  // Funkcja obliczająca dystans
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
          setFares(calculateFares(distanceValue));
        } else {
          alert("Could not calculate distance. Status: " + status);
        }
      }
    );
  };

  // Całkowita cena (z ewentualnym powrotem)
  const totalFare =
    selectedVehicle && fares
      ? Math.ceil(fares[selectedVehicle]) * (returnTrip ? 2 : 1)
      : 0;

  // Obsługa finalna
  const handleBooking = () => {
    alert(`
      Booking Info:
      From: ${pickup}
      To: ${dropoff}
      Date: ${selectedDate}
      Time: ${selectedTime}
      Vehicle: ${selectedVehicle}
      Return Trip: ${returnTrip ? "Yes" : "No"}
      Extras: ${extras.filter(e => e.selected).map(e => e.name).join(", ")}
      Passenger:
        ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Flight: ${flightNumber}
        Passengers: ${passengers}
        Luggage: ${luggage}
      Notes: ${notes}
      Total Fare: €${totalFare}
    `);
  };

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        {/* 1. Rząd: Pickup + Date */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ flex: "1" }} className="form-group">
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

          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Date</label>
            <DatePickerComponent
              value={selectedDate}
              onChange={(dateObj) => {
                if (dateObj instanceof Date && !isNaN(dateObj)) {
                  const formatted = dateObj.toLocaleDateString("en-CA");
                  setSelectedDate(formatted);
                } else if (dateObj?.format) {
                  setSelectedDate(dateObj.format("YYYY-MM-DD"));
                } else {
                  setSelectedDate(dateObj?.toString() || "");
                }
              }}
            />
          </div>
        </div>

        {/* 2. Rząd: Dropoff + Time */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          <div style={{ flex: "1" }} className="form-group">
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

          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Time</label>
            <TimePickerComponent
              value={
                selectedTime
                  ? new Date(`1970-01-01T${selectedTime}:00`)
                  : null
              }
              onChange={(timeObj) => {
                if (timeObj instanceof Date && !isNaN(timeObj)) {
                  const timeFormatted = timeObj.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  setSelectedTime(timeFormatted);
                } else if (timeObj?.format) {
                  setSelectedTime(timeObj.format("HH:mm"));
                } else {
                  setSelectedTime(timeObj?.toString() || "");
                }
              }}
            />
          </div>
        </div>

        {/* Przycisk "Calculate Price" */}
        <div className="col-lg-12 text-center mt-20">
          <button
            type="button"
            onClick={calculateDistance}
            style={{
              width: "100%",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "600",
              background: "linear-gradient(to right, #232526, #414345)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Calculate Price
          </button>
        </div>

        {/* Przycisk "Show Map" */}
        <div className="col-lg-12 text-center mt-20">
          <button
            type="button"
            onClick={() => setShowMap(true)}
            style={{
              width: "100%",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "600",
              background: "linear-gradient(to right, #232526, #414345)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              marginTop: "12px",
            }}
          >
            Show Map
          </button>
        </div>

        {/* Warunkowe wyświetlenie modala */}
        {showMap && (
          <MapModal
            pickup={pickup}
            dropoff={dropoff}
            onClose={() => setShowMap(false)}
          />
        )}

        {/* Jeśli distance jest obliczone, pokazujemy stawki */}
        {distance && (
          <div className="col-lg-12 text-center mt-4">
            <p className="text-20">Distance: {distance} km</p>
            {fares && (
              <div className="fare-options flex flex-row flex-nowrap items-start justify-center gap-6 mt-6 mb-8">
                {/* BUSINESS */}
                <div className="fare-option flex flex-col items-center min-w-[120px]">
                  <img
                    src={vehicleImages.Business}
                    alt="Business"
                    className="fare-image mb-2"
                  />
                  <p>Business: €{Math.ceil(fares.Business)}</p>
                  <button
                    style={{
                      background: "linear-gradient(to right, #232526, #414345)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      padding: "6px 12px",
                      marginTop: "8px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                    onClick={() => setSelectedVehicle("Business")}
                  >
                    {selectedVehicle === "Business" ? "Selected" : "Select"}
                  </button>
                </div>

                {/* FIRST */}
                <div className="fare-option flex flex-col items-center min-w-[120px]">
                  <img
                    src={vehicleImages.First}
                    alt="First"
                    className="fare-image mb-2"
                  />
                  <p>First: €{Math.ceil(fares.First)}</p>
                  <button
                    style={{
                      background: "linear-gradient(to right, #232526, #414345)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      padding: "6px 12px",
                      marginTop: "8px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                    onClick={() => setSelectedVehicle("First")}
                  >
                    {selectedVehicle === "First" ? "Selected" : "Select"}
                  </button>
                </div>

                {/* MPV */}
                <div className="fare-option flex flex-col items-center min-w-[120px]">
                  <img
                    src={vehicleImages.MPV}
                    alt="MPV"
                    className="fare-image mb-2"
                  />
                  <p>MPV: €{Math.ceil(fares.MPV)}</p>
                  <button
                    style={{
                      background: "linear-gradient(to right, #232526, #414345)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      padding: "6px 12px",
                      marginTop: "8px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                    onClick={() => setSelectedVehicle("MPV")}
                  >
                    {selectedVehicle === "MPV" ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Return Trip */}
        {selectedVehicle && (
          <div className="col-lg-12 text-center mt-4">
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setReturnTrip(!returnTrip)}
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  color: "#fff",
                  background: returnTrip
                    ? "linear-gradient(to right, #4a4a4a, #6f6f6f)"
                    : "linear-gradient(to right, #232526, #414345)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  border: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                {returnTrip ? "Return Trip - ON" : "Return Trip - OFF"}
              </button>
            </div>
          </div>
        )}

        {/* Extra Options (Free) */}
        <h3 className="heading-24-medium color-text mb-30 mt-40 wow fadeInUp">
          Extra Options (Free)
        </h3>
        <div
          className="extras-inline wow fadeInUp w-full"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            padding: "12px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
          }}
        >
          {extras && extras.length > 0 ? (
            extras.map((item) => (
              <label
                key={item.id}
                style={{
                  flex: "1 1 calc(50% - 12px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  backgroundColor: "#ffffff",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e2e8f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ffffff")
                }
              >
                <input
                  type="checkbox"
                  style={{
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                  }}
                  checked={!!item.selected}
                  onChange={() =>
                    setExtras((prev) =>
                      prev.map((ex) =>
                        ex.id === item.id ? { ...ex, selected: !ex.selected } : ex
                      )
                    )
                  }
                />
                <span style={{ color: "#1f2937" }}>{item.name}</span>
              </label>
            ))
          ) : (
            <span style={{ fontSize: "14px", color: "#6b7280" }}>
              No extra options available.
            </span>
          )}
        </div>

        {/* Formularz pasażera */}
        <h3 className="heading-24-medium color-text mb-30 mt-40 wow fadeInUp">
          Passenger Details
        </h3>
        <div className="form-contact form-comment wow fadeInUp">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              {/* First Name */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullname">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="fullname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    id="lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* Phone */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              {/* Flight Number */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="flightNumber">
                    Flight Number
                  </label>
                  <input
                    className="form-control"
                    id="flightNumber"
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                  />
                </div>
              </div>
              {/* Passengers */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="passengers">
                    Passengers
                  </label>
                  <select
                    className="form-control"
                    id="passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Luggage */}
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="luggage">
                    Luggage
                  </label>
                  <select
                    className="form-control"
                    id="luggage"
                    value={luggage}
                    onChange={(e) => setLuggage(e.target.value)}
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Notes */}
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="notes">
                    Notes to driver
                  </label>
                  <textarea
                    className="form-control"
                    id="notes"
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Przycisk finalny "Booking" */}
        <div className="mt-30 mb-120 wow fadeInUp">
          <button
            onClick={handleBooking}
            style={{
              width: "100%",
              padding: "14px 20px",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "600",
              background: "linear-gradient(to right, #232526, #414345)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              border: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Booking
          </button>
        </div>

        {showMap && (
          <MapModal
            pickup={pickup}
            dropoff={dropoff}
            onClose={() => setShowMap(false)}
          />
        )}

        {/* Google Maps Script */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&language=en&region=IE`}
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Google Maps script loaded, window.google:", window.google);
          }}
        />
      </div>

      {/* SideBar z podsumowaniem */}
      <SideBar
        pickup={pickup}
        dropoff={dropoff}
        date={selectedDate}
        time={selectedTime}
        distance={distance}
        selectedVehicle={selectedVehicle}
        fares={fares}
        extras={extras.filter((e) => e.selected)}
        totalFare={totalFare}
      />
    </div>
  );
}