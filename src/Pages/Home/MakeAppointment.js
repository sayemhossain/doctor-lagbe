import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="text-xl text-secondary">Appointment</h4>
        <h2 className="text-2xl font-bold mt-2 text-white">
          Make an appointment Today
        </h2>
        <p className="text-white my-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
