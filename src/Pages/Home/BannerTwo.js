import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BannerTwo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 px-0 md:px-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-o md:mx-20 py-10">
            <h1 className="text-4xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6 pr-0 md:pr-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
