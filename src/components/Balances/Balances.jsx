import React from "react";
import "./Balances.style.scss";
export const Balances = () => {
  return (
    <div className="container">
      <div>
        <span>income</span>
        <h2 className="income">$0.00</h2>
      </div>
      <div>
        <span>expense</span>
        <h2 className="expense">$0.00</h2>
      </div>
    </div>
  );
};
