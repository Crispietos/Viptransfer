"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePickerComponent({ value, onChange }) {
  return (
    <DatePicker
      value={value}          // Oczekujemy stringa "YYYY-MM-DD" lub pusty
      format="YYYY-MM-DD"    // Wyświetlanie w formacie 2024-02-29
      onChange={(val) => {
        // 'val' jest obiektem DateObject od react-multi-date-picker
        // Konwertujemy go do stringa "YYYY-MM-DD"
        const newVal = val?.format?.("YYYY-MM-DD") ?? "";
        if (onChange) onChange(newVal);
      }}
    />
  );
}