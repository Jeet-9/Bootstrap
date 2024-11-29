import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Product Showcase</h1>
      </div>
      <div className="product-grid">
        {arr.map((el) => (
          <div className="product-card" key={el.id}>
            <img src={el.image} alt={el.title} className="product-image" />
            <h3 className="product-title">{el.title}</h3>
            <p className="product-price">Rs. {el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
