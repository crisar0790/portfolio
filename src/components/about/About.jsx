import React from 'react';
import './About.css';
import ME from '../../assets/me2.png';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Acerca de mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>11 meses</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>7 completos</small>
            </article>
          </div>
          <p>
            Desarrollador Fullstack. 
            La realización de proyectos individuales y en equipo culminados recientemente incrementan en mí el interés y 
            la pasión por la tecnología. Tengo la capacidad de realizar proyectos web teniendo siempre en mente que sean escalables y 
            moduralizables para así poder construir en equipo.
          </p>
          <p>
            Soy una persona que se orienta a resultados, curioso, buenas habilidades de comunicación, 
            pensamiento analítico, habilidad para resolver problemas, una gran capacidad para aprender nuevas herramientas y 
            tecnologías, responsable, honesto, optimista, flexible y comprometido. Siempre predispuesto a colaborar, aprender y 
            seguir mejorando como profesional.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About