import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import MyAppointmentDetails from "./MyAppointmentDetails";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://desolate-anchorage-09734.herokuapp.com/booking?patient=${user.email}`
      )
        .then((res) => {
          if (res.status === 401 || res.status == 401) {
            signOut(auth);

            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
          setLoading(false);
        });
    }
  }, [user, appointments]);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-0 md:px-10">
      <div className="flex justify-between  items-center mb-5">
        <h4 className="uppercase text-purple-900">
          My Appointment: {appointments.length}
        </h4>
        <button className="btn btn-outline">Appointment</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Cancel Booking</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <MyAppointmentDetails
                key={appointment._id}
                index={index}
                appointment={appointment}
              ></MyAppointmentDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
