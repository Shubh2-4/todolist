// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Pants', price: 30 },
    { id: 3, name: 'Shoes', price: 50 }
  ];

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
