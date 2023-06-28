import React from 'react';

import './Transaction.css';
const Transaction = ({ transaction, deleteTransaction }) => {
  const { id, name, amount, date } = transaction;

  return (
    <li>
      <span>{name} <br/></span>
      <span>{amount}<br/></span>
      <span>{date}<br/></span> 
      <button onClick={() => deleteTransaction(id)}>Delete</button>
    </li>
  );
};

export default Transaction;
