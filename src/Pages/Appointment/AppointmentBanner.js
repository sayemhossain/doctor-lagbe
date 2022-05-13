import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import appointmentImg from "../../assets/images/bg.png";
const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url(${appointmentImg})`, backgroundSize: "cover" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="px-10 md:px-20">
          <DayPicker
            className="bg-base-100 rounded-lg p-5"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
