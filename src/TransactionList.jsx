import React, { useState } from 'react';

const TransactionList = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      name,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setName('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.name} ({transaction.amount})
          </li>
        ))}
      </ul>
      <div>
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
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default TransactionList;
