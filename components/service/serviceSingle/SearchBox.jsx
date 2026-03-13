"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamiczne importy, by uniknąć problemów z SSR (Vercel)
const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), { ssr: false });
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), { ssr: false });
const DynamicPlacePicker = dynamic(() => import("@/components/common/DynamicPlacePicker"), { ssr: false });

export default function SearchBox({ service }) {
  // --- STANY DLA KAŻDEJ ZAKŁADKI ---

  // 1) Distance
  const [distancePickup, setDistancePickup] = useState("");
  const [distanceDropoff, setDistanceDropoff] = useState("");
  const [distanceDate, setDistanceDate] = useState("");
  const [distanceTime, setDistanceTime] = useState("");

  // 2) Hourly
  const [hourlyPickup, setHourlyPickup] = useState("");
  const [hourlyDropoff, setHourlyDropoff] = useState("");
  const [hourlyDate, setHourlyDate] = useState("");
  const [hourlyTime, setHourlyTime] = useState("");

  // 3) Flat Rate
  const [ratePickup, setRatePickup] = useState("");
  const [rateDropoff, setRateDropoff] = useState("");
  const [rateDate, setRateDate] = useState("");
  const [rateTime, setRateTime] = useState("");

  // --- FUNKCJE PRZEKIEROWANIA ---

  // Przekierowanie z parametrami do /extrabooking
  const handleSearchDistance = () => {
    const queryString = `?pickup=${encodeURIComponent(distancePickup)}&dropoff=${encodeURIComponent(distanceDropoff)}&date=${encodeURIComponent(distanceDate)}&time=${encodeURIComponent(distanceTime)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  const handleSearchHourly = () => {
    const queryString = `?pickup=${encodeURIComponent(hourlyPickup)}&dropoff=${encodeURIComponent(hourlyDropoff)}&date=${encodeURIComponent(hourlyDate)}&time=${encodeURIComponent(hourlyTime)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  const handleSearchRate = () => {
    const queryString = `?pickup=${encodeURIComponent(ratePickup)}&dropoff=${encodeURIComponent(rateDropoff)}&date=${encodeURIComponent(rateDate)}&time=${encodeURIComponent(rateTime)}`;
    window.location.href = `/extrabooking${queryString}`;
  };

  return (
    <section className="section">
      {/* Możesz zostawić lub usunąć tło/baner, wedle potrzeb */}
      <div className="banner-image-service wow fadeInUp"></div>

      <div className="box-form-service-single">
        <div className="box-search-ride box-search-ride-style-2 wow fadeInUp light-input">
          <div className="box-search-tabs wow fadeInUp">
            {/* Nagłówek z zakładkami (Bootstrap lub inny) */}
            <div className="head-tabs">
              <ul className="nav nav-tabs nav-tabs-search" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-distance"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-distance"
                    aria-selected="true"
                  >
                    Distance
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-hourly"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-hourly"
                    aria-selected="false"
                  >
                    Hourly
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-rate"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-rate"
                    aria-selected="false"
                  >
                    Flat Rate
                  </a>
                </li>
              </ul>
            </div>

            {/* Zawartość zakładek */}
            <div className="tab-content">
              {/* ---------------- TAB DISTANCE ---------------- */}
              <div
                className="tab-pane fade active show"
                id="tab-distance"
                role="tabpanel"
                aria-labelledby="tab-distance"
              >
                <div className="custom-search-row wow fadeInUp">
                  {/* Data */}
                  <div className="custom-search-item">
                    <label>Date</label>
                    <DatePickerComponent
                      value={distanceDate}
                      onChange={(val) => setDistanceDate(val)}
                    />
                  </div>
                  {/* Time */}
                  <div className="custom-search-item">
                    <label>Time</label>
                    <TimePickerComponent
                      value={distanceTime}
                      onChange={(val) => setDistanceTime(val)}
                    />
                  </div>
                  {/* From (pickup) */}
                  <div className="custom-search-item">
                    <label>From</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-distance-from"
                      label="From"
                      placeholder="Enter pickup location"
                      onChange={(val) => setDistancePickup(val)}
                    />
                  </div>
                  {/* To (dropoff) */}
                  <div className="custom-search-item">
                    <label>To</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-distance-to"
                      label="To"
                      placeholder="Enter dropoff location"
                      onChange={(val) => setDistanceDropoff(val)}
                    />
                  </div>
                  {/* Search Button */}
                  <div className="custom-search-item" style={{ alignSelf: "flex-end" }}>
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
                aria-labelledby="tab-hourly"
              >
                <div className="custom-search-row wow fadeInUp">
                  <div className="custom-search-item">
                    <label>Time</label>
                    <TimePickerComponent
                      value={hourlyTime}
                      onChange={(val) => setHourlyTime(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>Date</label>
                    <DatePickerComponent
                      value={hourlyDate}
                      onChange={(val) => setHourlyDate(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>From</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-hourly-from"
                      label="From"
                      placeholder="Enter pickup location"
                      onChange={(val) => setHourlyPickup(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>To</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-hourly-to"
                      label="To"
                      placeholder="Enter dropoff location"
                      onChange={(val) => setHourlyDropoff(val)}
                    />
                  </div>
                  <div className="custom-search-item" style={{ alignSelf: "flex-end" }}>
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
                aria-labelledby="tab-rate"
              >
                <div className="custom-search-row wow fadeInUp">
                  <div className="custom-search-item">
                    <label>Date</label>
                    <DatePickerComponent
                      value={rateDate}
                      onChange={(val) => setRateDate(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>Time</label>
                    <TimePickerComponent
                      value={rateTime}
                      onChange={(val) => setRateTime(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>From</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-rate-from"
                      label="From"
                      placeholder="Enter pickup location"
                      onChange={(val) => setRatePickup(val)}
                    />
                  </div>
                  <div className="custom-search-item">
                    <label>To</label>
                    <DynamicPlacePicker
                      inputId="autocomplete-rate-to"
                      label="To"
                      placeholder="Enter dropoff location"
                      onChange={(val) => setRateDropoff(val)}
                    />
                  </div>
                  <div className="custom-search-item" style={{ alignSelf: "flex-end" }}>
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