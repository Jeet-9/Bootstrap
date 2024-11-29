import React, { useEffect, useState } from 'react';
import './Crud.css';

function Crud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ans, setAns] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('students')) || [];
    setData(existingData);
  }, []);

  const handleSubmit = () => {
    const obj = { name, email, phone, question, ans, description };

    if (editIndex !== null) {
      let updatedData = [...data];
      updatedData[editIndex] = obj;
      setData(updatedData);
      localStorage.setItem("students", JSON.stringify(updatedData));
      setEditIndex(null);
    } else {
      const newData = [...data, obj];
      setData(newData);
      localStorage.setItem("students", JSON.stringify(newData));
    }

    setName("");
    setEmail("");
    setPhone("");
    setQuestion("");
    setAns("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const remainingData = data.filter((e, i) => i !== index);
    setData(remainingData);
    localStorage.setItem("students", JSON.stringify(remainingData));
  };

  const handleEdit = (index) => {
    const singleData = data[index];
    setName(singleData.name);
    setEmail(singleData.email);
    setPhone(singleData.phone);
    setQuestion(singleData.question);
    setAns(singleData.ans);
    setDescription(singleData.description);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1 className="title">Student Data Entry</h1>
      <div className="form">
        <div className="input-group">
          <label>User Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Select Course</label>
          <select value={question} onChange={(e) => setQuestion(e.target.value)} required>
            <option value="" disabled>Select Course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="PGDCA">PGDCA</option>
          </select>
        </div>
        <div className="input-group">
          <label>Collage Name</label>
          <input type="text" value={ans} onChange={(e) => setAns(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>{editIndex !== null ? "Update" : "Submit"}</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Collage Name</th>
            <th>Description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((e, i) => (
              <tr id='a1' key={i}>
                <td id='a1'>{e.name}</td>
                <td id='a1'>{e.email}</td>
                <td id='a1'>{e.phone}</td>
                <td id='a1'>{e.question}</td>
                <td id='a1'>{e.ans}</td>
                <td id='a1'>{e.description}</td>
                <td><button className="edit-btn" onClick={() => handleEdit(i)}>Edit</button></td>
                <td><button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
