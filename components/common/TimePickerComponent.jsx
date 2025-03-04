"use client";
import React from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-multi-date-picker";

const TimePickerPlugin = dynamic(
  () => import("react-multi-date-picker/plugins/time_picker").then(mod => mod.default),
  { ssr: false }
);

export default function TimePickerComponent({
  value,
  onChange,
  format = "HH:mm",
  placeholder = "Select time",
}) {
  return (
    <DatePicker
      disableDayPicker
      value={value || ""}
      format={format}
      placeholder={placeholder}
      style={{ color: "black" }}
      plugins={[<TimePickerPlugin hideSeconds key="time-picker" />]}
      onChange={(timeObj) => {
        if (timeObj?.format) {
          onChange && onChange(timeObj.format(format));
        } else {
          onChange && onChange("");
        }
      }}
    />
  );
}