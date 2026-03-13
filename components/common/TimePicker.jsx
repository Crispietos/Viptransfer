"use client";
import React from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-multi-date-picker";

/** 
 * Ładujemy plugin do obsługi czasu w trybie dynamicznym (SSR: false)
 * żeby uniknąć problemów na Next.js.
 */
const TimePickerPlugin = dynamic(
  () => import("react-multi-date-picker/plugins/time_picker").then((mod) => mod.default),
  { ssr: false }
);

/**
 * Komponent przyjmuje:
 * - value (np. string, obiekt Date, albo obiekt biblioteki)
 * - onChange (funkcję do zmiany stanu w rodzicu)
 * - format (opcjonalnie), domyślnie "HH:mm" (24h)
 */
export default function TimePickerComponent({
  value,
  onChange,
  format = "HH:mm",
}) {
  return (
    <DatePicker
      /** Wyłączamy wybór daty, zostaje tylko wybór czasu */
      disableDayPicker

      /** To, co w rodzicu – np. string / Date z useState */
      value={value}           

      /** Format np. "HH:mm" → 10:30 */
      format={format}

      /** Placeholder, żeby pojawiał się napis "Select time" */
      placeholder="Select time"

      /**
       * Główny plugin obsługujący czas.
       * Tutaj kluczowe jest "step={10}", 
       * które ogranicza minuty do 00, 10, 20, 30, 40, 50
       */
      plugins={[
        <TimePickerPlugin
          hideSeconds       // nie pokazujemy sekund
          step={10}         // minuty w odstępach co 10
          position="bottom" // wyświetlenie okna pod inputem
          key="time-picker" 
        />,
      ]}

      /** Po każdej zmianie czasu wywołujemy onChange z rodzica */
      onChange={(timeObj) => {
        if (onChange) onChange(timeObj);
      }}

      /** Klasy CSS – placeholder, szerokość inputa itd. */
      inputClass="form-control time-picker-placeholder time-picker-wide"
    />
  );
}