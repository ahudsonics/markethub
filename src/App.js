import React, { useState, useEffect } from 'react';
import './index.css';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const checkout = () => {
    alert('Thank you for shopping with us!');
    setCartItems([]);
  };

  return (
    <div>
      <header>
        <h1>Simple E-Commerce App</h1>
      </header>
      <main>
        <ProductsList
          products={products}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
        />
        <Cart cartItems={cartItems} checkout={checkout} />
      </main>
    </div>
  );
};

export default App;

