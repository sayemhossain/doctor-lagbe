import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div>
      <div
        class={`card lg:card-side ${bgClass} shadow-xl text-white px-0 md:px-5 lg:px-10 py-5 md:py-0`}
      >
        <figure className="pl-5">
          <img className="text-white" src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
