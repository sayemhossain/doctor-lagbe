import { format } from "date-fns";
import React from "react";

const AvaiableAppointment = ({ date }) => {
  return (
    <div className="my-5 md:my-20">
      <h4 className="text-center text-primary">
        Available Appointments on {format(date, "PP")}
      </h4>
    </div>
  );
};

export default AvaiableAppointment;
