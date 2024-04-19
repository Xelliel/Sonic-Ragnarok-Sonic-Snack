import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Define the FoodItem component
function FoodItem({ name, price, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

const food = [
  {
    name: "Cheetos",
    price: "5.99",
    image: "",
  },
  {
    name: "Sour Patch Kids",
    price: "5.99",
    image: "",
  },
  {
    name: "Onion Rings",
    price: "",
    image: "",
  }
];

// Define the ShoppingCart component
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {/* Render food items */}
        {food.map((item, index) => (
          <div key={index}>
            <FoodItem name={item.name} price={item.price} image={item.image} />
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        {/* Render shopping cart items */}
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
