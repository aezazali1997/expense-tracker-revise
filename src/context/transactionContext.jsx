import React, { createContext } from "react";
import { useReducer } from "react";

import { appReducer } from "./appReducer";

const initial = {
  transactions: [],
};
export const GlobalContext = createContext(initial);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initial);

  const addTrans = (transaction) => {
    dispatch({
      type: "add",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTrans,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
