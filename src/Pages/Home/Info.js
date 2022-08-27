import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="px-5 md:px-5 lg:px-28 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10 -mt-7">
      <InfoCard
        cardTitle="Opening Hours"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
        bgClass="bg-primary bg-gradient-to-r from-cyan-500 to-blue-500"
      ></InfoCard>

      <InfoCard
        cardTitle="Visit our location"
        cardText="Dhanmondi-32, Dhaka, Bangladesh"
        img={marker}
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        cardText="+000 123 456789,+000 123 456789"
        img={phone}
        bgClass="bg-primary bg-gradient-to-r from-cyan-500 to-blue-500"
      ></InfoCard>
    </div>
  );
};

export default Info;
