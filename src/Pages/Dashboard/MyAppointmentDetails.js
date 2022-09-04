import React from "react";
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
        {/* {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success px-3">
                        pay
                      </button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )} */}
        <button className="btn btn-xs btn-success px-3">Pay</button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default MyAppointmentDetails;
