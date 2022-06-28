import React from 'react';
import './Service.css';
import {BiCheck} from 'react-icons/bi';

function Service() {
  return (
    <section id='services'>
      <h5>Qué ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon' />
                <p>Crear y probar aplicaciones para sitios web.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Maquetado de la interface HTML y CSS.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Aplicar diseño interactivo con Javascript.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Aplicar Optimización de recursos.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Desplegar la aplicación web en el servidor.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Realizar pruebas de funcionamiento y mejora.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Mantener y actualizar el sitio web.</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Service