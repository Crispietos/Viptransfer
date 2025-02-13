"use client";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const banners = [
  {
    id: 1,
    url: "/assets/imgs/page/homepage1/banner.png",
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
];

const services = [
  {
    id: 1,
    title: "Airport Transfers",
    description: "We will pick you up from the airport and take you directly to your destination in comfortable conditions.",
  },
  {
    id: 2,
    title: "Private Day Trips",
    description: "Explore Ireland at your own pace, with a guide or independently.",
  },
];

const fleet = [
  {
    id: 1,
    type: "Executive Cars",
    description: "Luxurious interiors, perfect for business trips.",
  },
  {
    id: 2,
    type: "Minivans",
    description: "Ideal for groups, with ample space for luggage and comfort.",
  },
];

export default function Hero() {
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

          <div className="box-pagination-button hero1navigation">
            <div className="swiper-button-prev swiper-button-prev-banner snbp2"></div>
            <div className="swiper-button-next swiper-button-next-banner snbn2"></div>
            <div className="swiper-pagination swiper-pagination-banner sph1"></div>
          </div>
        </Swiper>
      </div>

      <section className="why-choose-us">
        <h2 className="heading-40-medium">Why Choose Us</h2>
        <p className="text-16 color-grey">
          We are committed to providing you with seamless, reliable, and luxurious transportation. Here’s why our clients choose us:
        </p>
        <ul>
          <li>Professional drivers ensuring punctuality and safety.</li>
          <li>Clean and disinfected vehicles for every journey.</li>
          <li>Flexible travel options to meet all your needs.</li>
        </ul>
      </section>

      <section className="services">
        <h2 className="heading-40-medium">Our Services</h2>
        {services.map(service => (
          <div key={service.id} className="service-item">
            <h3 className="heading-24-medium">{service.title}</h3>
            <p className="text-16 color-grey">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <h2 className="heading-40-medium">How It Works</h2>
        <ol>
          <li>Choose your service and select your pick-up location.</li>
          <li>Book online with our easy reservation system.</li>
          <li>Enjoy a comfortable ride with our professional drivers.</li>
        </ol>
      </section>

      <section className="safety-standards">
        <h2 className="heading-40-medium">Our Safety Standards</h2>
        <ul>
          <li>Safety and hygiene: Every vehicle is thoroughly cleaned and disinfected after each trip.</li>
          <li>Reliability: We guarantee punctuality and full professionalism of our drivers.</li>
        </ul>
      </section>

      <section className="client-testimonials">
        <h2 className="heading-40-medium">What Our Clients Say</h2>
        <div className="testimonial">
          <p className="text-16 color-grey">
            "Professional and timely service! Highly recommend for anyone visiting Ireland."
          </p>
          <span>- John D.</span>
        </div>
      </section>

      <section className="our-fleet">
        <h2 className="heading-40-medium">Our Fleet</h2>
        {fleet.map(vehicle => (
          <div key={vehicle.id} className="fleet-item">
            <h3 className="heading-24-medium">{vehicle.type}</h3>
            <p className="text-16 color-grey">{vehicle.description}</p>
          </div>
        ))}
      </section>

      <section className="need-assistance">
        <h2 className="heading-40-medium">Need Assistance? We’re Here to Help</h2>
        <p className="text-16 color-grey">
          Have questions or need help with your booking? Contact us directly for assistance.
        </p>
        <button className="btn btn-primary">Contact Us</button>
      </section>

      <div className="box-search-ride wow fadeInUp">
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
        <div className="search-item search-button">
          <button className="btn btn-search" type="submit">
            <Image
              width={20}
              height={20}
              src="/assets/imgs/template/icons/search.svg"
              alt="Search"
            />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}