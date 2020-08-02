import React from 'react';
import { BrowserRouter as Router, Route, Link, useLocation, Redirect } from "react-router-dom";
import Sino from '../images/bell.png';
import user from '../images/user.png';
import logo from '../images/Logotipo_Manifexto2018.png';
import search from '../images/search.png';
export default function Home() {

    const form = {};





    return (
    <Router>
        <div className='main-login-Page'>
                <div className='top-item'>
                    <div></div>    
                    
                    <div>
                        <div className='alerta-icon'>
                            <Link>
                                <img src={Sino} />
                                <label className='link-hover-manifexto'>Alerta</label>
                            </Link>
                        </div>

                        <div className='perfil-icon'>
                            <Link>
                                <img src={user} />
                                <label className='link-hover-manifexto'>Perfil</label>
                            </Link>
                        </div>
                    </div>    

                </div>
                
                <div className='center-intem'>
                    <div>
                        <img src={logo} />
                    </div>
                    <div className='center-input-box'>
                        <div></div>
                        <div>
                            <button> <img src={search}/> </button>
                        </div>
                        <div>
                            <input type="text" placeholder="Pesquisar..." />
                        </div>
                        <div></div>
                    </div>

                </div>
                
        </div>
    </Router>
    );
}
