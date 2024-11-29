import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, editUser, deleteUser } from '../redux/userSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleSubmit = () => {
    if (isEditing) {
      dispatch(editUser({ id: currentUserId, name, lastName, phoneNumber, password }));
      setIsEditing(false);
      setCurrentUserId(null);
    } else {
      dispatch(addUser({ name, lastName, phoneNumber, password }));
    }
    setName('');
    setLastName('');
    setPhoneNumber('');
    setPassword('');
  };

  const handleEdit = (user) => {
    setName(user.name);
    setLastName(user.lastName);
    setPhoneNumber(user.phoneNumber);
    setPassword(user.password);
    setIsEditing(true);
    setCurrentUserId(user.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h1>Project</h1>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"
        />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name"
        />
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phone number"
        />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"
        />
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.lastName} (Phone: {user.phoneNumber}) (ID: {user.id})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
