import React, { useEffect, useState } from "react";
import ManagePaymentContainer from "./ManagePaymentContainer";

const ManagePayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [payments]);

  return (
    <div className="px-3 md:px-20">
      <div className="bg-base-100 p-2 rounded-lg">
        <div class="overflow-x-auto">
          <table class="table-compact table-zebra w-full ">
            <thead>
              <tr className="bg-primary">
                <th>No.</th>
                <th>Patient Email</th>
                <th>Treatment Name</th>
                <th>Treatment Id</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Payment Number</th>
                <th>Trans Id</th>
                <th>Method</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <ManagePaymentContainer
                  key={payment._id}
                  payment={payment}
                  index={index}
                ></ManagePaymentContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePayment;
