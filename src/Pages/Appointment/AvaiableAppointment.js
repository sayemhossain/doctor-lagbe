import { format } from "date-fns";
import React from "react";

const AvaiableAppointment = ({ date }) => {
  return (
    <div className="my-10 md:my-20">
      <div>
        <h4 className="text-center text-secondary">
          Available Appointments on {format(date, "PP")}
        </h4>
      </div>
      <div></div>
    </div>
  );
};

export default AvaiableAppointment;
