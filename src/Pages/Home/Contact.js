import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="px-0 md:px-10 lg:px-20 py-10 md:py-10 "
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center">
        <h5 className="text-xl text-primary">Contact Us</h5>
        <h3 className="text-3xl text-white ">Stay connected with us</h3>
      </div>
      <div className="text-center pt-10">
        <form action="">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input w-full max-w-xs mb-4"
          />
          <br></br>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input w-full max-w-xs mb-4"
          />
          <br></br>
          <textarea
            className="textarea textarea-bordered w-full max-w-xs mb-3"
            placeholder="Your message"
          ></textarea>
          <br></br>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
