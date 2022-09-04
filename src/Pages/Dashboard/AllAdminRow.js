import React from "react";

const AllAdminRow = ({ admin, index }) => {
  const { email } = admin;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
    </tr>
  );
};

export default AllAdminRow;
