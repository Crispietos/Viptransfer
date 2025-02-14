"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- KLUCZOWA ZMIANA
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import DatePickerComponent from "@/components/common/DatePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import GooglePlacePicker from "@/components/common/GooglePlacePicker";

const banners = [
  {
    id: 1,
    url: "/assets/imgs/page/homepage1/banner6.png",
    title: "Your Journey, Your Way",
    text: "Travel in Style for Business and Leisure",
  },
  {
    id: 2,
    url: "/assets/imgs/page/homepage1/banner2.png",
    title: "Private Day Trips",
    text: "Discover Ireland at Your Own Pace",
  },
  {
    id: 3,
    url: "/assets/imgs/page/homepage1/banner3.png",
    title: "Luxury Transportation",
    text: "Executive Transfers for Business and Personal Needs",
  },
  {
    id: 4,
    url: "/assets/imgs/page/homepage1/banner4.png",
    title: "Safe and Professional",
    text: "Experience the Highest Standards with VIPTransfer",
  },
  {
    id: 5,
    url: "/assets/imgs/page/homepage1/banner5.png",
    title: "Airport Transfers",
    text: "Seamless Travel for Small Groups and Individuals",
  },
  {
    id: 6,
    url: "/assets/imgs/page/homepage1/banner.png",
    title: "Airport Transfers",
    text: "Seamless Travel for Small Groups and Individuals",
  },
];

export default function Hero() {
  const router = useRouter();

  // Stan do wyszukiwarki
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  // Ustawienia slidera
  const settings = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn2",
      prevEl: ".snbp2",
    },
    modules: [Navigation, Autoplay, Pagination],
    pagination: {
      el: ".sph1",
      clickable: true,
      type: "fraction",
    },
    autoplay: {
      delay: 10000,
    },
  };

  // Obsługa przycisku "Search"
  const handleSearch = () => {
    router.push(
      `/booking-extra?date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(
        selectedTime
      )}&pickup=${encodeURIComponent(fromLocation)}&dropoff=${encodeURIComponent(toLocation)}`
    );
  };

  return (
    <section className="section banner-home1">
      <div className="box-swiper">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...settings}
          className="swiper-container swiper-banner-1 pb-0"
        >
          {banners.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div
                className="box-cover-image boxBgImage"
                style={{
                  backgroundImage: `url(${elm.url})`,
                }}
              ></div>
              <div className="box-banner-info">
                <p className="text-16 color-white wow fadeInUp">{elm.title}</p>
                <h2 className="heading-52-medium color-white wow fadeInUp">
                  {elm.text.split(" ").slice(0, 2).join(" ")}{" "}
                  <br className="d-none d-lg-block" />
                  {elm.text.split(" ").slice(2).join(" ")}
                </h2>
              </div>
            </SwiperSlide>
          ))}

          <div className="box-pagination-button hero1nagigation">
            <div className="swiper-button-prev swiper-button-prev-banner snbp2"></div>
            <div className="swiper-button-next swiper-button-next-banner snbn2"></div>
            <div className="swiper-pagination swiper-pagination-banner sph1"></div>
          </div>
        </Swiper>
      </div>

      {/* Sekcja wyszukiwania */}
      <div className="box-search-ride wow fadeInUp">
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

        {/* From (GooglePlacePicker) */}
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

        {/* To (GooglePlacePicker) */}
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

        {/* Przycisk Search */}
        <div className="search-item search-button">
          <button className="btn btn-search" type="button" onClick={handleSearch}>
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
    </section>
  );
}