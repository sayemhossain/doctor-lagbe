import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
        <div class="card-body">
          <h2 class="card-title mx-auto text-primary mb-2">{name}</h2>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500 text-sm">Try another date.</span>
            )}
          </p>
          <p className="uppercase text-sm">
            {slots.length}
            {slots.length > 1 ? " spaces" : " space"} available
          </p>
          <div class="card-actions mx-auto mt-3">
            <button
              disabled={slots.length === 0}
              className="btn btn-primary uppercase px-5 text-white"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
