// src/components/ProductPage.jsx
import React from 'react';
import './ProductPage.css';

const products = [
  {
    id: 1,
    title: 'Toy - 1',
    price: '$249.99',
    // description: 'A stylish leather backpack, perfect for work or travel.',
    image: 'https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_640.jpg',
  },
  {
    id: 2,
    title: 'Luxury Coffee Cup',
    price: '$19.99',
    description: 'Start your day with a cup of coffee in this elegant cup.',
    image: 'https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Classic Sunglasses',
    price: '$129.99',
    description: 'Protect your eyes with style using these classic shades.',
    image: 'https://images.pexels.com/photos/4926936/pexels-photo-4926936.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Leather Wallet',
    price: '$99.99',
    description: 'Carry your essentials in this classy leather wallet.',
    image: 'https://images.pexels.com/photos/4452530/pexels-photo-4452530.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
