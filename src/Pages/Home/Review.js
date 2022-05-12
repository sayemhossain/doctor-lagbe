import React from "react";

const Review = ({ review }) => {
  const { name, text, img, location } = review;
  return (
    <div className="card lg:mx-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{text}</p>
        <div className="flex items-center mt-5">
          <div>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="pl-5">
            <h4 className="card-title text-xl mb-2">{name}</h4>
            <h6>{location}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
