import React from 'react';

const Cart = ({ cartItems, checkout }) => {
  return (
    <aside id="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <p key={index}>
          {item.name} - ${item.price}
        </p>
      ))}
      <button id="checkout" onClick={checkout}>
        Checkout
      </button>
    </aside>
  );
};

export default Cart;
