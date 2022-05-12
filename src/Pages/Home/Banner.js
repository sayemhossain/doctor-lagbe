import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="homebg">
      <div className="hero min-h-screen px-0 md:px-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl h-full" />
          <div className="mt-10 md:mt-0">
            <h1 className="text-4xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
