import React, { Component } from 'react';
import Home from './screens/home';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import instagram from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import youtube from './images/youtube.png';
import facebook from './images/facebook.png';
import logo from './images/Logotipo_Manifexto2018.png';
import Sino from './images/bell.png';
import user from './images/user.png';

function App() {
  return (

    <Router>
      <div className="App">

        <div className='topBar'>
          <div className="barcontent">
            <div className='leftside'>
              <Link> <item>Contactos</item></Link>
              <Link> <item>Contactos</item></Link>
              <Link> <item>Contactos</item></Link>
              <Link> <item>Contactos</item></Link>
            </div>
            <div className='rightside'>
              <Link to="1"> <item><img src={whatsapp} /></item></Link>
              <Link to="2"> <item><img src={youtube} /></item></Link>
              <Link to="3"> <item><img src={facebook} /></item></Link>
              <Link to="4"> <item><img src={instagram} /></item></Link>
            </div>
          </div>
        </div>

        <header>
          <nav>
            <div className='divide'>
              <img src={logo} className='image-logo' />
            </div>
            <div className='divide'>

            </div>
            <div className='divide'>
              <div className='images-items'>
               
                
                <div className='btn-alertas'>
                  <Link>
                  <img src={Sino} />
                    <label>Alertas</label>
                  </Link>
                </div>

                
                <div className='btn-conta'>
                  <Link>
                  <img src={user} />
                    <label>Perfil</label>
                  </Link>
                </div>


              </div>
            </div>
          </nav>
        </header>

        <div className='container'>
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
