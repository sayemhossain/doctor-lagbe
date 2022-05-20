import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctos", () =>
    fetch(`http://localhost:5000/doctor`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-xl text-center">Manage Doctors: {doctors.length}</h3>
    </div>
  );
};

export default ManageDoctors;
