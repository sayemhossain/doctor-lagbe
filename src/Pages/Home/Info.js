import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="px-0 md:px-5 lg:px-20 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 mx-auto ">
      <InfoCard img={clock}></InfoCard>
      <InfoCard img={marker}></InfoCard>
      <InfoCard img={phone}></InfoCard>
    </div>
  );
};

export default Info;
