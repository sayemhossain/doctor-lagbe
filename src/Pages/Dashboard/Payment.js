import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1rB9J1SvemP9KBSWYsv07hEcXus8uWOEaw7YkkJkmVq6rDOkO7AjP65OrfrAzODqWPHRoPOQrBv4BTlFiorVnv00rNDhJrJr"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div class="min-h-screen w-full bg-base-100">
          <h4 className="text-xl text-center pt-10 uppercase text-red-400 font-bold">
            Payment leaderboard
          </h4>
          <p className="text-center pb-10">
            <small>Gratefulness is a payment everyone can afford.</small>
          </p>
          <div class="hero-content flex-col md:flex-row">
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl">
              <div class="card-body">
                <p className="">
                  <small className="text-primary ">
                    Hello, {appointment.patientName}
                  </small>
                </p>
                <h2 class="uppercase mb-5">
                  Please pay for{" "}
                  <span className="font-bold">{appointment.treatment}.</span>
                </h2>
                <p className="text-sm">
                  Your appointment on{" "}
                  <span className="text-red-400">{appointment.date} </span> at{" "}
                  <span>{appointment.slot}</span>
                </p>
                <p>
                  Amount:{" "}
                  <span className="text-red-400 font-bold">
                    ${appointment.price}
                  </span>
                </p>
              </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
              <div class="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
                <p className="mt-3">
                  Patience Pays..Is true! But the greater truth is that it takes
                  advance payment before it pays you in return!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
