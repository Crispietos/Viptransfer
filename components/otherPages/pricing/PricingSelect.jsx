"use client";
import { useState } from "react";
import { businessClassPrices } from "./PriceList"; // Import cennika

const PricingSelect = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="pricing-section bg-gray-50 pt-16 pb-16">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Business Class</h2>
          <p className="text-lg text-gray-600">
            Mercedes E-class or similar<br />
            Book Your comfort ride now with us.<br />
            DESTINATION from/to Dublin<br />
            Starting prices include: free bottles of Swiss Evian water and free Wi-Fi.
          </p>
        </div>

        {/* Lista rozwijana */}
        <div className="text-center">
          <label htmlFor="city-select" className="block text-2xl font-bold text-gray-700 mb-4">
            Choose your destination:
          </label>
          <select
            id="city-select"
            className="block w-2/3 mx-auto p-4 border border-gray-400 rounded-lg shadow-md text-gray-800 text-xl mb-8"
            onChange={(e) => {
              const selected = businessClassPrices.find((city) => city.city === e.target.value);
              setSelectedCity(selected);
            }}
          >
            <option value="">Select a destination</option>
            {businessClassPrices.map((item, index) => (
              <option key={index} value={item.city}>
                {item.city} - {item.price}
              </option>
            ))}
          </select>
        </div>

        {/* Wybrana destynacja */}
        {selectedCity && (
          <div className="text-center mt-8">
            <h3 className="text-3xl font-bold mb-4">{selectedCity.city}</h3>
            <p className="text-2xl mb-4">{selectedCity.price}</p>
            <a
              href={selectedCity.link}
              className="inline-block text-white bg-black px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSelect;