import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();

    const slot = e.target.slot.value;
    const phone = e.target.phone.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone,
    };

    // fetch booking data from backend
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `You already have an appointment ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary">{name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="text-center mt-10"
          >
            <input
              type="text"
              className="input input-bordered w-full max-w-sm mb-5"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-sm mb-5"
            >
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user.displayName || ""}
              className="input input-bordered w-full max-w-sm mb-5"
              required
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-sm mb-5"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email || ""}
              className="input input-bordered w-full max-w-sm mb-5"
              required
              disabled
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
