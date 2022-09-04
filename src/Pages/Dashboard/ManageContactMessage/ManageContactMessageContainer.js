import React from "react";

const ManageContactMessageContainer = ({ contact, index }) => {
  const { email, subject, message } = contact;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{subject}</td>
      <td>{message}</td>
    </tr>
  );
};

export default ManageContactMessageContainer;
