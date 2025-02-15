"use client";
import React, { useState } from "react";
import { locations } from "@/data/locations";

export default function PlacePicker({ value, onChange }) {
  const [isActive, setIsActive] = useState(false);

  // Kliknięcie poza komponent zamyka dropdown
  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
  };

  // Inicjalizacja event listenera
  useEffect(() => {
    document.addEventListener("click", addInactive);
    return () => {
      document.removeEventListener("click", addInactive);
    };
  }, []);

  const handleSelect = (placeName) => {
    if (onChange) onChange(placeName);
    setIsActive(false);
  };

  return (
    <>
      <input
        // ...
      />
      <div
        className="box-dropdown-location"
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <div className="list-locations">
          {locations.map((elm, i) => (
            <div key={i} onClick={() => handleSelect(elm.placeName)} className="item-location">
              {/* ... */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}