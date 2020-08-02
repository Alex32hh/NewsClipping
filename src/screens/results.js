import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation, Redirect } from "react-router-dom";

export default function results() {

    const pub = ['nova publiicacao', 'Angola novo ministro das telecomi=unicacoes', 'sucesso', 'enviado', 'loangaminidade', 'nova publiicacao', 'Angola novo ministro das telecomi=unicacoes', 'sucesso', 'enviado', 'loangaminidade', 'nova publiicacao', 'Angola novo ministro das telecomi=unicacoes', 'sucesso', 'enviado', 'loangaminidade'];
    const items = [];

    for (const [index, value] of pub.entries()) {
        items.push(
            <div className='news-box'>
                <div style={{ background: "url(https://lh3.googleusercontent.com/ZtJiWgDaXWdRf4zl7tR6z1MG84cCer9ugRftVSbtnaEpNbHs0m8KP2Aq9FisiwMjp1VQESn9we-qUVJW0zvU)" }} >
                </div>
                <div className='news-box-description' key={index}>
                    <div className='news-box-description-title'><Link style={{ color: 'inherit', textDecoration: 'inherit' }}><div className="link-hover-manifexto">{value}</div></Link></div>
                    <div>E-global noticias em português - Há 1 hora</div>
                    <div> Um relatório do Afrobarometer, liderado pela Ovilongwa – Estudos de Opinião Pública, concluiu que a Polícia Nacional de Angola é a instituição mais corrupta ...</div>
                </div>
            </div>
        )
    }

    return (
        <aside>
            <div className='content-title'>Cerca de {items.length} resultados (0,00 segundos)</div>
            {items}
        </aside>
            
    );
}
