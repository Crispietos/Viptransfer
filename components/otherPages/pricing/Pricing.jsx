"use client";

import { useState } from "react";
import {
  businessClassPrices,
  castleHotelsPrices,
  mpvAndFirstClassPrices,
  castleHotelsExtendedPrices,
  golfResortTransfersPrices
} from './PriceList'; // Poprawna ścieżka importu

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  const handleSelection = (category, value, sectionName) => {
    const selectedPrice = category.find((item) => item.city === value);
    setSelectedOption(selectedPrice);
    setCurrentSection(sectionName);
  };

  const renderDetails = (selected, title, description) => (
    <div className="mt-8 mx-auto max-w-lg bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center p-8">
      <h3 className="text-4xl font-bold text-gray-800 mt-6">{title}</h3>
      <p className="text-xl text-gray-600">{description}</p>
      <p className="text-5xl font-extrabold text-blue-600 mt-4 mb-6">{selected.price}</p>
      <a
        href={selected.link}
        className="inline-block text-xl font-bold py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        style={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          display: 'block',
          margin: '20px auto',
          padding: '8px 48px',
          width: '200px',
        }}
      >
        Book Now
      </a>
    </div>
  );

  const sections = [
    {
      name: "Business Class",
      description: "Mercedes E-class or similar",
      img: ["/assets/imgs/E-Class.png"],
      prices: businessClassPrices,
    },
    {
      name: "Castle Hotels",
      description: "Stay in luxury castles for an exclusive experience",
      img: ["/assets/imgs/E-Class.png"],
      prices: castleHotelsPrices,
    },
    {
      name: "MPV and First Class",
      description: "Luxury travel with Mercedes V/S Class",
      img: ["/assets/imgs/MercedesBenzV-Class.png", "/assets/imgs/s-class.webp"],
      prices: mpvAndFirstClassPrices,
    },
    {
      name: "Castle Hotels Extended",
      description: "More exclusive castle hotel destinations",
      img: ["/assets/imgs/s-class.webp", "/assets/imgs/E-Class.png"],
      prices: castleHotelsExtendedPrices,
    },
    {
      name: "Golf Resort Transfers",
      description: "Tee Off in Style with Golf Resort Transfers",
      img: ["/assets/imgs/MercedesBenzV-Class.png"],
      prices: golfResortTransfersPrices,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
  <h2 className="text-2xl font-semibold text-gray-600 mb-4">
    Find the best options for your comfort and convenience.
  </h2>
  <p className="text-lg text-gray-500 mb-30">
    Explore our premium travel options designed to suit your needs.
  </p>
</div>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`bg-${index % 2 ? "gray-100" : "white"} py-16`}
          style={{ marginBottom: "80px" }} // Dodanie dużych odstępów
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">{section.name}</h2>
            <p className="text-lg font-semibold">{section.description}</p>
            <div className="flex justify-center space-x-6 mt-6">
              {section.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={section.name}
                  className="w-[150px] h-[100px] object-contain"
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <label className="block text-2xl font-bold text-gray-700 mb-30">
              Choose your destination:
            </label>
            <select
              onChange={(e) => handleSelection(section.prices, e.target.value, section.name)}
              className="block w-2/3 mx-auto p-4 border border-gray-400 rounded-lg shadow-md text-gray-800 text-xl mb-12"
            >
              <option value="">Select a destination</option>
              {section.prices.map((item) => (
                <option key={item.city} value={item.city}>
                  {item.city}
                </option>
              ))}
            </select>
            {selectedOption && currentSection === section.name &&
              renderDetails(
                selectedOption,
                section.name,
                `Enjoy our premium travel with ${section.description}`
              )}
          </div>
        </div>
      ))}
    </div>
  );
}