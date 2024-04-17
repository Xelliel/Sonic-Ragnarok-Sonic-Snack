import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className= "content">
          <Switch>
            <Route  extact path="/">
              <Home/>
            </Route>
            <Route path ="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
//const [beanResponse, setBeanResponse] = useState({})
  
  // fetch from back end
 async function fetchHome(){
    let beanResponse = await fetch(
      "http://127.0.0.1:5000/home.jsx"
    )
    let homeData = await homeResponse.json()

   
  

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
  )
 }
};



export default App;
