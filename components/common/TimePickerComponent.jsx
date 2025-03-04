"use client";
import React from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-multi-date-picker";

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
      disableDayPicker
      value={value}
      format={format}
      plugins={[<TimePickerPlugin hideSeconds key="time-picker" />]}
      onChange={(timeObj) => {
        if (onChange) onChange(timeObj);
      }}
    />
  );
}