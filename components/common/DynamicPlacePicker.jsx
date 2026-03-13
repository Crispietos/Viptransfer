"use client";
import { useEffect, useRef, useState } from "react";

// Zbuduj etykietę jak w podpowiedzi: "Nazwa" + "ulica, dzielnica, miasto" (bez kodu i kraju)
function buildEstablishmentLabel(place) {
  const name = (place?.name || "").trim();
  const comps = Array.isArray(place?.address_components) ? place.address_components : [];
  const pick = (types) => {
    const c = comps.find((ac) => types.some((t) => ac.types.includes(t)));
    return c ? c.long_name : "";
  };
  const route = pick(["route"]);
  const sublocality = pick(["sublocality", "sublocality_level_1", "neighborhood"]); // np. Saint Kevin's, North Dock
  const locality = pick(["locality", "postal_town"]); // np. Dublin
  const tailParts = [route, sublocality, locality].filter(Boolean).join(", ");
  return [name, tailParts].filter(Boolean).join(" ").trim();
}

function buildShortAddressLabel(place) {
  const comps = Array.isArray(place?.address_components) ? place.address_components : [];
  const pick = (types) => {
    const c = comps.find((ac) => types.some((t) => ac.types.includes(t)));
    return c ? c.long_name : "";
  };
  const streetNumber = pick(["street_number"]);
  const route = pick(["route"]);
  const sublocality = pick(["sublocality", "sublocality_level_1", "neighborhood"]);
  const locality = pick(["locality", "postal_town"]);
  const admin2 = pick(["administrative_area_level_2"]); // county (częściej trafny w IE)
  const admin1 = pick(["administrative_area_level_1"]);

  // Wyprowadź nazwę hrabstwa bez prefiksu "County "
  let countyRaw = admin2 || admin1 || "";
  let county = countyRaw.replace(/^County\s+/i, "").trim();

  // Złóż krótki adres
  const street = [route, streetNumber].filter(Boolean).join(" ");
  const parts = [street, sublocality, locality].filter(Boolean);

  // Jeśli to wybór miasta/ miejscowości (bez ulicy), pokaż też hrabstwo
  const isLocalityOnly = !street && !sublocality && !!locality;
  if (isLocalityOnly && county) {
    parts.push(county);
  }

  return parts.join(", ");
}

export default function DynamicPlacePicker({
  label = "",
  placeholder = "Enter location",
  onChange,
  inputId = "autocomplete-input",
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.google &&
      window.google.maps &&
      window.google.maps.places &&
      inputRef.current
    ) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ["address_components", "formatted_address", "name", "types"],
        componentRestrictions: { country: "IE" },
      });

      // Dodajemy listener, aby reagować na zmianę miejsca
      const listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        // Preferujemy etykietę jak w dropdownie: Nazwa + ulica/miasto, bez kodów
        const preferNameTypes = new Set([
          "establishment",
          "lodging",
          "point_of_interest",
          "airport",
          "train_station",
          "transit_station",
          "tourist_attraction",
        ]);

        const types = Array.isArray(place?.types) ? place.types : [];
        let displayValue = "";

        if (types.some((t) => preferNameTypes.has(t))) {
          // Hotele/firmy – pokaż pełną nazwę + skrócony adres jak w podpowiedzi
          displayValue = buildEstablishmentLabel(place) || place.name || place.formatted_address || "";
        } else {
          // Adresy – krótka wersja bez kraju/kodu
          displayValue = buildShortAddressLabel(place) || place.formatted_address || place.name || "";
        }

        if (inputRef.current) inputRef.current.value = displayValue; // force override what Google put in the input
        setValue(displayValue);
        if (onChange) onChange(displayValue);
      });

      // Przy focusie ustawiamy szerokość dropdownu, by dopasować do inputa
      inputRef.current.addEventListener("focus", () => {
        setTimeout(() => {
          const dropdown = document.querySelector(".pac-container");
          if (dropdown && inputRef.current) {
            dropdown.style.width = `${inputRef.current.offsetWidth}px`;
          }
        }, 300);
      });

      return () => {
        window.google.maps.event.removeListener(listener);
      };
    }
  }, [onChange]);

  return (
    <div className="search-inputs">
      {label && (
        <label className="text-14 color-grey" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={inputRef}
        className="form-control location-picker-placeholder"
        type="text"
        placeholder={placeholder}
        value={value}
        title={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
      />
    </div>
  );
}