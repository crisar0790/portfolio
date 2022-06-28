import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Cristian Ariel Achetoni</a>
      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about">Acerca de mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Cristian Ariel Achetoni. Todos lo</small>
      </div>
    </footer>
  )
}

export default Footer