import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();

    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    console.log(_id, slot, name, phone, email);
    setTreatment(null);
  };
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
          <form
            onSubmit={handleBooking}
            action=""
            className="text-center mt-10"
          >
            <input
              type="text"
              class="input input-bordered w-full max-w-sm mb-5"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="slot"
              class="select select-bordered w-full max-w-sm mb-5"
            >
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-sm mb-5"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-sm mb-5"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-sm mb-5"
              required
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
