import React, { useContext } from "react";
import { globalContext } from "./../context/globalState";

const TransactionList: React.SFC = () => {
  const { transactions } = useContext(globalContext);

  return (
    <div>
      <h3>History</h3>
      <hr />
      <ul>
        {transactions.map((transaction) => (
          <li>{transaction.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
