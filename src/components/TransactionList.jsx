import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <TransactionForm addTransaction={addTransaction} />
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
