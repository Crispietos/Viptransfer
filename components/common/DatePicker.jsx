"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePickerComponent({
  value,
  onChange,
  format = "DD/MM/YYYY", // Poprawiony format dla Irlandii
}) {
  return (
    <DatePicker
      format={format}
      value={value}
      placeholder="Select date"
      onChange={(dateObj) => {
        if (onChange) onChange(dateObj);
      }}
      inputClass="form-control date-picker-placeholder"
    />
  );
}