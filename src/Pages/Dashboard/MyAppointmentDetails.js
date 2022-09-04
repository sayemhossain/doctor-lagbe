import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const MyAppointmentDetails = ({ appointment, index }) => {
  const { _id, patientName, date, slot, treatment } = appointment;

  const handleDeleteOrder = () => {
    fetch(`http://localhost:5000/appointment/${_id}`, {
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
      <td>{patientName}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>{treatment}</td>
      <td>
        <button onClick={handleDeleteOrder} className="btn btn-xs btn-error">
          Cancel
        </button>
      </td>
      <td>
        <Link to={`/dashboard/payment/${_id}`}>
          <div className="flex justify-center">
            <button className="btn btn-primary px-8 btn-xs">pay</button>
          </div>
        </Link>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default MyAppointmentDetails;
