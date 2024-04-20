import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <img src="https://i.pinimg.com/736x/3e/d0/c9/3ed0c915aee5b6d59fab71273d51d4a1.jpg"
       alt="sonic/shopping"></img>
      <div>
        <h2>Available Items</h2>
        <ul>
          <li onClick={() => addToCart("Cheetos")}>Cheetos</li>
          <li onClick={() => addToCart("Sour Patch Kids")}>Sour Patch Kids</li>
          <li onClick={() => addToCart("Onion Rings")}>Onion Rings</li>
        </ul>
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
