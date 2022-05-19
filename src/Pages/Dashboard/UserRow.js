import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`Successfully make an admin`);
      });
  };
  return (
    <tr className="active">
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        ) : (
          <p className="text-sm">Already an admin</p>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
