import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Cards from './Cards';
import ShoppingCart from './ShoppingCart';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className= "content">
          <Switch>
            <Route  exact path="/Home">
              <Home/>
            </Route>
            <Route path ="/create">
              <Create/>
            </Route>
            <Route path="/Cards">
              <Cards/>
            </Route>
            <div className="shoppingCart"></div>
            <Route path ="/ShoppingCart">
              <ShoppingCart/>
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
  
//const [beanResponse, setBeanResponse] = useState({})
  
  // fetch from back end




export default App;
