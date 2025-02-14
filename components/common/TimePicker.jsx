"use client";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export default function TimePickerComponent() {
  return (
    <DatePicker
      disableDayPicker
      value={new Date().getTime()}
<<<<<<< HEAD
      format="HH:mm" // 24-godzinny format
      plugins={[
        <TimePicker hideSeconds />
      ]}
    />
  );
}
=======
      format="hh:mm:ss A"
      plugins={[<TimePicker />]}
    />
  );
}
>>>>>>> 7012cbbba02a1f378d7165a6689f996eb7f88a48
