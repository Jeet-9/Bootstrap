import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc,} from '../../firebaseConfig';
import '../styles.css';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    hobby: '',
    city: '',
    university: '',
  });

  const [userData, setUserData] = useState([]);
  const [editId, setEditId] = useState(null);

  const usersCollection = collection(db, 'users');

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(usersCollection);
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      const userDoc = doc(db, 'users', editId);
      await updateDoc(userDoc, formData);
      setUserData((prevData) =>
        prevData.map((user) => (user.id === editId ? { ...user, ...formData } : user))
      );
      setEditId(null);
    } else {
      const docRef = await addDoc(usersCollection, formData);
      setUserData([...userData, { ...formData, id: docRef.id }]);
    }

    setFormData({ name: '', age: '', hobby: '', city: '', university: '' });
  };

  const handleEdit = (id) => {
    const userToEdit = userData.find((user) => user.id === id);
    setFormData(userToEdit);
    setEditId(id) 
  const handleDelete = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    setUserData(userData.filter((user) => user.id !== id));
  };
}

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input type="text" name="hobby" placeholder="Hobby" value={formData.hobby} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <input type="text" name="university" placeholder="University" value={formData.university} onChange={handleChange} />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>

      <h3>Existing Users</h3>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age} years old, Hobby: {user.hobby}, City: {user.city}, University: {user.university}
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetailsForm;
