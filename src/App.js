import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './screens/home';
import results from './screens/results';
import './App.css';
import './mainpage.css';
import instagram from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import youtube from './images/youtube.png';
import facebook from './images/facebook.png';
import logo from './images/Logotipo_Manifexto2018.png';
import Sino from './images/bell.png';
import user from './images/user.png';
import search from './images/search.png';

import print from './images/print.png';
import plusSignal from './images/plus2.png';
import settings from './images/gear2.png';
import share from './images/share.png';

import { Button, Alert } from 'react-bootstrap';
export default function App() {

  const path = window.location.pathname;


  return (
    <Router>
      <div className="App">
        {path == "/" ? Home() :
          <>
            <header>
              <div className='topBar'>
                <div className="barcontent">
                  <div className='leftside'>
                    <Link> <item>Contactos</item></Link>
                    <Link> <item>Contactos</item></Link>
                    <Link> <item>Contactos</item></Link>
                    <Link> <item>Contactos</item></Link>
                  </div>

                  <div className='rightside'>
                    <Link to="1"> <item><img src={whatsapp} /></item> </Link>
                    <Link to="2"> <item><img src={youtube} /></item>  </Link>
                    <Link to="3"> <item><img src={facebook} /></item> </Link>
                    <Link to="4"> <item><img src={instagram} /></item></Link>
                  </div>

                </div>

              </div>

              <nav>
                <div className='divide'>
                  <img src={logo} className='image-logo' />
                </div>

                <div className='divide'>

                  <div className='center-box'>

                    <div className='center-top'>

                      <div></div>

                      <div>
                        <button>
                          <img src={search} />
                        </button>
                      </div>

                      <div>
                        <input type='text' placeholder="Pesquisar..." />
                      </div>

                      <div></div>
                    </div>

                    <div className='center-bottom'>
                      <div></div>

                      <div className='catego-items'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }}><div className='link-hover-manifexto'> <img src={plusSignal} /> Criar Alerta</div></Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }}><div className='link-hover-manifexto'><img src={settings} /> Opções</div></Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }}><div className='link-hover-manifexto'><img src={share} /> Partilhar</div></Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }}><div className='link-hover-manifexto'><img src={print} /> Imprimir</div></Link>
                      </div>

                      <div></div>
                    </div>

                  </div>

                </div>

                <div className='divide'>
                  <div className='images-items'>


                    <div className='btn-alertas'>
                      <Link to='/alertas'>
                        <img src={Sino} />
                        <label>Alertas</label>
                      </Link>
                    </div>


                    <div className='btn-conta'>
                      <Link to='/perfil'>
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
              <Route path="/alertas" component={corpo} />
              <Route path="/perfil" component={contact} />
              <Route path="/results" component={results} />
              <footer></footer>

            </div>
          </>
        }

      </div>
    </Router>
  );
}

// <li><a className='item'>  <Link className='item' to="/contact">contact</Link></a></li> * /}

const corpo = () => (
  <div className='content'>
    alertas
  </div>
);

const contact = () => (
  <div className='content'>
    perfil
  </div>
);
