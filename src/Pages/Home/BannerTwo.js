import React from "react";
import dentalImg from "../../assets/images/dental.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const BannerTwo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 px-0 md:px-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={dentalImg}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-o md:mx-20 py-10">
            <h1 className="text-4xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6 pr-0 md:pr-5">
              Dentistry, also known as dental medicine and oral medicine, is the
              branch of medicine focused on the teeth, gums, and mouth. It
              consists of the study, diagnosis, prevention, management, and
              treatment of diseases, disorders, and conditions of the mouth,
              most commonly focused on dentition as well as the oral mucosa.
            </p>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Dental_care">
              <PrimaryButton>Read more</PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
