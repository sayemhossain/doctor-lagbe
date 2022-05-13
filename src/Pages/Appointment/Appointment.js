import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvaiableAppointment from "./AvaiableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvaiableAppointment date={date} setDate={setDate}></AvaiableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
