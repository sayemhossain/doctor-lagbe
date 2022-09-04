import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentStatusContainer = ({ payment, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{payment.treatment}</td>
      <td>{payment.date}</td>
      <td>{payment.slot}</td>
      <td>{payment.number}</td>
      <td>{payment.transId}</td>
      <td>{payment.method}</td>
      <td>{payment.price} tk</td>
      <td>
        <FontAwesomeIcon
          className="text-green-400"
          icon={faCircleCheck}
        ></FontAwesomeIcon>
      </td>
    </tr>
  );
};

export default PaymentStatusContainer;
