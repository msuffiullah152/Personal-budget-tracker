import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  const { id, name, amount } = transaction;

  return (
    <li>
      <span>{name}</span> ({amount})
      <button onClick={() => deleteTransaction(id)}>Delete</button>
    </li>
  );
};

export default Transaction;
