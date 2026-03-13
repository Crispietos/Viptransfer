"use client";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Service() {
  const settings = {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: ".snbn3",
      prevEl: ".snbp3",
    },
    modules: [Navigation],
    breakpoints: {
      1399: { slidesPerView: 4 },
      1100: { slidesPerView: 3 },
      600: { slidesPerView: 2 },
      500: { slidesPerView: 1 },
      350: { slidesPerView: 1 },
      150: { slidesPerView: 1 },
    },
  };

  useEffect(() => {
    // Jeśli nie potrzebujesz dodatkowego paddingu, usuń ten useEffect
  }, []);

  return (
    <section className="section pt-90 pb-120 bg-our-service">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7 col-7">
            <h2 className="heading-44-medium title-fleet wow fadeInUp swiper-title">
              Our Services
            </h2>
          </div>
          <div className="col-lg-6 col-sm-5 col-5 text-end">
            <Link
              className="text-16-medium color-primary d-flex align-items-center justify-content-end wow fadeInUp"
              href="/service-grid"
            >
              More Services
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
            </Link>
          </div>
        </div>
      </div>
      <div className="box-slide-fleet mt-20 swiper-padding">
        <div
          className="box-swiper"
          style={{ maxWidth: "1560px", margin: "0 auto", overflow: "hidden" }}
        >
          <Swiper style={{ overflow: "hidden" }} {...settings} className="swiper-container swiper-group-4-service pb-0">
            {services.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cardService wow fadeInUp" style={{ position: "relative" }}>
                  <div className="cardInfo">
                    <h3 className="cardTitle text-20-medium color-white mb-10">{elm.title}</h3>
                    <div className="box-inner-info">
                      <p className="cardDesc text-14 color-white mb-30">{elm.description}</p>
                      <span className="cardLink btn btn-arrow-up" aria-hidden="true">
                        <svg
                          className="icon-16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="cardImage">
                    <Image
                      width={370}
                      height={400}
                      style={{ height: "fit-content" }}
                      src={elm.image}
                      alt={elm.title}
                    />
                  </div>
                  <Link
                    href={elm.href || "/service-grid"}
                    aria-label={`${elm.title} - view service`}
                    style={{ position: "absolute", inset: 0, zIndex: 5, display: "block" }}
                  >
                    <span className="sr-only">{elm.title}</span>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <div className="box-pagination-fleet">
              <div className="swiper-button-prev swiper-button-prev-fleet snbp3" role="button" aria-label="Previous slide" tabIndex={0}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="swiper-button-next swiper-button-next-fleet snbn3" role="button" aria-label="Next slide" tabIndex={0}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M8.25 4.5L15.75 12l-7.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .snbp3, .snbn3 {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: saturate(180%) blur(6px);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform .2s ease, background .2s ease, color .2s ease, box-shadow .2s ease;
          z-index: 20;
        }
        .snbp3:hover, .snbn3:hover {
          transform: translateY(-2px);
          background: #0EA5E9;
          color: #fff;
          box-shadow: 0 12px 32px rgba(14,165,233,0.35);
        }
        .swiper-button-prev-fleet { left: -8px; }
        .swiper-button-next-fleet { right: -8px; }
        @media (max-width: 768px) {
          .snbp3, .snbn3 { width: 42px; height: 42px; }
          .swiper-button-prev-fleet, .swiper-button-next-fleet { display: none; }
        }

        /* Hide Swiper's default pseudo arrows to avoid double icons */
        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after),
        :global(.swiper-button-next-fleet::after),
        :global(.swiper-button-prev-fleet::after),
        .snbp3::after,
        .snbn3::after {
          content: none !important;
        }

        /* Force our buttons' background to be consistent (override any theme styles) */
        .snbp3, .snbn3 {
          background: rgba(255,255,255,0.85) !important;
          border: 1px solid rgba(0,0,0,0.06) !important;
        }

        /* Ensure icons are centered and no extra layout artifacts */
        .snbp3 svg, .snbn3 svg { display: block; }
      `}</style>
    </section>
  );
}