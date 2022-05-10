import React from "react";

const InfoCard = (props) => {
  return (
    <div>
      <div class="card lg:card-side bg-primary shadow-xl text-white px-0 md:px-5 lg:px-10">
        <figure>
          <img src={props.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
