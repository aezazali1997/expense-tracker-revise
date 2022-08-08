import "./App.css";
import { Header } from "./components/Header/Header";
import { Balances } from "./components/Balances/Balances";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
function App() {
  return (
    <div className="App">
      <Header />
      <Balances />
      <TransactionHistory />
    </div>
  );
}

export default App;
