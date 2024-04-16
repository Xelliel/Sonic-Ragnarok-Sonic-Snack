import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
const [beanResponse, setBeanResponse] = useState({})
  
  // fetch from back end
  async function fetchHome(){
    let beanResponse = await fetch(
      "http://127.0.0.1:5000/home.jsx"
    )
    let homeData = await homeResponse.json()

    //storing the response
    setBeanResponse(homeData)
    console.log(Data)
  }
//  let favoriteFruitVeggieObject = { // curly bracket open
//   fruit: banana, // key then colon then value
//   vegetable: carrot // seperated by commas
//  } // closing curly bracket

 // banana == favoriteFruitVeggieObject.fruit
 // carrot == favoriteFruitVeggieObject.vegetable

 // favoriteFruitVeggieObject[fruit]
// beanResponse.goodness == 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src= "/sonic-snacks/public/images/FuAWj6_WwAIjvqG.jpg" className="App-logo" alt="sonic" />
        <p>Welcome to Sonic Snacks</p>
        <button> </button>
        <h1>Welcome To Sonic snacks</h1>
        <a
          className="App-link"
          href="http://localhost:5000/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fastest snacks ever
        </a>
      </header>
    </div>
  );
}

export default App;
