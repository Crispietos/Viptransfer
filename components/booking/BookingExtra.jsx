// file: /components/booking/BookingExtra.jsx

"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import SideBar from "./SideBar";
import MapModal from "./MapModal";

const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), { ssr: false });
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), { ssr: false });
const DynamicPlacePicker = dynamic(() => import("@/components/common/DynamicPlacePicker"), { ssr: false });

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Lista extras
const extrasList = [
  { id: 1, name: "Child Seat", description: "0-18 kg", selected: false },
  { id: 2, name: "Booster Seat", description: "15-36 kg", selected: false },
  // ...
];

export default function BookingExtra() {
  // --- STANY ---
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  // Trzymamy datę i godzinę jako string:
  const [selectedDate, setSelectedDate] = useState(""); // <--
  const [selectedTime, setSelectedTime] = useState(""); // <--

  const [distance, setDistance] = useState(null);
  const [fares, setFares] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [returnTrip, setReturnTrip] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Extras
  const [extras, setExtras] = useState(extrasList);

  // Dane pasażera
  // ...

  // 1) Odczyt z URL (date, time jako string)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setPickup(params.get("pickup") || "");
      setDropoff(params.get("dropoff") || "");
      setSelectedDate(params.get("date") || "");  // <--
      setSelectedTime(params.get("time") || "");  // <--
    }
  }, []);

  // 2) Gdy user wybiera w DatePicker/TimePicker – ewentualnie możesz to tu wstawić,
  //    jeśli chcesz, by w "ExtraBooking" też dało się to zmieniać:
  //    (jeśli w ogóle tak ma być – bo widzę, że docelowo i tak klikasz "Calculate Price".)

  // 3) Reszta logiki (calculateDistance, handleBooking, itd.)
  const calculateDistance = () => {
    // ...
  };

  const totalFare =
    selectedVehicle && fares
      ? Math.ceil(fares[selectedVehicle]) * (returnTrip ? 2 : 1)
      : 0;

  const handleBooking = () => {
    // ...
  };

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        {/* From/Date */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Pickup Location</label>
            <DynamicPlacePicker
              value={pickup}
              inputId="pickupLocation"
              placeholder="Enter pickup location"
              onChange={(val) => setPickup(val)}
            />
          </div>
          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Date</label>
            <DatePickerComponent
              value={selectedDate} // <--
              onChange={(dateObj) => {
                // Gdy w ExtraBooking user zmieni datę
                if (dateObj?.format) {
                  setSelectedDate(dateObj.format("YYYY-MM-DD"));
                } else {
                  setSelectedDate("");
                }
              }}
            />
          </div>
        </div>

        {/* To/Time */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Dropoff Location</label>
            <DynamicPlacePicker
              value={dropoff}
              inputId="dropoffLocation"
              placeholder="Enter dropoff location"
              onChange={(val) => setDropoff(val)}
            />
          </div>
          <div style={{ flex: "1" }} className="form-group">
            <label className="form-label">Time</label>
            <TimePickerComponent
              value={selectedTime} // <--
              onChange={(timeObjOrStr) => {
                // Gdy w ExtraBooking user zmieni godzinę
                if (typeof timeObjOrStr === "string") {
                  // jeśli w komponencie TimePicker od razu zwracasz string
                  setSelectedTime(timeObjOrStr);
                } else if (timeObjOrStr?.format) {
                  setSelectedTime(timeObjOrStr.format("HH:mm"));
                } else {
                  setSelectedTime("");
                }
              }}
              placeholder="Select time"
            />
          </div>
        </div>

        {/* ...przycisk "Calculate Price" itd. */}
        <button type="button" onClick={calculateDistance}>
          Calculate Price
        </button>

        {/* ...reszta formularza, extras, booking button... */}
      </div>

      {/* SideBar */}
      <SideBar
        pickup={pickup}
        dropoff={dropoff}
        date={selectedDate}    // <--
        time={selectedTime}    // <--
        distance={distance}
        selectedVehicle={selectedVehicle}
        fares={fares}
        extras={extras.filter((e) => e.selected)}
        totalFare={totalFare}
      />
    </div>
  );
}