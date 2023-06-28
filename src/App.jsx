import React, {useState, useEffect} from 'react';
import './App.css';
import TransactionList from './components/TransactionList';


const [transactions, setTransactions] = useState([]);

  //fetch data from db.json
  useEffect(() => {
    let ignore = false;

    async function fetchTransactions() {
      const response = await fetch('http://localhost:4000/transactions');
      const transactions = await response.json();
      if(!ignore) {
        setTransactions(transactions);
      }
      return transactions;
    }

    fetchTransactions();

    return () => {
      ignore = true;
    }
  }, []);
useEffect(() => {
    let ignore = false;

    async function fetchTransactions() {
      const response = await fetch('http://localhost:4000/transactions');
      const transactions = await response.json();
      if(!ignore) {
        setTransactions(transactions);
      }
      return transactions;
    }

    fetchTransactions();

    return () => {
      ignore = true;
    }
  }, []);

const App = () => {
  return (
    <div className="App">
      <TransactionList />
    </div>
  );
};

export default App;
