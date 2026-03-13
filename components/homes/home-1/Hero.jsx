"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const DatePickerComponent = dynamic(() => import("@/components/common/DatePicker"), {
  ssr: false,
  loading: () => <input type="date" />,
});
const TimePickerComponent = dynamic(() => import("@/components/common/TimePicker"), {
  ssr: false,
  loading: () => <input type="time" />,
});
const DynamicPlacePicker = dynamic(() => import("@/components/common/DynamicPlacePicker"), {
  ssr: false,
  loading: () => <input type="text" placeholder="Enter location" />,
});

const banners = [
  { id: 1, url: "/assets/imgs/page/homepage1/slide1.webp", title: "Your Journey, Your Way", text: "Private Transfer   for Business and Leisure in Ireland" },
  { id: 2, url: "/assets/imgs/page/homepage1/slide2.webp", title: "Dublin Airport Transfers", text: "Smooth and   Reliable Travel for Small Groups and Individuals" },
  { id: 3, url: "/assets/imgs/page/homepage1/slide3.webp", title: "Private Day Trips", text: "Explore Ireland   with a Professional Driver" },
  { id: 4, url: "/assets/imgs/page/homepage1/slide4.webp", title: "Premium Limo Service", text: "Executive Transfers   for Business and Personal Travel" },
  { id: 5, url: "/assets/imgs/page/homepage1/slide5.webp", title: "Flexible Private Transfers", text: "Custom Rides   Across Ireland" },
  { id: 6, url: "/assets/imgs/page/homepage1/slide6.webp", title: "Safe and Professional", text: "Experience the   High Standards and Friendly Service" },
];


export default function Hero() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  // Referencje do przycisków
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Stan do przechowywania instancji Swipera
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Gdy już mamy instancję Swipera, przypisujemy nasze przyciski i aktualizujemy nawigację
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Funkcja do obsługi Search
  const handleSearch = () => {
    let dateParam = selectedDate;
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      dateParam = selectedDate.toLocaleDateString("en-CA");
    }

    let timeParam = selectedTime;
    if (selectedTime instanceof Date && !isNaN(selectedTime)) {
      timeParam = selectedTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    }

    const qs = new URLSearchParams({ date: dateParam, time: timeParam, pickup, dropoff });
    window.location.href = `/booking-extra?${qs.toString()}`;
  };

  return (
    <section className="section banner-home1">
      <div className="box-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          // UWAGA: navigation: true - usuwamy, bo chcemy w 100% własne przyciski
          navigation={false}
          pagination={{ el: ".sph1", clickable: true, type: "fraction" }}
          autoplay={{ delay: 10000 }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="box-cover-image boxBgImage"
                style={{ backgroundImage: `url(${banner.url})` }}
              />
              <div className="box-banner-info">
                <p className="text-16 color-white wow fadeInUp">{banner.title}</p>
                <h2 className="heading-52-medium color-white wow fadeInUp">
                  {banner.text.split(" ").slice(0, 2).join(" ")}
                  <br className="d-none d-lg-block" />
                  {banner.text.split(" ").slice(2).join(" ")}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Przyciski nawigacyjne - własne klasy */}
        <div className="hero-navigation">
          <button ref={prevRef} className="hero-swiper-prev">
            {/* Możesz tu wstawić własną ikonkę np. <img> albo <svg> */}
            &larr;
          </button>
          <button ref={nextRef} className="hero-swiper-next">
            {/* Możesz tu wstawić własną ikonkę np. <img> albo <svg> */}
            &rarr;
          </button>
        </div>
      </div>

      <div className="box-search-ride wow fadeInUp">
        <div className="search-item search-date">
          <label className="text-14 color-grey">Date</label>
          <DatePickerComponent value={selectedDate} onChange={setSelectedDate} />
        </div>
        <div className="search-item search-time">
          <label className="text-14 color-grey">Time</label>
          <TimePickerComponent value={selectedTime} onChange={setSelectedTime} />
        </div>
        <div className="search-item search-from">
          <label className="text-14 color-grey">From</label>
          <DynamicPlacePicker
            inputId="autocomplete-from"
            value={pickup}
            onChange={setPickup}
            placeholder="Enter pickup location"
          />
        </div>
        <div className="search-item search-to">
          <label className="text-14 color-grey">To</label>
          <DynamicPlacePicker
            inputId="autocomplete-to"
            value={dropoff}
            onChange={setDropoff}
            placeholder="Enter dropoff location"
          />
        </div>
        <div className="search-item search-button">
          <button className="btn btn-search" type="button" onClick={handleSearch}>
            <Image width={20} height={20} src="/assets/imgs/template/icons/search.svg" alt="luxride" />
               Quote
          </button>
        </div>
      </div>
    </section>
  );
}