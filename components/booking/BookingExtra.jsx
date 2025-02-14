"use client";
<<<<<<< HEAD

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import Link from "next/link";

const quantityItem = [
  { id: 1, name: "Child Seat", price: 0, description: "Suitable for toddlers weighing 0-18 kg.", quantity: 0 },
  { id: 2, name: "Booster Seat", price: 0, description: "Suitable for children weighing 15-36 kg.", quantity: 0 },
  { id: 3, name: "Vodka Bottle", price: 0, description: "Absolut Vodka 0.7l Bottle", quantity: 0 },
  { id: 4, name: "Bouquet of Flowers", price: 0, description: "A bouquet of seasonal flowers.", quantity: 0 },
];

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log("📌 Google API Key:", GOOGLE_API_KEY);

const vehicleImages = {
  Business: "/assets/imgs/E-Class.png",
  First: "/assets/imgs/s-class.webp",
  MPV: "/assets/imgs/MercedesBenzV-Class.png",
};

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
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date") || "";
  const timeParam = searchParams.get("time") || "";
  const pickupParam = searchParams.get("pickup") || "";
  const dropoffParam = searchParams.get("dropoff") || "";

  const [quantityItems, setQuantityItems] = useState(quantityItem);
  const [selectedDate, setSelectedDate] = useState(dateParam);
  const [selectedTime, setSelectedTime] = useState(timeParam);
  const [pickup, setPickup] = useState(pickupParam);
  const [dropoff, setDropoff] = useState(dropoffParam);
  const [distance, setDistance] = useState(null);
  const [fares, setFares] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [returnTrip, setReturnTrip] = useState(false);

  useEffect(() => {
    setSelectedDate(dateParam);
    setSelectedTime(timeParam);
    setPickup(pickupParam);
    setDropoff(dropoffParam);
  }, [dateParam, timeParam, pickupParam, dropoffParam]);

  useEffect(() => {
    console.log("useEffect: window.google:", window.google);
    activeInputFocus();

    if (window.google && window.google.maps) {
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

  const totalFare =
    selectedVehicle && fares
      ? fares[selectedVehicle] * (returnTrip ? 2 : 1)
      : 0;
=======
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

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
<<<<<<< HEAD
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Book Your Ride
          </h3>

          {/* Blok wyświetlający wybraną datę i czas */}
          {(selectedDate || selectedTime) && (
            <div
              style={{
                marginBottom: "1rem",
                fontWeight: "500",
                display: "flex",
                gap: "2rem",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              {selectedDate && <span>Date: {selectedDate}</span>}
              {selectedTime && <span>Time: {selectedTime}</span>}
            </div>
          )}

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
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
=======
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

>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
          <div className="col-lg-12 text-center mt-20">
            <button type="button" className="btn btn-primary" onClick={calculateDistance}>
              Calculate Price
            </button>
          </div>

          {distance && (
            <div className="col-lg-12 text-center mt-4">
<<<<<<< HEAD
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
                    mb-8
                  "
                  style={{ overflowX: "auto" }}
                >
                  <div className="fare-option flex flex-col items-center min-w-[120px]">
                    <img
                      src={vehicleImages.Business}
                      alt="Business Class"
                      className="fare-image mb-2"
                    />
                    <p>Business: €{fares.Business}</p>
                    <button
                      className="btn btn-secondary mt-2 text-sm px-3 py-2"
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
                    <p>First: €{fares.First}</p>
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
                    <p>MPV: €{fares.MPV}</p>
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

          {selectedVehicle && (
            <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#f0f4ff",
                  border: "1px solid rgb(0, 3, 6)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                }}
              >
                <input
                  type="checkbox"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  checked={returnTrip}
                  onChange={(e) => setReturnTrip(e.target.checked)}
                />
                <span
                  style={{
                    marginLeft: "0.5rem",
                    fontSize: "1.2rem",
                    color: "#1e40af",
                    fontWeight: "600",
                  }}
                >
                  Return Trip (double price)
                </span>
              </label>
            </div>
          )}

          <h3 className="heading-24-medium color-text mb-30 mt-40 wow fadeInUp">
            Extra Options (Free)
          </h3>
          <div className="list-extras wow fadeInUp">
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

          <div className="mt-30 mb-120 wow fadeInUp">
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

      <SideBar
        pickup={pickup}
        dropoff={dropoff}
        distance={distance}
        selectedVehicle={selectedVehicle}
        fares={fares}
        extras={quantityItems}
        totalFare={totalFare}
      />
=======
              <p className="text-24 font-bold mt-3">Distance: {distance.toFixed(1)} km</p>
              <p className="text-32 font-bold mt-2" style={{ padding: "20px", border: "2px solid #000", display: "inline-block" }}>
                Estimated Price: €{price}
              </p>
            </div>
          )}
        </div>
      </div>
      <SideBar />
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
    </div>
  );
}