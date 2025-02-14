"use client";
import { useEffect, useRef } from "react";

/**
 * Komponent korzysta z Google Autocomplete.
 * Wymaga, aby skrypt Google Maps (z 'places') był już załadowany globalnie.
 */
export default function GooglePlacePicker({ value, onChange, placeholder }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Po zamontowaniu sprawdzamy, czy google.maps jest dostępne
    if (window.google && window.google.maps) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const address = place?.formatted_address || place?.name || "";
        if (onChange) {
          onChange(address);
        }
      });
    }
  }, []);

  // Obsługa wpisywania tekstu, żeby user mógł ręcznie coś wpisać
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="search-input"
      placeholder={placeholder || ""}
      value={value}
      onChange={handleInputChange}
    />
  );
}