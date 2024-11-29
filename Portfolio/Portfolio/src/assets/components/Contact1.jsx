import React, { useState } from 'react';
import { CONTACT } from '../constants/index';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebaseConfig";

const Contact1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phoneNo: '', description: '' });
    } catch (error) {
      console.error('Error submitting message: ', error);
    }
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-stone-800 mt-10 p-4 rounded-lg">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded text-black" required />
          <input  type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded text-black" required />
        </div>
        <input  type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 mt-4 border rounded text-black" required />
        <input  type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 mt-4 border rounded text-black" required />
        <textarea name="description"value={formData.description}onChange={handleChange}placeholder="Description"className="w-full p-2 mt-4 border rounded text-black"rows="4"required></textarea>
        <button  type="submit"  className="w-full p-2 mt-4 text-white bg-black rounded hover:bg-blue-600"> Submit
        </button>
      </form>
    </div>
  );
};

export default Contact1;
