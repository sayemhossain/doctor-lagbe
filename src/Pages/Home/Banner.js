import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/images/homeImg.jpg";
import PrimaryButton from "../Shared/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-blue-50">
      <div className="hero min-h-screen px-0 md:px-10 lg:px-20">
        <div className="hero-content grid grid-cols-1 md:flex">
          <div className=" mb-5 md:mb-0">
            <h1 className="text-4xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Link to="/appointment">
              <PrimaryButton>Book Appointment</PrimaryButton>
            </Link>
          </div>
          <img
            src={homeImg}
            className="w-full md:max-w-lg rounded-lg shadow-2xl h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
