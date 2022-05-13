import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
        <div class="card-body">
          <h2 class="card-title mx-auto text-primary">{name}</h2>
          <p className="uppercase text-sm">
            {slots.length}
            {slots.length > 1 ? " spaces" : " space"} available
          </p>
          <div class="card-actions mx-auto">
            <PrimaryButton>Book now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
