import React, { Component, useState, useEffect } from 'react';
import Home from './screens/home';
import serverPg from './backend/server';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, useLocation} from "react-router-dom";
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
import Popup from "reactjs-popup";
import { Button, Alert } from 'react-bootstrap';
export default function App() {

  var path;
  useEffect(() => {
     path = window.location.pathname;
  },[]);



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
              <Link to="1"> <item><img src={whatsapp} /></item> </Link>
              <Link to="2"> <item><img src={youtube} /></item>  </Link>
              <Link to="3"> <item><img src={facebook} /></item> </Link>
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
                    <Link>  <div> <img src={plusSignal} /> Criar Alerta</div></Link>
                    <Link><div><img src={settings} /> Opções</div></Link>
                    <Link> <div><img src={share} /> Partilhar</div></Link>
                    <Link><div><img src={print} /> Imprimir</div></Link>
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
          <Route path="/Server" component={serverPg} />
          
          <aside>

        <div className='news-box'>
              <div style={{background:"url(https://lh3.googleusercontent.com/ZtJiWgDaXWdRf4zl7tR6z1MG84cCer9ugRftVSbtnaEpNbHs0m8KP2Aq9FisiwMjp1VQESn9we-qUVJW0zvU)"}} >
              </div>
              <div className='news-box-description'>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </div>

          </aside>

          <footer></footer>

        </div>

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
