import React, {useState, useEffect, useContext} from reactRouterDom;
import {reducer} from './reducer';
import { toHaveTextContent } from '@testing-library/jest-dom/matchers';

function shoppingCart() {

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Montserrat:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./output.css" />
    <script type="module" src="./index.js" defer></script>
    <title>cart</title>
  </head>

  <body>
    <main class="md:p-6 md:pt-10 px-2 pt-6">
        <div class="md:flex md:flex-row md:items-center md:justify-between">
        <header class=" flex md:flex flex-row gap-x-2 pb-3 items-center">
          <img src="./images/bag-2.png" alt="" srcset="" />
          <p class="text-darkBlue text-2xl font-bold">Cart</p>
        </header>
      </div>
         <section class="lg:flex lg:flex-row lg:justify-start">
          <section class="lg:w-[65%] lg:pr-4">
           <div
           class="md:w-full border-y-2 py-4 border-lineColor flex flex-row justify-between text-grey font-medium"
         >
           <div class="md:flex md:w-[45%] md:flex-row md:justify-between ">
             <p>PRODUCT</p>
             <p>PRICE</p>
           </div>
           <div class="md:flex md:w-[30%] md:flex-row md:justify-between">
             <p>TOTAL</p>
             <p>QTY</p>
           </div>
         </div>
         <section id="add-items" class="add-cart-items">
              <!-- purchased items -->
         </section>
         <footer class="bg-totalsGrey p-4 lg:px-4 lg:p-0 lg:w-[35%]">
           <div class="total-section">
             <p class="total-amount-name">TOTAL AMOUNT IN CART</p>
             <p id="add-items-cost" class="total-amount">$</p>
           </div>
           <div class="total-section">
             <p class="total-amount-name">SHIPPING FEE</p>
             <p id="shipping-fee" class="total-amount">$</p>
           </div>
           <div class="total-section">
             <p class="total-amount-name">TOTAL AMOUNT</p>
             <p id="total-amount-to-pay" class="total-amount">$</p>
           </div>
           <button id='checkout-btn' class="total-amount mt-4 py-3 w-full active:bg-grey hover:bg-darkBlue bg-blue text-white ">Checkout <span id="checkout-btn-amount">708.85</span></button>
          </footer>
         </section>
       </main>
       <div id="add-items"></div>
       <script>
           document.addEventListener("DOMContentLoaded", addItemToCart);
   
           function addItemToCart() {
               const addSelectedfood = document.getElementById("add-items");
               food.forEach(food => {
                   addSelectedfood.appendChild(foodItem(food));
               });
           }
       </script>
</body>


}
