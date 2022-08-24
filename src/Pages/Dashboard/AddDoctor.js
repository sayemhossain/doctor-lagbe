import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Services from "../Home/Services";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );
  const imgStorageKey = "5fc4392281d108af11683eeab1889e4a";
  /**
   * 3 way to store img
   * step 1: Third party storage //Free open public storage is ok for practice project
   * step 2: Your won storage in your won server (file system)
   * step 3: Mongodb
   *
   * YUP: to validate file---> Yup file validation for react hook forms
   */
  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: img,
          };

          //send to my database
          fetch(`http://localhost:5000/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully.");
                reset();
              } else {
                toast.error("Failed to add doctor.");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 shadow-xl p-10 w-96 md:w-3/5">
        <h3 className="text-xl text-center">Add a New Doctor</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mx-auto max-w-xs md:max-w-sm">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Doctor Name"
              className="input input-bordered w-full max-w-xs md:max-w-sm"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mx-auto max-w-xs md:max-w-sm">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Doctor Email"
              className="input input-bordered w-full max-w-xs  md:max-w-sm"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provice a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full mx-auto max-w-xs md:max-w-sm">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("speciality")}
              class="select input-bordered w-full max-w-xs  md:max-w-sm"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>

            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full mx-auto max-w-xs md:max-w-sm">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs pt-1.5  md:max-w-sm"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className=" text-center mt-5">
            <input
              className="btn w-full max-w-xs md:max-w-sm"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
