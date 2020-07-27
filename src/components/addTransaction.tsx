import React, { useState } from "react";

const AddTransaction: React.SFC = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  return (
    <div>
      <h3>Add Transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          ></input>
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter Amount..."
          ></input>
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
