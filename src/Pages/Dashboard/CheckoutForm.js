import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setclientSecret] = useState("");

  const { _id, price, patient, patientName } = appointment;
  useEffect(() => {
    fetch(
      `https://desolate-anchorage-09734.herokuapp.com/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setclientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    console.log("click");
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // this is for card error
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://desolate-anchorage-09734.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center ">
          <button
            type="submit"
            className="btn btn-success text-white btn-xs mt-5 w-full px-5"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500 mt-1">{cardError}</p>}
      {success && (
        <div className=" mt-1">
          {" "}
          <p className="text-green-500">{success}</p>
          <p>
            Your transaction id:{" "}
            <span className="text-red-400 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
