import React from 'react';

const Cart = ({ cartItems, creditCardInput, checkoutMessage, onCreditCardChange, onCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <aside id="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <p key={index}>
          {item.title} - ${item.price}
        </p>
      ))}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <input
        type="text"
        placeholder="Enter 16-digit credit card"
        value={creditCardInput}
        onChange={onCreditCardChange}
      />
      <button id="checkout" onClick={onCheckout}>
        Checkout
      </button>
      <p>{checkoutMessage}</p>
    </aside>
  );
};

export default Cart;

