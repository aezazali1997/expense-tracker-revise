import React from "react";
import "./TransactionHistory.style.scss";
export const TransactionHistory = () => {
  const transaction = {
    description: "anything",
    cost: "+10",
  };
  const history = [transaction];
  return (
    <div>
      <h1>Transaction History</h1>
      <hr />
      <ul>
        {history.map((trans, id) => {
          return (
            <li key={id} className="list-item">
              <span>{trans.description}</span>
              <span>{trans.cost}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
