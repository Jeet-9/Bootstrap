import { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const CrudForm = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const [items, setItems] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setItems(
        items.map((item) =>
          item.id === formData.id ? { ...formData } : item
        )
      );
      setIsEditing(false);
    } else {
      const newItem = {
        id: items.length + 1,
        name: formData.name,
        email: formData.email,
      };
      setItems([...items, newItem]);
    }
    setFormData({ id: '', name: '', email: '' });
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setFormData(itemToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (!user) {
    return <div>Sign in to access the form.</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>

      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.email}){' '}
            <div>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudForm;
