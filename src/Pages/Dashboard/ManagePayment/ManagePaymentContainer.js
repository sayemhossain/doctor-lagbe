import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ManagePaymentContainer = ({ payment, index }) => {
  const {
    _id,
    patient,
    treatmentId,
    treatment,
    date,
    slot,
    number,
    method,
    transId,
  } = payment;

  const deletePayment = () => {
    fetch(`http://localhost:5000/payments/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successfull.");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patient}</td>
      <td>{treatment}</td>
      <td>{treatmentId}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>{number}</td>
      <td>{transId}</td>
      <td>{method}</td>
      <td>
        <button onClick={deletePayment} className="btn btn-error btn-xs">
          Delete
        </button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default ManagePaymentContainer;
