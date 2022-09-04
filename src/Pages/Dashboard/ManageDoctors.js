import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(false);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctos", () =>
    fetch(`https://desolate-anchorage-09734.herokuapp.com/doctor`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (email) => {
    console.log(email);
    fetch(`https://desolate-anchorage-09734.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor deleted.`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
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
                <tr key={doctor._id}>
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
                    <label
                      onClick={() => {
                        setDeletingDoctor(doctor);
                      }}
                      for="delete-confirm-modal"
                      class="btn btn-xs btn-error"
                    >
                      Remove
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <DeleteConfirmModal
          deletingDoctor={deletingDoctor}
          handleDelete={handleDelete}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
