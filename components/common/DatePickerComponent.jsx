"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePickerComponent({
  value,
  onChange,
  format = "YYYY-MM-DD",
  placeholder = "Select date",
}) {
  return (
    <DatePicker
      format={format}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ color: "black" }}
    />
  );
}