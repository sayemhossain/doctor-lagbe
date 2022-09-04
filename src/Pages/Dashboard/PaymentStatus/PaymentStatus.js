import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PaymentStatusContainer from "./PaymentStatusContainer";

const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/payments/${email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);
  return (
    <div>
      <div className="text-center py-5">
        <h1
          className="text-xl font-bold uppercase text-blue-300"
          style={{ fontFamily: "Macondo" }}
        >
          Payment leaderboard
        </h1>
      </div>
      <div className="md:px-28">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>TREATMENT</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Payment Number</th>
                <th>Trans Id</th>
                <th>Method</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => (
                <PaymentStatusContainer
                  payment={payment}
                  index={index}
                  key={payment._id}
                ></PaymentStatusContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
