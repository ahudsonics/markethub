import React from 'react';
import Product from './Product';

const ProductsList = ({ products, addToCart }) => {
  return (
    <section id="products">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default ProductsList;
