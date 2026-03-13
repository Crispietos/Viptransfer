"use client";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import SideBar from "./SideBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import calculateFares from "./FareCalculator";

// === 1. IMPORTUJEMY SUPABASE ===
import { createClient } from '@supabase/supabase-js';

// === 2. KONFIGURACJA SUPABASE ===
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// === Helpers ===
function buildEstablishmentLabel(place) {
  const name = (place?.name || "").trim();
  const comps = Array.isArray(place?.address_components) ? place.address_components : [];
  const pick = (types) => {
    const c = comps.find((ac) => types.some((t) => ac.types.includes(t)));
    return c ? c.long_name : "";
  };
  const route = pick(["route"]);
  const sublocality = pick(["sublocality", "sublocality_level_1", "neighborhood"]);
  const locality = pick(["locality", "postal_town"]);
  const tail = [route, sublocality, locality].filter(Boolean).join(", ");
  return [name, tail].filter(Boolean).join(" ").trim();
}

function buildShortAddressLabel(place) {
  const comps = Array.isArray(place?.address_components) ? place.address_components : [];
  const pick = (types) => {
    const c = comps.find((ac) => types.some((t) => ac.types.includes(t)));
    return c ? c.long_name : "";
  };
  const streetNumber = pick(["street_number"]);
  const route = pick(["route"]);
  const sublocality = pick(["sublocality", "sublocality_level_1", "neighborhood"]);
  const locality = pick(["locality", "postal_town"]);
  const admin2 = pick(["administrative_area_level_2"]);
  const admin1 = pick(["administrative_area_level_1"]);
  let county = (admin2 || admin1 || "").replace(/^County\s+/i, "").trim();
  const street = [route, streetNumber].filter(Boolean).join(" ");
  const parts = [street, sublocality, locality].filter(Boolean);
  const isLocalityOnly = !street && !sublocality && !!locality;
  if (isLocalityOnly && county) parts.push(county);
  return parts.join(", ");
}

const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), { ssr: false });
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), { ssr: false });

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ORDER;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const extrasList = [
  { id: 1, name: "Child Seat", description: "0-18 kg", selected: false },
  { id: 2, name: "Booster Seat", description: "15-36 kg", selected: false },
];

const vehiclesData = [
  {
    key: "Business",
    title: "Business",
    image: "/assets/imgs/E-Class.png",
    passenger: 3,
    luggage: 2,
    description: "Mercedes E-Class or similar – ideal for business travel.",
  },
  {
    key: "First class",
    title: "First class",
    image: "/assets/imgs/s-class.webp",
    passenger: 3,
    luggage: 2,
    description: "Mercedes S-Class or similar – for first-class experience.",
  },
  {
    key: "MPV",
    title: "MPV",
    image: "/assets/imgs/MercedesBenzV-Class.png",
    passenger: 7,
    luggage: 7,
    description: "Mercedes V-Class – perfect for groups or families.",
  },
  {
    key: "V",
    title: "Mercedes V-Class (6 Pax)",
    image: "/assets/imgs/MercedesVClass6.png",
    passenger: 6,
    luggage: 6,
    description: "Mercedes V-Class for 6 passengers with 6 large bags.",
  },
];

export default function BookingExtra({ selectedDistance }) {
  const [fares, setFares] = useState({
    business: 0,
    first: 0,
    mpv: 0,
    v: 0,
  });

  useEffect(() => {
    if (selectedDistance) {
      const calculated = calculateFares(selectedDistance);
      setFares(calculated);
    }
  }, [selectedDistance]);

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  // Return Trip States
  const [returnTrip, setReturnTrip] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState(""); 

  const [distance, setDistance] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [hoveredVehicle, setHoveredVehicle] = useState(null);
  
  const [extras, setExtras] = useState(extrasList);
  const [maxPassengers, setMaxPassengers] = useState(10);
  const [maxLuggage, setMaxLuggage] = useState(10);

  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+353");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [passengers, setPassengers] = useState("");
  const [luggage, setLuggage] = useState("");
  const [notes, setNotes] = useState("");

  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const style = document.createElement("style");
    style.setAttribute("data-gplaces-zindex", "true");
    style.innerHTML = `.pac-container{z-index:100000 !important;}`;
    document.head.appendChild(style);
    return () => { if (style.parentNode) style.parentNode.removeChild(style); };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("pickup") || "";
      const d = params.get("dropoff") || "";
      const dt = params.get("date") || "";
      const tm = params.get("time") || "";
      setPickup(p);
      setDropoff(d);
      setSelectedDate(dt);
      setSelectedTime(tm);
    }
  }, []);

  useEffect(() => {
    if (mapsLoaded && window.google && window.google.maps && window.google.maps.places) {
      if (pickupRef.current) {
        pickupRef.current.value = pickup;
        const autocompletePickup = new window.google.maps.places.Autocomplete(pickupRef.current, {
          fields: ["address_components", "formatted_address", "geometry", "name", "types"],
          componentRestrictions: { country: "IE" },
        });
        autocompletePickup.addListener("place_changed", () => {
          const place = autocompletePickup.getPlace();
          const preferNameTypes = new Set(["establishment","lodging","point_of_interest","airport","train_station","transit_station","tourist_attraction"]);
          const types = Array.isArray(place?.types) ? place.types : [];
          let displayValue = types.some((t) => preferNameTypes.has(t))
            ? (buildEstablishmentLabel(place) || place.name || place.formatted_address || "")
            : (buildShortAddressLabel(place) || place.formatted_address || place.name || "");
          if (pickupRef.current) pickupRef.current.value = displayValue;
          setPickup(displayValue);
        });
      }
      if (dropoffRef.current) {
        dropoffRef.current.value = dropoff;
        const autocompleteDropoff = new window.google.maps.places.Autocomplete(dropoffRef.current, {
          fields: ["address_components", "formatted_address", "geometry", "name", "types"],
          componentRestrictions: { country: "IE" },
        });
        autocompleteDropoff.addListener("place_changed", () => {
          const place = autocompleteDropoff.getPlace();
          const preferNameTypes = new Set(["establishment","lodging","point_of_interest","airport","train_station","transit_station","tourist_attraction"]);
          const types = Array.isArray(place?.types) ? place.types : [];
          let displayValue = types.some((t) => preferNameTypes.has(t))
            ? (buildEstablishmentLabel(place) || place.name || place.formatted_address || "")
            : (buildShortAddressLabel(place) || place.formatted_address || place.name || "");
          if (dropoffRef.current) dropoffRef.current.value = displayValue;
          setDropoff(displayValue);
        });
      }
    }
  }, [mapsLoaded]);

  useEffect(() => {
    if (pickup && dropoff && mapsLoaded) {
      calculateDistance();
    }
  }, [pickup, dropoff, mapsLoaded]);

  const handlePickupInput = () => {
    if (pickupRef.current && !pickupRef.current.value.trim()) {
      setDistance(null);
      setFares(null);
      setShowRoute(false);
      setSelectedVehicle(null);
      setPickup("");
    }
  };

  const handleDropoffInput = () => {
    if (dropoffRef.current && !dropoffRef.current.value.trim()) {
      setDistance(null);
      setFares(null);
      setShowRoute(false);
      setSelectedVehicle(null);
      setDropoff("");
    }
  };

  const handleSelectVehicle = (vehicleKey) => {
    setSelectedVehicle(vehicleKey);
    const found = vehiclesData.find((v) => v.key === vehicleKey);
    if (found) {
      setMaxPassengers(found.passenger);
      setMaxLuggage(found.luggage);
      if (Number(passengers) > found.passenger) {
        setPassengers(String(found.passenger));
      }
      if (Number(luggage) > found.luggage) {
        setLuggage(String(found.luggage));
      }
    } else {
      setMaxPassengers(10);
      setMaxLuggage(10);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          let distanceValue = response.rows[0].elements[0].distance.value / 1000;
          distanceValue = Math.round(distanceValue);
          setDistance(distanceValue);
          setFares(calculateFares(distanceValue));
        } else {
          alert("Could not calculate distance. Status: " + status);
        }
      }
    );
  };

  const keyMap = {
    Business: 'business',
    'First class': 'first',
    MPV: 'mpv',
    V: 'v',
    business: 'business',
    first: 'first',
    mpv: 'mpv',
    v: 'v',
  };
  const fareKey = selectedVehicle ? (keyMap[selectedVehicle] || selectedVehicle) : null;
  const totalFare = fareKey && fares && typeof fares[fareKey] === 'number'
    ? Math.ceil(fares[fareKey]) * (returnTrip ? 2 : 1)
    : 0;

  const handleGetQuoteAndBook = async () => {
    if (!selectedVehicle) {
      alert("Please select your vehicle before submitting the form.");
      return;
    }
    if (distance === null || !fares) {
      alert("Please click 'Calculate Price' to get a fare estimate before booking.");
      return;
    }
    if (returnTrip && (!returnDate || !returnTime)) {
      alert("Please select both a return date and return time.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const fullPhone = countryCode + phoneNumber;
    const vehicleTitle = vehiclesData.find((v) => v.key === selectedVehicle)?.title || selectedVehicle;
    
    const formattedReturnString = returnTrip 
      ? `${returnDate} at ${returnTime}`
      : "—";

    // 1. Zapis do Supabase
    const { data: bookingData, error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          name: `${firstName} ${lastName}`,
          email: email,
          trip_details: {
             type: "Transfer", // Dodane dla odróżnienia
             phone: fullPhone,
             flightNumber,
             pickup,
             dropoff,
             date: selectedDate,
             time: selectedTime,
             vehicle: vehicleTitle,
             price: String(totalFare),
             passengers,
             luggage,
             notes,
             returnTrip: returnTrip ? "Yes" : "No",
             returnDate: formattedReturnString,
             extras: (extras.filter((e) => e.selected).map((e) => e.name).join(", ")) || "—",
          }
        }
      ])
      .select();

    if (dbError) {
        console.error("Błąd bazy danych:", dbError);
        setStatus("error");
        setErrorMessage("System error. Please contact us directly by phone.");
        return;
    }

    const newOrderID = bookingData[0].id; 
    setOrderID(newOrderID);

    // 2. EmailJS
    const templateParams = {
      order_id: newOrderID,
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      phone: fullPhone,
      flightNumber,
      passengers,
      luggage,
      notes,
      pickup,
      dropoff,
      selectedDate,
      selectedTime,
      returnTrip: returnTrip ? "Yes" : "No",
      returnDate: formattedReturnString,
      selectedVehicle: vehicleTitle,
      vehicleTitle,
      totalFare: String(totalFare),
      extras: (extras.filter((e) => e.selected).map((e) => e.name).join(", ")) || "—",
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setShowModal(true);
    } catch (err) {
      console.error("Błąd EmailJS:", err);
      // Nawet jak email padnie, mamy w bazie
      setStatus("success");
      setShowModal(true);
    }
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContentStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "450px",
    textAlign: "center",
  };

  return (
    <>
      <div className="box-row-tab mt-50">
        <div className="box-tab-left">
          {/* 1. PICKUP & DROPOFF */}
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label className="form-label">Pickup Location</label>
            <input
              id="pickupLocation"
              ref={pickupRef}
              className="form-control"
              type="text"
              placeholder="Enter pickup location"
              onInput={handlePickupInput}
              autoComplete="off"
              title={pickup}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label className="form-label">Dropoff Location</label>
            <input
              id="dropoffLocation"
              ref={dropoffRef}
              className="form-control"
              type="text"
              placeholder="Enter dropoff location"
              onInput={handleDropoffInput}
              autoComplete="off"
              title={dropoff}
            />
          </div>

          {/* 2. DATE & TIME (Format DD/MM/YYYY) */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
            <div style={{ flex: "1" }} className="form-group">
              <label className="form-label">Date</label>
              <DatePickerComponent
                value={selectedDate}
                onChange={(dateObj) => {
                  if (dateObj instanceof Date && !isNaN(dateObj)) {
                    setSelectedDate(dateObj.toLocaleDateString("en-GB"));
                  } else if (dateObj?.format) {
                    setSelectedDate(dateObj.format("DD/MM/YYYY"));
                  } else {
                    setSelectedDate(dateObj?.toString() || "");
                  }
                }}
              />
            </div>
            <div style={{ flex: "1" }} className="form-group">
              <label className="form-label">Time</label>
              <TimePickerComponent
                value={selectedTime ? new Date(`1970-01-01T${selectedTime}:00`) : null}
                onChange={(timeObj) => {
                  if (timeObj instanceof Date && !isNaN(timeObj)) {
                    setSelectedTime(
                      timeObj.toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    );
                  } else if (timeObj?.format) {
                    setSelectedTime(timeObj.format("HH:mm"));
                  } else {
                    setSelectedTime(timeObj?.toString() || "");
                  }
                }}
              />
            </div>
          </div>

          {/* 3. BUTTONS CALCULATE PRICE & SHOW ROUTE */}
          <div className="col-lg-12 text-center mt-20">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              {distance && (
                <button
                  type="button"
                  onClick={() => setShowRoute(!showRoute)}
                  style={{
                    padding: "14px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    color: "#fff",
                    background: "linear-gradient(to right, #003366, #0099ff)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    border: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textAlign: "center",
                    width: "220px",
                  }}
                >
                  {showRoute ? "Hide Route" : "Show Route"}
                </button>
              )}
            </div>
          </div>

          {/* 4. DISTANCE + MAP */}
          {distance && (
            <div className="col-lg-12 text-center mt-4">
              <p className="text-20">Distance: {distance} km</p>
            </div>
          )}
          {distance && showRoute && (
            <div className="col-lg-12 text-center mt-4">
              <iframe
                width="100%"
                height="350"
                style={{ border: "none", borderRadius: "8px", marginTop: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_API_KEY}&origin=${encodeURIComponent(
                  pickup
                )}&destination=${encodeURIComponent(dropoff)}&mode=driving`}
              ></iframe>
            </div>
          )}

     {/* 5. BLOK AUT */}
<div className="col-lg-12 text-center mt-4">
  <div className="box-content-detail">
    <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
      Select Your Car
    </h3>
    <div className="list-vehicles wow fadeInUp">
      {vehiclesData.map((vehicle) => (
        <div
          key={vehicle.key}
          className="item-vehicle wow fadeInUp"
          onMouseEnter={() => setHoveredVehicle(vehicle.key)}
          onMouseLeave={() => setHoveredVehicle(null)}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: hoveredVehicle === vehicle.key ? '#66BB6A' : '#ffffff',
            transition: 'background-color 0.3s ease',
          }}
        >
          <div className="vehicle-left">
            <div className="vehicle-image">
              <Image
                width={1530}
                height={711}
                style={{ height: "fit-content" }}
                src={vehicle.image}
                alt={vehicle.title}
              />
            </div>
            <div className="vehicle-facilities" style={{ marginTop: "10px" }}>
              <div className="text-fact meet-greeting">Welcome service provided</div>
              <div className="text-fact free-cancel">Flexible cancellation policy</div>
              <div className="text-fact free-waiting">Inclusive waiting time</div>
              <div className="text-fact safe-travel">Safe and secure travel</div>
            </div>
          </div>
          <div className="vehicle-right" style={{ marginTop: "20px" }}>
            <h5 className="text-20-medium color-text mb-10">
              {vehicle.title}
            </h5>
            <p className="text-14 color-text mb-20">
              {vehicle.description}
            </p>
            <div className="vehicle-passenger-luggage mb-10">
              <span className="passenger">Passengers {vehicle.passenger}</span>
              <span className="luggage" style={{ marginLeft: "10px" }}>
                Luggage {vehicle.luggage}
              </span>
            </div>
            <div className="vehicle-price">
              <h4 className="heading-30-medium color-text">
                {vehicle.key === "Business" && <>€{fares.business}</>}
                {vehicle.key === "First class" && <>€{fares.first}</>}
                {vehicle.key === "MPV" && <>€{fares.mpv}</>}
                {vehicle.key === "V" && <>€{fares.v}</>}
              </h4>
            </div>
            <div className="price-desc mb-20">
              All prices include tolls and bottled water and Wi‑Fi on board.
            </div>
            {vehicle.key === "MPV" && (
              <p className="text-14 color-text mb-20">Mercedes V Class 7 + 7</p>
            )}
            <button
              className="w-100"
              style={{
                backgroundColor: selectedVehicle === vehicle.key ? '#004D40' : '#00574B',
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleSelectVehicle(vehicle.key)}
            >
              {selectedVehicle === vehicle.key ? "Selected" : "Select"}
              <svg
                className="icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* 7. PASSENGER DETAILS */}
          <h3 ref={formRef} className="heading-24-medium color-text mb-30 mt-40 wow fadeInUp">Passenger Details</h3>
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullname">Name</label>
                    <input
                      className="form-control"
                      id="fullname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastname">Last Name</label>
                    <input
                      className="form-control"
                      id="lastname"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <select
                        className="form-control"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        <option value="+353">🇮🇪 +353 (Ireland)</option>
                        <option value="+44">🇬🇧 +44 (UK)</option>
                        <option value="+48">🇵🇱 +48 (Poland)</option>
                        <option value="+1">🇺🇸 +1 (USA)</option>
                        <option value="+49">🇩🇪 +49 (Germany)</option>
                      </select>
                      <input
                        className="form-control"
                        type="tel"
                        pattern="[0-9]+"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="flightNumber">Flight Number</label>
                    <input
                      className="form-control"
                      id="flightNumber"
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="passengers">Passengers</label>
                    <select
                      className="form-control"
                      id="passengers"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    >
                      <option value="">Select</option>
                      {Array.from({ length: maxPassengers }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="luggage">Luggage</label>
                    <select
                      className="form-control"
                      id="luggage"
                      value={luggage}
                      onChange={(e) => setLuggage(e.target.value)}
                    >
                      <option value="">Select</option>
                      {Array.from({ length: maxLuggage }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* 6. ONE WAY / RETURN */}
                {selectedVehicle && (
                  <div className="col-lg-12 text-center mt-4 mb-5">
                    <div className="mt-4 flex justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setReturnTrip(false)}
                        style={{
                          padding: "16px 30px",
                          borderRadius: "8px",
                          fontWeight: "600",
                          color: "#fff",
                          background: returnTrip
                            ? "linear-gradient(to right, #232526, #414345)"
                            : "linear-gradient(to right, #003366, #0099ff)",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                          border: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          textAlign: "center",
                          width: "180px",
                          marginRight: "8px",
                        }}
                      >
                        One Way
                      </button>
                      <button
                        type="button"
                        onClick={() => setReturnTrip(true)}
                        style={{
                          padding: "16px 30px",
                          borderRadius: "8px",
                          fontWeight: "600",
                          color: "#fff",
                          background: returnTrip
                            ? "linear-gradient(to right, #003366, #0099ff)"
                            : "linear-gradient(to right, #232526, #414345)",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                          border: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          textAlign: "center",
                          width: "180px",
                          marginLeft: "8px",
                        }}
                      >
                        Return
                      </button>
                    </div>
                  </div>
                )}

                {/* RETURN FIELDS (DATE & TIME) */}
                {returnTrip && (
                  <div className="flex flex-wrap gap-5 mt-20 mb-20" style={{display:'flex', gap:'20px'}}>
                    <div style={{ flex: "1" }} className="form-group">
                      <label className="form-label">Return Date</label>
                      <DatePickerComponent
                        value={returnDate}
                        onChange={(dateObj) => {
                          if (dateObj instanceof Date && !isNaN(dateObj)) {
                            setReturnDate(dateObj.toLocaleDateString("en-GB"));
                          } else if (dateObj?.format) {
                            setReturnDate(dateObj.format("DD/MM/YYYY"));
                          } else {
                            setReturnDate(dateObj?.toString() || "");
                          }
                        }}
                      />
                    </div>
                    <div style={{ flex: "1" }} className="form-group">
                      <label className="form-label">Return Time</label>
                      <TimePickerComponent
                        value={returnTime ? new Date(`1970-01-01T${returnTime}:00`) : null}
                        onChange={(timeObj) => {
                          if (timeObj instanceof Date && !isNaN(timeObj)) {
                            setReturnTime(
                              timeObj.toLocaleTimeString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            );
                          } else if (timeObj?.format) {
                            setReturnTime(timeObj.format("HH:mm"));
                          } else {
                            setReturnTime(timeObj?.toString() || "");
                          }
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-label" htmlFor="notes">Notes to driver</label>
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

          {/* 8. EXTRAS */}
          <div
            className="extras-inline wow fadeInUp w-full"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "8px",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
            {extras && extras.length > 0 ? (
              extras.map((item) => (
                <label
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "6px 10px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    backgroundColor: "#ffffff",
                    whiteSpace: "nowrap",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "14px", height: "14px", cursor: "pointer" }}
                    checked={!!item.selected}
                    onChange={() =>
                      setExtras((prev) =>
                        prev.map((ex) => (ex.id === item.id ? { ...ex, selected: !ex.selected } : ex))
                      )
                    }
                  />
                  <span style={{ color: "#1f2937" }}>{item.name}</span>
                </label>
              ))
            ) : (
              <span style={{ fontSize: "12px", color: "#6b7280" }}>No extra options available.</span>
            )}
          </div>

          {/* 9. PRZYCISK BOOKING + INFO BOX (Nowość!) */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            
            {/* === NOWA NIEBIESKA RAMKA === */}
            <div style={{
                backgroundColor: "#e3f2fd", 
                borderLeft: "5px solid #2196f3", 
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "4px",
                fontSize: "15px",
                color: "#0d47a1",
                textAlign: "left"
            }}>
                <i className="fa-solid fa-circle-info mr-2"></i>
                <strong>Important:</strong> No payment is required at this stage. 
                Once we confirm vehicle availability, we will send you a secure payment link via email.
            </div>

            {status === "error" && (
              <p style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</p>
            )}

            {/* ZMIANA TEKSTU PRZYCISKU */}
            <button
                type="button"
                onClick={handleGetQuoteAndBook}
                disabled={status === "loading" || !selectedVehicle || distance === null || !fares}
                style={{
                  padding: "14px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    status === "loading" || !selectedVehicle || distance === null || !fares
                      ? "linear-gradient(to right, #888, #aaa)"
                      : "linear-gradient(to right, #003366, #0099ff)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  border: "none",
                  transition: "all 0.3s ease",
                  cursor: status === "loading" || !selectedVehicle || distance === null || !fares ? "not-allowed" : "pointer",
                  textAlign: "center",
                  width: "220px",
                }}
              >
                {status === "loading" ? "Processing..." : "Request Availability"}
              </button>
          </div>

          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&language=en&region=IE`}
            strategy="afterInteractive"
            onLoad={() => setMapsLoaded(true)}
          />
        </div>

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

      {/* 11. ZMODYFIKOWANY MODAL */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={{color: '#4CAF50', fontSize: '48px', marginBottom: '10px'}}>
                <i className="fa-regular fa-circle-check"></i>
            </div>
            {/* Zmiana nagłówka */}
            <h2 style={{ fontSize: "24px", marginBottom: "10px", color:"#333" }}>Request Received!</h2>
            
            <p style={{ fontSize: "16px", marginBottom: "8px", color:"#555" }}>
              Your reference number is <strong>#{orderID}</strong>.
            </p>
            
            {/* Zmiana treści modala */}
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
               We have received your details. We will check availability and send you a <strong>payment link</strong> via email shortly.
            </p>

            <div style={{ textAlign: "left", margin: "20px auto", maxWidth: "300px", fontSize: "14px", color:"#444", background:"#f9f9f9", padding:"10px", borderRadius:"4px" }}>
              <p style={{ marginBottom: "4px" }}><strong>Pickup:</strong> {pickup}</p>
              <p style={{ marginBottom: "4px" }}><strong>Dropoff:</strong> {dropoff}</p>
              <p style={{ marginBottom: "4px" }}><strong>Date:</strong> {selectedDate}</p>
              <p style={{ marginBottom: "4px" }}><strong>Time:</strong> {selectedTime}</p>
              <p style={{ marginBottom: "0px" }}><strong>Vehicle:</strong> {selectedVehicle}</p>
            </div>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                background: "linear-gradient(to right, #003366, #0099ff)",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    user_email: email.trim(),
                    user_phone: countryCode + phoneNumber,
                  });
                }
                router.push("/thx");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}