import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

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
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col">
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl">
              <div class="card-body">
                <p className="text-center">
                  <small>Hello, {appointment.patientName}</small>
                </p>
                <h2 class=" md:text-xl font-bold text-center">
                  Please pay for {appointment.treatment}.
                </h2>
                <p className="text-sm text-center">
                  Your appointment on{" "}
                  <span className="text-red-400">{appointment.date} </span> at{" "}
                  <span>{appointment.slot}</span>
                </p>
                <p className="text-center">
                  Amount:{" "}
                  <span className="text-red-400 font-bold">
                    ${appointment.price}
                  </span>
                </p>
              </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
