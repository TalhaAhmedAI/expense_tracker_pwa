import React, { useContext } from "react";
import { globalContext } from "./../context/globalState";
import Transaction from "./transaction";

const TransactionList: React.SFC = () => {
  const { transactions } = useContext(globalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
