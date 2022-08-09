import React, { useContext } from "react";
import "./TransactionHistory.style.scss";

import { GlobalContext } from "../../context/transactionContext";

export const TransactionHistory = () => {
  const globalState = useContext(GlobalContext);
  const { transactions } = globalState;
  return (
    <div>
      <h1>Transaction History</h1>
      <hr />
      <ul>
        {Array.isArray(transactions) &&
          transactions.map((trans, id) => {
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
