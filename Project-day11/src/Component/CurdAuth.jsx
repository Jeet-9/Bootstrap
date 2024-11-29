import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, 'submissions', id));  
    setItems(items.filter((item) => item.id !== id));
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};
