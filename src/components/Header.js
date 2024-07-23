// src/components/Header.js

import React from 'react';
import '../App.css'; // Asegúrate de tener los estilos en un archivo separado
import logo from '../assets/logo1.png'; 

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="SimplyHom Logo" />
    </div>
    <nav className="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Quienes Somos</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;