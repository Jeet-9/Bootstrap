import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TransactionList = ({ setCurrentTransaction }) => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const handleEdit = (transaction) => {
    setCurrentTransaction(transaction);
  };

  return (
    <div className="transaction-list">
      {transactions.map((t) => (
        <div key={t.id} className={`transaction ${t.type}`}>
          <span>{t.description}</span>
          <span>${t.amount}</span>
          <button onClick={() => handleEdit(t)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
