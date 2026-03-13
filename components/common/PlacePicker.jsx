"use client";
import { useEffect, useRef, useState } from "react";
import { locations } from "@/data/locations";

export default function PlacePicker() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const inputRef = useRef(null);

  // Inicjalizacja Google Autocomplete
  useEffect(() => {
    if (window.google && window.google.maps) {
      const inputEl = document.getElementById("pickupLocation");
      if (inputEl) {
        const autocompletePickup = new window.google.maps.places.Autocomplete(inputEl, {
          componentRestrictions: { country: "ie" },
          fields: ["formatted_address", "geometry", "name"],
        });
        autocompletePickup.addListener("place_changed", () => {
          const place = autocompletePickup.getPlace();
          const address = place.formatted_address || place.name || "";
          setSelectedLocation(address);
        });
      }
    }
  }, []);

  // Prosty outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Filtrowanie miejsc z Irlandii
  const filteredLocations = locations.filter((loc) =>
    loc.location.toLowerCase().includes("ireland")
  );

  return (
    <div ref={inputRef} style={{ position: "relative" }}>
      <input
        id="pickupLocation"
        className="search-input dropdown-location"
        type="text"
        placeholder="Enter location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        onClick={() => setIsActive(!isActive)}
      />

      {/* Nasz dropdown z local locations */}
      {isActive && (
        <div className="box-dropdown-location">
          <div className="list-locations">
            {filteredLocations.map((elm, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedLocation(elm.placeName);
                  setIsActive(false);
                }}
                className="item-location"
              >
                {elm.placeName} – {elm.location}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}