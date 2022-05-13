import React from "react";

const BookingModal = ({ treatment }) => {
  const { name, solts } = treatment;
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
              placeholder="Type here"
              class="input input-bordered w-full max-w-sm mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-sm mb-5"
            />
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
