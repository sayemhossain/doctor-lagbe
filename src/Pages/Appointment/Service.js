import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
        <div className="card-body">
          <h2 className="card-title mx-auto text-primary mb-2">{name}</h2>
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
          <div className="card-actions mx-auto mt-3">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              htmlFor="booking-modal"
              className="btn btn-secondary uppercase px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500  "
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
