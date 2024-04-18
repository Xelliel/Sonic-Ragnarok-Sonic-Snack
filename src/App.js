import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import home from './home';
import Create from './Create';
import cards from './cards';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className= "content">
          <Switch>
            <Route  extact path="/">
              <home/>
            </Route>
            <Route path ="/create">
              <Create/>
            </Route>
            <Route path="/cards">
              <cards/>
            </Route>
            <div className="shoppingCart"></div>
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
  
//const [beanResponse, setBeanResponse] = useState({})
  
  // fetch from back end




export default App;
