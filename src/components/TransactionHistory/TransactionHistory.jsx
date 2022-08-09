import React, { useContext } from "react";
import "./TransactionHistory.style.scss";
export const TransactionHistory = () => {
  return (
    <div>
      <h1>Transaction History</h1>
      <hr />
      {}
      <ul>
        {/* {GlobalState.transactions.map((trans, id) => {
          return (
            <li key={id} className="list-item">
              <span>{trans.description}</span>
              <span>{trans.cost}</span>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
