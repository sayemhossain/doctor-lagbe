import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className=" md:px-5 lg:px-20 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 mx-auto pb-10">
      <InfoCard
        cardTitle="Opening Hours"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
        bgClass="bg-primary"
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        cardText="Brooklyn, NY 10036, United States"
        img={marker}
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        cardText="+000 123 456789"
        img={phone}
        bgClass="bg-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
