import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Review = ({ review }) => {
  const { name, text, img, location } = review;
  return (
    <div className="card lg:mx-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className=" text-center mb-3">
          <div className="w-24 h-24 flex items-center justify-center bg-cyan-100 mx-auto rounded-full">
            <FontAwesomeIcon className="text-6xl" icon={faUser} />
          </div>
          <h4 className="text-2xl font-semibold">{name}</h4>
          <h6>{location}</h6>
        </div>

        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default Review;
