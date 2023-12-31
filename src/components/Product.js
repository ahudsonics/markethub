import React from 'react';

const Product = ({ product, addToCart }) => {
  const { name, price } = product;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
