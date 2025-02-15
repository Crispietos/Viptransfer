"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";
import TimePickerPlugin from "react-multi-date-picker/plugins/time_picker";

export default function TimePickerComponent({ value, onChange }) {
  return (
    <DatePicker
      disableDayPicker
      value={value}           // wartość powinna być stringiem "HH:mm"
      format="HH:mm"
      plugins={[<TimePickerPlugin key="timepicker" hideSeconds />]}
      onChange={(val) => {
        const timeStr = val?.format("HH:mm") ?? "";
        if (onChange) onChange(timeStr);
      }}
    />
  );
}