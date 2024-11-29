import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TransactionForm = ({ currentTransaction, setCurrentTransaction }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTransaction) {
      setType(currentTransaction.type);
      setAmount(currentTransaction.amount);
      setDescription(currentTransaction.description);
    }
  }, [currentTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: currentTransaction ? currentTransaction.id : Date.now(),
      type,
      amount: parseFloat(amount),
      description
    };

    if (currentTransaction) {
      dispatch({ type: 'UPDATE_TRANSACTION', payload: transaction });
      setCurrentTransaction(null);
    } else {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">{currentTransaction ? 'Update' : 'Add'} Transaction</button>
    </form>
  );
};

export default TransactionForm;
