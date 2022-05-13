import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import Whitening from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: Whitening,
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-28 px-5">
      <div className="text-center">
        <h4 className="text-secondary text-xl font-bold uppercase">
          Our Services
        </h4>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
