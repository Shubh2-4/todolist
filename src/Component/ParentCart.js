// ParentCart.js
import React from 'react';
import ProductList from './ProductList';

const ParentCart = ({ addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default ParentCart;
