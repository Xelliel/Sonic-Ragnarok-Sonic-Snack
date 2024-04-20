import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home'; // Import Home component
import Create from './Create';
import Cards from './Cards';
import ShoppingCart from './ShoppingCart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Render Home by default */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/Cards">
            <Cards />
          </Route>
        </div>
        {/* Render ShoppingCart outside Switch */}
        {showCart && <ShoppingCart />}
        {/* Link to toggle visibility of ShoppingCart */}
        <button onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Hide Cart' : 'Show Cart'}
        </button>
      </div>
    </Router>
  );
}

export default App;
