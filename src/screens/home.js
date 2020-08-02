import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Sino from '../images/bell.png';
import user from '../images/user.png';
import logo from '../images/Logotipo_Manifexto2018.png';
import search from '../images/search.png';
import { useForm } from 'react-hook-form';

export default function Home() {

    const [redirctTo, setRedirctTo] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        // alert(data.p);
        setRedirctTo(true)
    };

    // useEffect(() => {
    //     (() => {
    //         if (true) {
    //             setRedirctTo(true)
    //         }
    //         // return to another component
    //     })();
    // });

    if (redirctTo) {
        return (<Redirect to="/results" />);
    }
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
                        <form className='form-list' onSubmit={handleSubmit(onSubmit)}>
                            <div><button type="submit"> <img src={search} /> </button></div>
                            <div><input type="text" placeholder="Pesquisar..." name="p" ref={register({ required: true })} /></div>
                        </form>
                        <div></div>

                    </div>

                </div>


            </div>
        </Router>
    );

}
