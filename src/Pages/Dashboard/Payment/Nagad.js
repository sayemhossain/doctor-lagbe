import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";

const Nagad = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    const bkashNumber = e.target.number.value;
    const transId = e.target.transId.value;
    console.log(bkashNumber);

    const productName = order.productName;

    const customerNamer = order.customerNamer;
    const userEmail = order.user;
    const orderQuantity = order.orderQuantity;
    const totalCost = order.totalCost;
    const address = order.address;
    const method = "Nagad";

    const paymentData = {
      productName,
      bkashNumber,
      transId,
      customerNamer,
      userEmail,
      orderQuantity,
      totalCost,
      address,
      method,
    };
    fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your payment is done..!");
      });
    e.target.reset();
  };
  return (
    <div>
      <div>
        <div class=" pt-10 bg-gray-100">
          <div className="text-center mb-4 ">
            <p className="text-xl font-semibold uppercase">
              Payment your money using Nagad
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Nagad Number: 01625-511680
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
            <div>
              <img
                className="h-full"
                src="https://smuct.edu.bd/wp-content/uploads/2021/06/Payment_Process_USSD.jpg-1024x576.jpeg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-base-100 p-6">
                <form action="" onSubmit={handlePayment}>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex gap-2">
                      <div class="form-control w-full">
                        <label class="label">
                          <span class="label-text">Your Name</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value={user?.displayName}
                          class="input input-bordered w-full input-sm "
                        />
                      </div>
                      <div class="form-control w-full">
                        <label class="label">
                          <span class="label-text">Payment Method</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Nagad"
                          class="input input-bordered w-full input-sm "
                        />
                      </div>
                    </div>
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Your Email</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value={user?.email}
                        class="input input-bordered w-full input-sm "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-x-5">
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Your Nagad Number</span>
                        </label>
                        <input
                          type="text"
                          name="number"
                          placeholder="Your Nagad Number"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Transaction ID </span>
                        </label>
                        <input
                          type="text"
                          name="transId"
                          placeholder="Trans Id"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn  btn-sm w-full">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagad;
