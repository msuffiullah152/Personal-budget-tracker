import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import Form from './Form';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = transaction => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]));
  };

  const deleteTransaction = id => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTransactions(transactions.filter(transaction => transaction.id !== id)));
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <Form addTransaction={addTransaction} />
      <ul>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
