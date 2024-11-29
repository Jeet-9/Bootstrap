import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editedProduct, setEditedProduct] = useState({}); 
  const [newProduct, setNewProduct] = useState({ title: '', price: '' }); 

  function fetchProducts() {
    fetch('http://localhost:3001/products')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts(data);
      })
      .catch(function (error) {
        console.log('Error fetching products:', error);
      });
  }

  useEffect(function () {
    fetchProducts();
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3001/products/${id}`, { method: 'DELETE' })
      .then(function () {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(function (error) {
        console.log('Error deleting product:', error);
      });
  }

  function handleEdit(index) {
    setEditIndex(index); 
    setEditedProduct(products[index]); 
  }

  function handleSave(id) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedProduct),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = editedProduct; 
        setProducts(updatedProducts);
        setEditIndex(null); 
      })
      .catch(function (error) {
        console.log('Error saving product:', error);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value, 
    });
  }

  function handleNewProductChange(event) {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  }

  function handleAddProduct() {
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newProduct,
        id: products.length + 1,
        image: 'https://via.placeholder.com/150', 
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts([...products, data]);
        setNewProduct({ title: '', price: '' }); 
      })
      .catch(function (error) {
        console.log('Error adding product:', error);
      });
  }

  return (
    <div className="container">
      <h1>Product Showcase</h1>
      <div className="add-product-form">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleNewProductChange}
          className="product-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleNewProductChange}
          className="product-input"
        />
        <button onClick={handleAddProduct} className="add-button">
          Add Product
        </button>
      </div>

      <div className="product-grid">
        {products.map(function (product, index) {
          return (
            <div key={product.id} className="product-card">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleInputChange}
                    className="product-input"
                  />
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                    className="product-input"
                  />
                  <button onClick={() => handleSave(product.id)} className="save-button">
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">Rs. {product.price}</p>
                  <button onClick={() => handleEdit(index)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
