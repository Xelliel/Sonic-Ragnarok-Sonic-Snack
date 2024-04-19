import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
  },
  {
    name: "",
    price: "",
    image: "",
  }
];

function FoodItem({ food }) {
  return (
    <div key={food.name}>
      <img src={food.image} alt={food.name} />
      <h2>{food.name}</h2>
      <p>{food.price}</p>
    </div>
  );
}

function addItemToCart() {
  const addSelectFood = document.getElementById("add-items");

  // Check if the element exists
  if (addSelectFood) {
    food.forEach(item => {
      addSelectFood.appendChild(createFoodItem(item));
    });
  } else {
    console.error("Element with ID 'add-items' not found.");
  }
}

function createFoodItem(foodItem) {
  // Create and configure the DOM element for the food item
  // and return it
  const foodElement = document.createElement("div");
  foodElement.textContent = foodItem;
  return foodElement;
}

document.addEventListener("DOMContentLoaded", function() {
  addItemToCart();
});

const incrementButtons = document.querySelectorAll("#increase");
incrementButtons.forEach(increaseItems);

function increaseItems(button) {
  button.addEventListener("click", function (e) {
    e.target.previousElementSibling.textContent++;
  });
}

const decrementButtons = document.querySelectorAll("#decrease");
decrementButtons.forEach(decreaseItems);

function decreaseItems(button) {
  button.addEventListener("click", function (e) {
    let currentQuantity = e.target.nextElementSibling.textContent;
    if (currentQuantity > 1) {
      e.target.nextElementSibling.textContent--;
    }
  });
}

function totalItemPrice(element, siblingPosition) {
  let itemPrice = element.parentElement.parentElement.previousElementSibling.children[1].textContent.slice(1);
  let itemQuantity = siblingPosition.textContent;
  let totalItemPrice = itemPrice * itemQuantity;
  element.parentElement.previousElementSibling.textContent = `$${totalItemPrice}`;
}

function calculateTotal() {
  let cartTotalPrice = 0;
  const getItemPrices = document.querySelectorAll("#total-item-cost");
  getItemPrices.forEach(itemPrice => {
    cartTotalPrice += Number(itemPrice.textContent.slice(1));
  });

  const shippingFee = (cartTotalPrice * 7 / 100);
  const totalCashToPay = cartTotalPrice + shippingFee;
  return [cartTotalPrice.toFixed(2), shippingFee.toFixed(2), totalCashToPay.toFixed(2)];
}

function updateTotals(elementId, value) {
  const element = document.querySelector(elementId);
  if (element) {
    element.textContent = value;
  } else {
    console.error(`Element with ID '${elementId}' not found.`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const [totalPrice, shippingFee, checkoutPrice] = calculateTotal();

  updateTotals("#add-items-cost", `$${totalPrice}`);
  updateTotals("#shipping-fee", `$${shippingFee}`);
  updateTotals("#total-amount-to-pay", `$${checkoutPrice}`);
  updateTotals("#checkout-btn", `Checkout $${checkoutPrice}`);
});