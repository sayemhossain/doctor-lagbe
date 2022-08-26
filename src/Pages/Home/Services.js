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
      text: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
      text: "Once the decay is removed, there is still a hole in the tooth that will cause problems, unless a filling is placed. Fillings prevent bacteria or plaque from building up inside cavities, which could lead to serious infections..",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: Whitening,
      text: "The actual whitening process involves the dentist applying a gel made of 15% to 35% hydrogen peroxide to your front teeth. Hydrogen peroxide can penetrate the porous outer layer of your teeth and break apart stain compounds.",
    },
  ];
  return (
    <div className="mt-20 px-5 md:px-20">
      <div className="text-center">
        <h4 className="text-secondary uppercase">Our Services</h4>
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
