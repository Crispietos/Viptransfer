"use client";
import { locations } from "@/data/locations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PlacePicker({ value, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  // Kliknięcie poza komponent zamyka dropdown
  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", addInactive);
    return () => {
      document.removeEventListener("click", addInactive);
    };
  }, []);

  // Wybranie miejsca z listy
  const handleSelect = (placeName) => {
    if (onChange) {
      onChange(placeName); // Przekazujemy wybraną nazwę do komponentu nadrzędnego
    }
    setIsActive(false);
  };

  return (
    <>
      <input
        ref={inputRef}
        className="search-input dropdown-location"
        onClick={() => setIsActive((prev) => !prev)}
        type="text"
        placeholder=""
        value={value ?? ""} // Wyświetlamy wartość z props, jeśli jest (lub pusty string)
        readOnly
      />
      <div
        className="box-dropdown-location"
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <div className="list-locations">
          {locations.map((elm, i) => (
            <div
              key={i}
              onClick={() => handleSelect(elm.placeName)}
              className="item-location"
            >
              <div className="location-icon">
                <Image width={16} height={16} src={elm.icon} alt="viptransfer" />
              </div>
              <div className="location-info">
                <h6 className="text-16-medium color-text title-location">
                  {elm.placeName}
                </h6>
                <p className="text-14 color-grey searchLocations">
                  {elm.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}