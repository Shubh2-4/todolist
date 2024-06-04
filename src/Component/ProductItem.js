// ProductItem.js
import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const handleClick = () => {
    addToCart(product);
  };

  return (
    <li>
      <div>{product.name} - ${product.price}</div>
      <button onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default ProductItem;
