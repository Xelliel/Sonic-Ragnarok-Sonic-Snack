import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import newItem from "./item.js";

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

const food =[
  {
    name:"",
    price:"",
    image:"",
  },
  {
    name:"",
    price:"",
    image:"",
  },
  {
    name:"",
    price:"",
    image:"",
  },
  {
    name:"",
    price:"",
    image:"",
  }];

  function foodItem(food) {
    return (
      <div key={food.name}>
        <img src={food.image} alt={food.name} />
      <h2>{food.name}</h2>
      <p>{food.price}</p>
    </div>
  );
    
  }

  document.addEventListener("DOMContentLoaded",addItemToCart);

  function addItemToCart() {
    const addSelectFood = document.getElementById("add-items");
    food.forEach(food=>{
      addSelectFood.appendChild(foodItem(food));
    })
  }