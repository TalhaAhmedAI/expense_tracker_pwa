import React from "react";

type Props = {
  transaction: any;
};

const Transaction: React.SFC<Props> = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.id}
      <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
