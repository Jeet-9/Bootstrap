import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';

function App() {
  const [currentTransaction, setCurrentTransaction] = useState(null);

  return (
    <div className="App">
      <h1>Money Management</h1>
      <TransactionForm 
        currentTransaction={currentTransaction} 
        setCurrentTransaction={setCurrentTransaction} 
      />
      <Summary />
      <TransactionList setCurrentTransaction={setCurrentTransaction} />
    </div>
  );
}

export default App;
