import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form action="" className="text-center mt-10">
            <input
              type="text"
              class="input input-bordered w-full max-w-sm mb-5"
              value={format(date, "PP")}
              disabled
            />
            <select class="select select-bordered w-full max-w-sm mb-5">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-sm mb-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-sm mb-5"
            />
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-sm mb-5"
            />
            <input
              type="submit"
              className="btn btn-accent w-full max-w-sm"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
