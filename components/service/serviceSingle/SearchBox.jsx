// SearchBox.jsx
"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamiczne importy
const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), {
  ssr: false,
});
const DynamicPlacePicker = dynamic(() => import("@/components/common/DynamicPlacePicker"), {
  ssr: false,
});

export default function SearchBox() {
  // --- STANY DLA KAŻDEJ ZAKŁADKI ---
  // 1) Distance
  const [distancePickup, setDistancePickup] = useState("");
  const [distanceDropoff, setDistanceDropoff] = useState("");
  const [distanceDate, setDistanceDate] = useState(null);
  const [distanceTime, setDistanceTime] = useState(null);

  // 2) Hourly
  const [hourlyPickup, setHourlyPickup] = useState("");
  const [hourlyDropoff, setHourlyDropoff] = useState("");
  const [hourlyDate, setHourlyDate] = useState(null);
  const [hourlyTime, setHourlyTime] = useState(null);

  // 3) Flat Rate
  const [ratePickup, setRatePickup] = useState("");
  const [rateDropoff, setRateDropoff] = useState("");
  const [rateDate, setRateDate] = useState(null);
  const [rateTime, setRateTime] = useState(null);

  // --- FUNKCJE PRZEKIEROWANIA ---
  const handleSearchDistance = () => {
    // Zamieniamy date/time na stringi (np. "2025-12-31" i "15:30")
    const dateStr = formatDate(distanceDate); 
    const timeStr = formatTime(distanceTime);

    const queryString = `?pickup=${encodeURIComponent(distancePickup)}&dropoff=${encodeURIComponent(distanceDropoff)}&date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(timeStr)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  const handleSearchHourly = () => {
    const dateStr = formatDate(hourlyDate);
    const timeStr = formatTime(hourlyTime);

    const queryString = `?pickup=${encodeURIComponent(hourlyPickup)}&dropoff=${encodeURIComponent(hourlyDropoff)}&date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(timeStr)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  const handleSearchRate = () => {
    const dateStr = formatDate(rateDate);
    const timeStr = formatTime(rateTime);

    const queryString = `?pickup=${encodeURIComponent(ratePickup)}&dropoff=${encodeURIComponent(rateDropoff)}&date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(timeStr)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  // Pomocnicze funkcje do formatowania
  function formatDate(dateObj) {
    // Jeśli używasz react-multi-date-picker i `dateObj` to DateObject:
    if (dateObj?.format) {
      return dateObj.format("YYYY-MM-DD");
    }
    // Jeśli to zwykły obiekt Date:
    if (dateObj instanceof Date && !isNaN(dateObj)) {
      return dateObj.toISOString().split("T")[0]; // "2025-12-31"
    }
    return "";
  }

  function formatTime(timeObj) {
    // Jeśli używasz react-multi-date-picker i `timeObj` to DateObject:
    if (timeObj?.format) {
      return timeObj.format("HH:mm");
    }
    // Jeśli to zwykły obiekt Date:
    if (timeObj instanceof Date && !isNaN(timeObj)) {
      const hours = String(timeObj.getHours()).padStart(2, "0");
      const mins = String(timeObj.getMinutes()).padStart(2, "0");
      return `${hours}:${mins}`;
    }
    return "";
  }

  return (
    <section className="section">
      <div className="banner-image-service wow fadeInUp"></div>
      <div className="box-form-service-single">
        <div className="box-search-ride box-search-ride-style-2 wow fadeInUp light-input">
          <div className="box-search-tabs wow fadeInUp">
            <div className="head-tabs">
              <ul className="nav nav-tabs nav-tabs-search" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-distance"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Distance
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-hourly"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Hourly
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-rate"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Flat Rate
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              {/* ---------------- TAB DISTANCE ---------------- */}
              <div
                className="tab-pane fade active show"
                id="tab-distance"
                role="tabpanel"
              >
                <div className="box-form-search">
                  {/* Data */}
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent
                        value={distanceDate}
                        onChange={(val) => setDistanceDate(val)}
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  {/* Time */}
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent
                        value={distanceTime}
                        onChange={(val) => setDistanceTime(val)}
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                  {/* From (pickup) */}
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-distance-from"
                        placeholder="Enter pickup location"
                        onChange={(val) => setDistancePickup(val)}
                      />
                    </div>
                  </div>
                  {/* To (dropoff) */}
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-distance-to"
                        placeholder="Enter dropoff location"
                        onChange={(val) => setDistanceDropoff(val)}
                      />
                    </div>
                  </div>
                  {/* Guzik "Search" */}
                  <div className="search-item search-button mb-0">
                    <button
                      className="btn btn-search"
                      type="button"
                      onClick={handleSearchDistance}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* ---------------- TAB HOURLY ---------------- */}
              <div
                className="tab-pane fade"
                id="tab-hourly"
                role="tabpanel"
              >
                <div className="box-form-search">
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent
                        value={hourlyTime}
                        onChange={(timeObj) => setHourlyTime(timeObj)}
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent
                        value={hourlyDate}
                        onChange={(val) => setHourlyDate(val)}
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-hourly-from"
                        placeholder="Enter pickup location"
                        onChange={(val) => setHourlyPickup(val)}
                      />
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-hourly-to"
                        placeholder="Enter dropoff location"
                        onChange={(val) => setHourlyDropoff(val)}
                      />
                    </div>
                  </div>
                  <div className="search-item search-button mb-0">
                    <button
                      className="btn btn-search"
                      type="button"
                      onClick={handleSearchHourly}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* ---------------- TAB FLAT RATE ---------------- */}
              <div
                className="tab-pane fade"
                id="tab-rate"
                role="tabpanel"
              >
                <div className="box-form-search">
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent
                        value={rateDate}
                        onChange={(val) => setRateDate(val)}
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent
                        value={rateTime}
                        onChange={(val) => setRateTime(val)}
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-rate-from"
                        placeholder="Enter pickup location"
                        onChange={(val) => setRatePickup(val)}
                      />
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"></span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <DynamicPlacePicker
                        inputId="autocomplete-rate-to"
                        placeholder="Enter dropoff location"
                        onChange={(val) => setRateDropoff(val)}
                      />
                    </div>
                  </div>
                  <div className="search-item search-button mb-0">
                    <button
                      className="btn btn-search"
                      type="button"
                      onClick={handleSearchRate}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
              {/* KONIEC TAB-CONTENT */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}