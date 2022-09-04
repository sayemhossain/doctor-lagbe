import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const contactData = {
      email,
      subject,
      message,
    };
    fetch(`https://desolate-anchorage-09734.herokuapp.com/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Message is send..!");
      });
    e.target.reset();
  };
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
        <form action="" onSubmit={handleContact}>
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
            name="message"
            className="textarea textarea-bordered w-full max-w-xs mb-3"
            placeholder="Your message"
          ></textarea>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
