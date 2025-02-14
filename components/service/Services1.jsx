import React from "react";
import Pagination from "../common/Pagination";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Services1() {
  return (
    <section className="section pt-60">
      <div className="container-sub">
        {/* Services section header */}
        <div className="text-center mb-50">
          <h2 className="text-32 font-bold">
            Professional Transportation Services in Ireland
          </h2>
          <p className="text-18 color-gray">
            We offer unparalleled transportation services, combining comfort, convenience, and professionalism. Experience top-quality travel with our exceptional transportation solutions.
          </p>
        </div>
        {/* Services list */}
        <div className="row">
          {services.slice(0, 6).map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6 mb-30">
              <div className="cardService wow fadeInUp">
                <div className="cardInfo">
                  <h3 className="cardTitle text-20-medium color-white mb-10">
                    {elm.title}
                  </h3>
                  <div className="box-inner-info">
                    <p className="cardDesc text-14 color-white mb-30">
                      {elm.description}
                    </p>
                    <Link
                      className="cardLink btn btn-arrow-up"
                      href={elm.href}
                    >
                      <svg
                        className="icon-16"
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
                <div className="cardImage">
                  <Image
                    width={370}
                    height={400}
                    style={{ height: "fit-content" }}
                    src={elm.image}
                    alt="Luxride"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination, if needed */}
        {/* <Pagination /> */}
      </div>
    </section>
  );
}