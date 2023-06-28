import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };
  const deleteTransaction = async(index) => {
    const transactionToDelete = transactions[index];
    setTransactions(transactions.filter(transaction => transaction.id !== index));
    const response = await fetch(`http://localhost:4000/transactions/${transactionToDelete.id}`, {
        method: "DELETE",
      });
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