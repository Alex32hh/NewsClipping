import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './screens/home';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        
        <div className='container'>

          <header><nav></nav></header>
          <Route exact path="/" component={Home} />
          <Route path="/corpo" component={corpo} />
          <Route path="/contact" component={contact} />
          <aside></aside>
          <footer></footer>
          
        </div>

      </div>
    </Router>

  );
}

// <li><a className='item'>  <Link className='item' to="/contact">contact</Link></a></li> * /}

const corpo = () => (
  <div className='content'>
    body
  </div>
);

const contact = () => (
  <div className='content'>
    contactos
  </div>
);

export default App;
