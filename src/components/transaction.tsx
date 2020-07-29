import React from "react";

type Props = {
  transaction: any;
};

const Transaction: React.SFC<Props> = ({ transaction }) => {
  return (
    <li>
      {transaction.id}
      <span>-$400</span>
      <button>x</button>
    </li>
  );
};

export default Transaction;
