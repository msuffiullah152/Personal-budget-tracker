import React, { useState } from 'react';
// import './TransactionForm';

const TransactionForm = ({ addTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name && amount && date) {
      const newTransaction = {
        id: Date.now(),
        name,
        amount: Number(amount),
        date,
      };

      addTransaction(newTransaction);
      setName('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Transaction Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Transaction Date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
