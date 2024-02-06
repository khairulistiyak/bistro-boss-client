import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full">
      <div>
        <SectionTitle heading={"PAYMENT"} subHeading={"Please provide"}></SectionTitle>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
      <div className="grid">
        <button className="btn btn-primary my-10">Payment</button>
      </div>
    </div>
  );
};

export default Payment;

// (react.js@977@)
