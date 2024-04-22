import React from 'react';
import '../styles/styles.css';

export default function Header(){
    return(
        <header className='header container'>
            <div className="logo">
                <img id='senai' src="https://www.tecnicosenai.com.br/wp-content/uploads/2020/11/logo-senai-azul2.png" alt="Logo" 
                 />
            </div>
        </header>
    )
}