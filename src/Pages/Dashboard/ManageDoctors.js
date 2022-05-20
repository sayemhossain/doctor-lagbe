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
      <h3 className="text-xl text-center mb-5">
        Manage Doctors: {doctors.length}
      </h3>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Gmail</th>
                <th>Speciality</th>
                <th>Remove Doctors</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-16 rounded-full"
                      src={doctor.image}
                      alt=""
                    />
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <button class="btn btn-xs btn-error">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
