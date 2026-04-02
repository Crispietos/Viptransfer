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

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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
      {/* --- AGRESYWNY BLOK CSS --- */}
      <style>{`
        /* 1. Młot na wewnętrzne kontenery bibliotek (DatePicker, PlacePicker) */
        .custom-search-bar .react-datepicker-wrapper,
        .custom-search-bar .react-datepicker__input-container,
        .custom-search-bar .autocomplete-container {
          width: 100% !important;
          display: block !important;
          padding: 0 !important;
          margin: 0 !important;
          height: auto !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* 2. Zgniecenie wysokości i stylów dla samych inputów */
        .custom-search-bar .search-item input {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
          height: 24px !important; /* Sztywno ucięta wysokość */
          line-height: 24px !important;
          color: #222 !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          width: 100% !important;
          outline: none !important;
          text-align: left !important; /* Koniec z wyśrodkowanym tekstem! */
        }
        .custom-search-bar .search-item input:focus {
          outline: none !important;
        }

        /* 3. Zabijamy sztywne wysokości z głównego szablonu dla całej sekcji */
        .custom-search-bar .search-item {
          min-height: 0 !important; 
          height: auto !important;
          border: none !important;
        }

        /* 4. Główny kontener - Frosted Glass */
        .custom-search-bar {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 60px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), inset 0 2px 2px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 10px; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        /* 5. Pojedynczy blok wprowadzania danych */
        .custom-input-panel {
          flex: 1;
          background: rgba(240, 244, 248, 0.6);
          border-radius: 40px;
          padding: 10px 20px !important; 
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start !important; /* Sztywno do lewej */
          text-align: left !important;
        }

        /* 6. Tekst Etykiety (DATE, TIME, itp) */
        .custom-label {
          font-weight: 600;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 11px;
          display: block;
          margin-bottom: 2px;
          width: 100%;
          text-align: left !important; /* Sztywno do lewej */
        }

        /* 7. Przycisk wyszukiwania */
        .custom-btn-wrap {
          margin: 0 !important;
          padding: 0 !important;
          min-height: auto !important;
        }
        .custom-btn {
          background: linear-gradient(135deg, #111 0%, #333 100%);
          color: #fff;
          border-radius: 50px;
          padding: 14px 30px; 
          height: 100%;
          min-height: 48px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.1);
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
        .custom-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1);
        }

        /* === MEDIA QUERIES DLA WERSJI MOBILE === */
        @media (max-width: 991px) {
          .custom-search-bar {
            flex-direction: column; 
            border-radius: 20px; 
            padding: 12px;
            gap: 8px; /* Mały odstęp */
          }
          .custom-input-panel {
            width: 100%;
            border-radius: 12px; 
            padding: 8px 15px !important; /* Ekstremalnie smukłe paddingi */
            min-height: 50px !important; /* Wymuszamy żeby panel był NISKI */
          }
          .custom-btn-wrap {
            width: 100%;
            margin-top: 4px;
          }
          .custom-btn {
            width: 100%;
            justify-content: center;
            padding: 12px;
          }
        }
      `}</style>

      <div className="box-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
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

        <div className="hero-navigation">
          <button ref={prevRef} className="hero-swiper-prev">&larr;</button>
          <button ref={nextRef} className="hero-swiper-next">&rarr;</button>
        </div>
      </div>

      {/* --- NOWY PASEK REZERWACJI --- */}
      <div className="box-search-ride custom-search-bar wow fadeInUp">
        
        <div className="search-item search-date custom-input-panel">
          <label className="custom-label">Date</label>
          <DatePickerComponent value={selectedDate} onChange={setSelectedDate} />
        </div>
        
        <div className="search-item search-time custom-input-panel">
          <label className="custom-label">Time</label>
          <TimePickerComponent value={selectedTime} onChange={setSelectedTime} />
        </div>
        
        <div className="search-item search-from custom-input-panel">
          <label className="custom-label">From</label>
          <DynamicPlacePicker
            inputId="autocomplete-from"
            value={pickup}
            onChange={setPickup}
            placeholder="Enter pickup location"
          />
        </div>
        
        <div className="search-item search-to custom-input-panel">
          <label className="custom-label">To</label>
          <DynamicPlacePicker
            inputId="autocomplete-to"
            value={dropoff}
            onChange={setDropoff}
            placeholder="Enter dropoff location"
          />
        </div>
        
        <div className="search-item search-button custom-btn-wrap">
          <button 
            className="btn custom-btn" 
            type="button" 
            onClick={handleSearch}
          >
            <Image width={20} height={20} src="/assets/imgs/template/icons/search.svg" alt="Search" />
            Quote
          </button>
        </div>
        
      </div>
    </section>
  );
}