import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Balance />
      </div>
    </div>
  );
}

export default App;
