import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  const { name } = service;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl text-center">
        <div class="card-body">
          <h2 class="card-title mx-auto">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions mx-auto">
            <PrimaryButton>Book now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
