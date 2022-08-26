import React from "react";

const InfoCard = ({ img, cardTitle, bgClass, cardText }) => {
  return (
    <div>
      <div
        className={`card lg:card-side ${bgClass} shadow-xl text-white px-0 md:px-5 py-5`}
      >
        <figure className="pl-5">
          <img className="text-white" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="text-sm">{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
