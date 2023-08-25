import React, { useState, useEffect } from 'react';
import './index.css';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Search from './components/Search';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [creditCardInput, setCreditCardInput] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');

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

  const handleCreditCardChange = (event) => {
    setCreditCardInput(event.target.value);
  };

  const handleCheckout = () => {
    if (creditCardInput.length === 16) {
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
      setCheckoutMessage(`Thank you for shopping with us! Your total is $${totalPrice.toFixed(2)}`);
      setCartItems([]);
    } else {
      setCheckoutMessage('Please try again.');
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>MarketHub - The Premier Shopping E-Commerce App</h1>
      </header>
      <main>
        <Search value={searchQuery} onChangeData={handleSearchChange} />
        <ProductsList
          products={filteredProducts}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
        />
        <Cart
          cartItems={cartItems}
          creditCardInput={creditCardInput}
          checkoutMessage={checkoutMessage}
          onCreditCardChange={handleCreditCardChange}
          onCheckout={handleCheckout}
        />
      </main>
    </div>
  );
};

export default App;
