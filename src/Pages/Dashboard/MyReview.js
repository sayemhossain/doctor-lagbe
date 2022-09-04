import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (e) => {
    e.preventDefault();

    const name = user?.displayName;
    const email = user?.email;
    const reviewtxt = e.target.review.value;
    const location = e.target.location.value;
    const rating = e.target.rating.value;

    const review = { name, email, reviewtxt, location, rating };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Thanks for your review..!");
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img
            className="rounded-xl"
            src="https://img.freepik.com/free-vector/client-review-web-screen-successful-4-4-star-business-opinion_1150-37483.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="bg-base-100 p-5 rounded-xl">
          <form action="" onSubmit={handleReview}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
              <input
                type="text"
                value={user?.displayName}
                disabled
                class="input w-full max-w-xs bg-slate-50"
              />
              <input
                type="text"
                value={user?.email}
                disabled
                class="input w-full max-w-xs bg-slate-50"
              />
              <input
                type="text"
                name="location"
                required
                placeholder="Your location"
                class="input w-full max-w-xs bg-slate-50"
              />
              <select
                required
                name="rating"
                class="select w-full max-w-xs bg-slate-50"
              >
                <option disabled selected>
                  Rate us
                </option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
            <div className="mt-4 ">
              <textarea
                class="textarea"
                name="review"
                className="bg-slate-50 w-full rounded-lg h-28 resize-none p-5"
                placeholder="Type your opinion here."
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary px-5 mt-4" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyReview;
