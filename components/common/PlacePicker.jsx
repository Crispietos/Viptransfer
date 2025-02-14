"use client";
import { locations } from "@/data/locations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

<<<<<<< HEAD
export default function PlacePicker({ value, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  // Kliknięcie poza komponent zamyka dropdown
=======
export default function PlacePicker() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    locations[0].placeName
  );
  const inputRef = useRef();
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    document.addEventListener("click", addInactive);
=======
    document.addEventListener("click", function (event) {
      // Check if click occurred inside mobileMenuInner
    });
  };
  useEffect(() => {
    document.addEventListener("click", (e) => addInactive(e));
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
    return () => {
      document.removeEventListener("click", addInactive);
    };
  }, []);

<<<<<<< HEAD
  // Wybranie miejsca z listy
  const handleSelect = (placeName) => {
    if (onChange) {
      onChange(placeName); // Przekazujemy wybraną nazwę do komponentu nadrzędnego
    }
    setIsActive(false);
  };

=======
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
  return (
    <>
      <input
        ref={inputRef}
        className="search-input dropdown-location"
<<<<<<< HEAD
        onClick={() => setIsActive((prev) => !prev)}
        type="text"
        placeholder=""
        value={value ?? ""} // Wyświetlamy wartość z props, jeśli jest (lub pusty string)
=======
        onClick={() => setIsActive((pre) => !pre)}
        type="text"
        placeholder=""
        value={selectedLocation}
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
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
<<<<<<< HEAD
              onClick={() => handleSelect(elm.placeName)}
              className="item-location"
            >
              <div className="location-icon">
                <Image width={16} height={16} src={elm.icon} alt="viptransfer" />
=======
              onClick={() => {
                setSelectedLocation(elm.placeName);
              }}
              className="item-location"
            >
              <div className="location-icon">
                <Image width={16} height={16} src={elm.icon} alt="luxride" />
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
