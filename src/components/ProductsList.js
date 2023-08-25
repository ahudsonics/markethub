import React from 'react';
import { AddRemoveBtn } from './AddRemoveBtn';

const ProductsList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div className="products-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <AddRemoveBtn
                isAdded={cartItems.some((item) => item.id === product.id)}
                addItem={() => addToCart(product)}
                removeItem={() => removeFromCart(product)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;


