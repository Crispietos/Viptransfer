"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePickerComponent from "@/components/common/DatePickerComponent";
import TimePickerComponent from "@/components/common/TimePickerComponent";
import GooglePlacePicker from "@/components/common/GooglePlacePicker";
import PlacePicker from "@/components/common/PlacePicker";
import Image from "next/image";

export default function SearchBox({ service }) {
  const router = useRouter();

  // Stan do wyszukiwarki (dla zakładki Distance)
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  // Przykładowa funkcja obsługi przycisku "Search" (tylko w zakładce Distance)
  const handleSearch = () => {
    // Jeśli DatePicker/TimePicker zwracają obiekty Date, można je sformatować
    const formattedDate =
      selectedDate instanceof Date
        ? selectedDate.toLocaleDateString("en-CA")
        : selectedDate;

    const formattedTime =
      selectedTime instanceof Date
        ? selectedTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
        : selectedTime;

    router.push(
      `/booking-extra?date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(
        formattedTime
      )}&pickup=${encodeURIComponent(fromLocation)}&dropoff=${encodeURIComponent(toLocation)}`
    );
  };

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

            <div className="tab-content">
              {/* TAB: Distance */}
              <div
                className="tab-pane fade active show"
                id="tab-distance"
                role="tabpanel"
                aria-labelledby="tab-distance"
              >
                <div className="box-form-search">
                  {/* Data */}
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent
                        value={selectedDate}
                        onChange={(val) => setSelectedDate(val)}
                      />
                    </div>
                  </div>

                  {/* Czas */}
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent
                        value={selectedTime}
                        onChange={(val) => setSelectedTime(val)}
                      />
                    </div>
                  </div>

                  {/* From */}
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <GooglePlacePicker
                        value={fromLocation}
                        onChange={(val) => setFromLocation(val)}
                        placeholder="Enter pickup location"
                      />
                    </div>
                  </div>

                  {/* To */}
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <GooglePlacePicker
                        value={toLocation}
                        onChange={(val) => setToLocation(val)}
                        placeholder="Enter dropoff location"
                      />
                    </div>
                  </div>

                  {/* Search button */}
                  <div className="search-item search-button mb-0">
                    <button
                      className="btn btn-search"
                      type="button"
                      onClick={handleSearch}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* TAB: Hourly */}
              <div
                className="tab-pane fade"
                id="tab-hourly"
                role="tabpanel"
                aria-labelledby="tab-hourly"
              >
                <div className="box-form-search">
                  {/* Tutaj przykładowe użycie TimePicker, DatePicker i statycznego PlacePicker */}
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <PlacePicker />
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <PlacePicker />
                    </div>
                  </div>
                  <div className="search-item search-button mb-0">
                    <button className="btn btn-search" type="submit">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* TAB: Flat Rate */}
              <div
                className="tab-pane fade"
                id="tab-rate"
                role="tabpanel"
                aria-labelledby="tab-rate"
              >
                <div className="box-form-search">
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <PlacePicker />
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <PlacePicker />
                    </div>
                  </div>
                  <div className="search-item search-button mb-0">
                    <button className="btn btn-search" type="submit">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/template/icons/search.svg"
                        alt="luxride"
                      />
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* end tab-rate */}
            </div>
            {/* end tab-content */}
          </div>
          {/* end box-search-tabs */}
        </div>
        {/* end box-search-ride */}
      </div>
      {/* end box-form-service-single */}
    </section>
  );
}