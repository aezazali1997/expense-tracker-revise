import React, { useState } from "react";
export const Addtransaction = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  return (
    <div>
      <h1>Add transaction</h1>
      <hr />
      <p>Description</p>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <p>Amount</p>
      <input
        type="text"
        placeholder="$"
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button
        onClick={() => {
          // addTrans({
          //   description: description,
          //   cost: amount,
          // });
        }}
      >
        {" "}
        Add
      </button>
    </div>
  );
};
