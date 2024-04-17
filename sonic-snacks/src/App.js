//import React, { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
     <div className="app">
      <SearchBar />
      <Background />
      </div>
  
  );
}

export default App;
