import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const transactions = useSelector((state) => state.transactions);

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="summary">
      <h3>Total Income: ${income}</h3>
      <h3>Total Expenses: ${expenses}</h3>
      <h3>Balance: ${balance}</h3>
    </div>
  );
};

export default Summary;
