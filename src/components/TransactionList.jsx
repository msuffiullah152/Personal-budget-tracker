import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const response = await fetch('http://localhost:4000/transactions');
      const transactions = await response.json();
      setTransactions(transactions);
    }

    fetchTransactions();
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  async function deleteTransaction(transactionId) {
    await fetch(`http://localhost:4000/transactions/${transactionId}`, {
      method: 'DELETE'
    });

    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== transactionId)
    );
  }

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
