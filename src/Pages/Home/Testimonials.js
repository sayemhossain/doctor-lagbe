import React, { useEffect, useState } from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const [reviews, setReiews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReiews(data));
  }, []);
  const homeReviews = reviews.slice(0, 6);
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary">Testimonial</h4>
          <h2 className="text-2xl ">What Our Patients Sas</h2>
        </div>
        <div>
          <img className="w-16 lg:w-48 " src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 ">
        {homeReviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
