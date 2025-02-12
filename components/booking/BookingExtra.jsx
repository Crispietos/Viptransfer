"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Link from "next/link";

// Cennik na podstawie dystansu i pojazdu
const priceTable = {
  Business: [3.3, 2.0, 1.9, 1.8, 1.7, 1.6, 1.5],
  First: [3.7, 2.3, 2.3, 2.2, 2.2, 2.0, 1.9],
  MPV: [3.5, 2.1, 2.1, 2.0, 2.0, 1.8, 1.8],
};

const distanceRanges = [17, 50, 100, 150, 200, 250, 300];

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function BookingExtra() {
  const [vehicle, setVehicle] = useState("Business");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (!GOOGLE_API_KEY) {
      console.error("❌ Brak klucza API. Sprawdź zmienne środowiskowe.");
      return;
    }

    const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
    if (!existingScript) {
      console.log("📡 Ładowanie Google Maps API...");
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => console.log("✅ Google Maps API załadowane");
      script.onerror = () => console.error("❌ Błąd ładowania Google Maps API");
      document.body.appendChild(script);
    }

    setTimeout(() => {
      if (!window.google?.maps?.places) {
        console.error("❌ Google Maps API nie załadowało poprawnie.");
        return;
      }

      const input1 = document.getElementById("pickupLocation");
      const input2 = document.getElementById("dropoffLocation");

      if (input1) {
        try {
          const autocomplete1 = new window.google.maps.places.Autocomplete(input1);
          autocomplete1.addListener("place_changed", () => {
            const place = autocomplete1.getPlace();
            setPickup(place.formatted_address || input1.value);
          });
        } catch (error) {
          console.error("❌ Błąd Autocomplete dla pickupLocation:", error);
        }
      }

      if (input2) {
        try {
          const autocomplete2 = new window.google.maps.places.Autocomplete(input2);
          autocomplete2.addListener("place_changed", () => {
            const place = autocomplete2.getPlace();
            setDropoff(place.formatted_address || input2.value);
          });
        } catch (error) {
          console.error("❌ Błąd Autocomplete dla dropoffLocation:", error);
        }
      }
    }, 1000);
  }, []);

  const calculateDistance = async () => {
    if (!pickup || !dropoff) {
      alert("⚠️ Please enter both addresses.");
      return;
    }

    try {
      console.log("📡 Wysyłam zapytanie do API Distance Matrix...");

      const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/distance`
        : "/api/distance";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pickup, dropoff }),
      });

      if (!response.ok) {
        console.error("❌ Błąd API:", response.status, response.statusText);
        alert("❌ Nie można obliczyć odległości.");
        return;
      }

      const data = await response.json();
      console.log("✅ Dane z API:", data);

      if (data.status !== "OK") {
        alert("❌ Problem z API Distance Matrix.");
        console.error("❌ Błąd Distance Matrix API:", data);
        return;
      }

      const distanceValue = data.rows[0].elements[0].distance.value / 1000; // km
      console.log("📏 Obliczona odległość:", distanceValue, "km");

      let pricePerKm = 1.5;
      for (let i = 0; i < distanceRanges.length; i++) {
        if (distanceValue <= distanceRanges[i]) {
          pricePerKm = priceTable[vehicle][i];
          break;
        }
      }

      const basePrice = 30;
      const calculatedPrice = Math.round(basePrice + distanceValue * pricePerKm);

      console.log(`💰 Cena dla ${vehicle}: €${calculatedPrice}`);
      setDistance(distanceValue);
      setPrice(calculatedPrice);
    } catch (error) {
      console.error("❌ Błąd przy pobieraniu dystansu:", error);
      alert("❌ Wystąpił błąd.");
    }
  };

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30">Book Your Ride</h3>

          <div className="form-group">
            <label className="form-label">Select Vehicle</label>
            <select className="form-control" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
              <option value="Business">Business</option>
              <option value="First">First</option>
              <option value="MPV">MPV</option>
            </select>
          </div>

          <div className="form-group mt-20">
            <label className="form-label">Pickup Location</label>
            <input id="pickupLocation" className="form-control" type="text" placeholder="Enter pickup location" value={pickup} onChange={(e) => setPickup(e.target.value)} />
          </div>
          <div className="form-group mt-20">
            <label className="form-label">Dropoff Location</label>
            <input id="dropoffLocation" className="form-control" type="text" placeholder="Enter dropoff location" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
          </div>

          <div className="col-lg-12 text-center mt-20">
            <button type="button" className="btn btn-primary" onClick={calculateDistance}>
              Calculate Price
            </button>
          </div>

          {distance && (
            <div className="col-lg-12 text-center mt-4">
              <p className="text-24 font-bold mt-3">Distance: {distance.toFixed(1)} km</p>
              <p className="text-32 font-bold mt-2" style={{ padding: "20px", border: "2px solid #000", display: "inline-block" }}>
                Estimated Price: €{price}
              </p>
            </div>
          )}
        </div>
      </div>
      <SideBar />
    </div>
  );
}