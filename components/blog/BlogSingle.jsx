/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-duplicate-props */


"use client";

import Image from "next/image";
import { reviews, socials, tags } from "@/data/blogs";
import { useState } from "react";

export default function BlogSingle({ blog }) {
  const [fullName, setFullName] = useState("Test");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="section pt-60 bg-white latest-new-white">
      <div className="container-sub">
        
        {/* Sekcja nagłówka z obrazkiem */}
        <div className="box-feature-image mb-60 wow fadeInUp relative">
          <Image
            src="/assets/imgs/page/homepage1/CLIFFSOFMOHER.webp" // Ścieżka do obrazu nagłówka
            alt="Cliffs of Moher"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">One Day Trip from Dublin to Cliffs of Moher</h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl text-center">
              Discover the spectacular Cliffs of Moher at your own pace! Our one-day trip from Dublin offers flexibility and the comfort of private transport, ideal for groups of <strong>1 to 7</strong> people. Without a guide, you can enjoy the freedom to explore this unique region independently.
            </p>
            <p className="text-lg md:text-xl font-bold">
              Estimated trip duration: approximately 10-13 hours.
            </p>
          </div>
        </div>

        {/* Sekcja - What We Offer */}
        <h3 className="heading-36-medium text-center text-blue-600 mt-20">What We Offer:</h3>
        <ul className="list-disc ml-10 mb-20 text-lg">
          <li>Private Transport: A comfortable car with a driver, ensuring a smooth round trip with bottled water and free Wi-Fi.</li>
          <li>Flexible Schedule: Adjust the day’s plan according to your preferences and explore at your own pace.</li>
          <li>Scenic Views: Stops for photos at the most picturesque spots of your choice.</li>
          <li>Free Time for Sightseeing: Free time to discover the area on your own.</li>
          <li>Safety and Convenience: The price includes all parking and toll fees.</li>
        </ul>

        {/* Sekcja - Itinerary */}
        <h3 className="heading-36-medium text-center text-blue-600">Itinerary:</h3>
        <ol className="list-decimal ml-10 mb-20 text-lg">
          <li>Departure from Dublin: Early morning pickup from your specified location.</li>
          <li>
            Optional Stops:
            <ul className="list-disc ml-6">
              <li><strong>Cliffs of Moher:</strong> Walk along breathtaking views of the Atlantic Ocean, stretching for 8 kilometers along Ireland's western coast and reaching heights of up to 214 meters.</li>
              <li><strong>Hazel Mountain Chocolate:</strong> Discover Irish chocolate crafted directly from sustainable cacao beans at the foothills of the Burren Mountains.</li>
              <li><strong>The Burren:</strong> Scenic drive through a unique landscape with stops for photos and exploration.</li>
              <li><strong>Aillwee Burren Experience:</strong> Visit the oldest Irish cave, see birds of prey, and shop local products.</li>
              <li><strong>Galway City:</strong> Option to explore the city’s vibrant streets and cultural spots.</li>
              <li><strong>Bunratty Castle and Folk Park:</strong> A brief stop to explore this medieval fortress.</li>
            </ul>
          </li>
          <li>Lunch in a Traditional Pub: Optional stop for a delicious meal.</li>
          <li>Return to Dublin: Flexible return time based on your preferences.</li>
        </ol>

        {/* Sekcja - Price */}
        <h3 className="heading-36-medium text-center text-blue-600">Price:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold">Premium Car (up to 3 people)</h4>
            <p className="text-blue-600 text-xl">€695 per group</p>
            <p>Experience the luxury of our premium cars. Includes Cliff of Moher entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold">Premium MPV (up to 7 people)</h4>
            <p className="text-blue-600 text-xl">€895 per group</p>
            <p>Travel in style with our premium MPVs. Includes Cliff of Moher entrance tickets, private luxury car transfer, waiting time, parking and toll fees, bottled water, and free Wi-Fi.</p>
          </div>
        </div>

        {/* Informacje dodatkowe */}
        <p className="text-blue-500 font-bold mt-8 text-center">Please note that our offer does not include:</p>
        <ul className="list-disc ml-10 mb-12 text-lg">
          <li>A guide</li>
          <li>Aillwee Cave (€16 p.p)</li>
          <li>Bunratty Castle & Folk Park (€10 p.p)</li>
          <li>Tips for the driver</li>
        </ul>

        <h3 className="heading-36-medium text-center text-blue-600">Additional Options:</h3>
        <p className="text-lg text-center mb-20">
          The possibility to customize the route and trip plan according to individual preferences, including your favorite places not shown on the standard list, and flexible planning of stops and their duration.
        </p>

        {/* Sekcja - Udostępnij i Tagi */}
        <div className="box-share-tags mt-50 wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30 text-lg-start text-center">
              <span className="text-16-medium color-text mr-15">Share</span>
              <div className="d-inline-block social-single">
                {socials.map((elm, i) => (
                  <a
                    key={i}
                    className={`icon-socials icon-${elm.name}`}
                    href={elm.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                ))}
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mb-30 text-center">
              {tags.slice(0, 4).map((elm, i) => (
                <a key={i} className="btn btn-tag mr-10 mb-10" href={elm.href}>
                  {elm.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}