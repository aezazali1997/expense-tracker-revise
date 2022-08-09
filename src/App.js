import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Balances } from "./components/Balances/Balances";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { Addtransaction } from "./components/AddTransaction/Addtransaction";
import { GlobalProvider } from "./context/transactionContext";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balances />
        <TransactionHistory />
        <Addtransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
