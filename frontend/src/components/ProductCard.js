import React from "react";

import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">

      <h3>{product.name}</h3>

      <p>Php {product.price}</p>

      <button id='addCart' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
