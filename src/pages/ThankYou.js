import React from "react";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="ty-conatiner">
      <div className="ty-box">
        <h1 className="order-id">Order Number #{Date.now()}</h1>
        <h1 className="ty-text">Thank you for</h1>
        <h1 className="ty-text">your order!</h1>
        <p className="ty-des">
          While you are waiting for your order do not forget to subscribe to out
          newsletter
        </p>

        <div className="sub-box">
          <input placeholder="Enter Your E-mail" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
