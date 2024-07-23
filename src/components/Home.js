// src/components/Home.js

import React from 'react';
import '../App.css'; // Asegúrate de tener los estilos en un archivo separado
import imgAsistente from '../assets/verde.png';
import imgServicio from '../assets/morado.png';
import imgCuidador from '../assets/lima.png';
import imgConsejero from '../assets/pasto.png';

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-content">
      <div className="home-text">
        <h1>Nada como la tranquilidad de tu hogar</h1>
        <p>Simplificamos la administración de tu condominio, optimizando tus gastos, con tecnología y seguridad...</p>
        <p>Además, te ofrecemos servicios esenciales para tu hogar como nadie lo ha hecho antes.</p>
        <button className="btn">Quienes somos</button>
        <div className="contact-icons">
          <i className="fa fa-phone"></i>
          <i className="fa fa-envelope"></i>
          <i className="fa fa-whatsapp"></i>
        </div>
      </div>
      <div className="home-images">
        <div className="image-container">
          <img src={imgAsistente} alt="Tu mejor asistente" />
          <p>Tu mejor asistente</p>
        </div>
        <div className="image-container">
          <img src={imgServicio} alt="Tu mejor servicio" />
          <p>Tu mejor servicio</p>
        </div>
        <div className="image-container">
          <img src={imgCuidador} alt="Tu mejor cuidador" />
          <p>Tu mejor cuidador</p>
        </div>
        <div className="image-container">
          <img src={imgConsejero} alt="Tu mejor consejero" />
          <p>Tu mejor consejero</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;