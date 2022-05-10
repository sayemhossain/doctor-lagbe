import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen px-0 md:px-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl h-full" />
          <div>
            <h1 className="text-4xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
