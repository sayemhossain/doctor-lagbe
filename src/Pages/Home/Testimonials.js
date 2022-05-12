import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: { people1 },
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 1,
      name: "Winson Herry",
      img: { people2 },
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 1,
      name: "Winson Herry",
      img: { people3 },
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-10 mx-0 md:mx-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold text-primary">Testimonial</h4>
          <h2 className="text-2xl ">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48 " src={quote} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;
