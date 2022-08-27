import React, { useEffect, useState } from "react";
import ManageReviewsContainer from "./ManageReviewsContainer";

const ManageReviews = () => {
  const [reviews, setReiews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReiews(data));
  }, [reviews]);
  return (
    <div className="px-3 md:px-20">
      <div className="bg-base-100 p-2 rounded-lg">
        <div class="overflow-x-auto">
          <table class="table-compact table-zebra w-full ">
            <thead>
              <tr className="bg-primary">
                <th>Number</th>
                <th>Name</th>
                <th>Location</th>
                <th>Rating</th>
                <th>Review Text</th>
                <th>Delete Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <ManageReviewsContainer
                  key={review._id}
                  review={review}
                  index={index}
                ></ManageReviewsContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
