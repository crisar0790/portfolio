import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/luxu2.png';
import IMG2 from '../../assets/poke2.png';
import IMG3 from '../../assets/book1.png';
import IMG4 from '../../assets/Mana.png';
import IMG5 from '../../assets/RICK_AND_MORTY.png';
import IMG6 from '../../assets/Cinema.png';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Manager" />
          </div>
          <h3>MANAGER</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/CHALLENGE-FULL-STACK" className='btn' target='_blanck'>GitHub</a>
            <a href="https://management-iota.vercel.app/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="RICK_AND_MORTY" />
          </div>
          <h3>RICK AND MORTY</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/rick-and-morty" className='btn' target='_blanck'>GitHub</a>
            <a href="https://crisar0790.github.io/rick-and-morty/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="cinema" />
          </div>
          <h3>CINEMA</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/cinema-app" className='btn' target='_blanck'>GitHub</a>
            <a href="https://cinema-rose.vercel.app/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Luxurent" />
          </div>
          <h3>LUXURENT - PF grupal</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/final-project-henry" className='btn' target='_blanck'>GitHub</a>
            <a href="https://vimeo.com/723585938" className='btn btn-primary' target='_blanck'>Video</a>
            <a href="https://final-project-henry.vercel.app/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Pokémon" />
          </div>
          <h3>Pokémon App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/Individual-Project---Henry-Pokemon" className='btn' target='_blanck'>GitHub</a>
            <a href="https://vimeo.com/724511981" className='btn btn-primary' target='_blanck'>Video</a>
            <a href="https://pokemon-app-eight-topaz.vercel.app/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Book" />
          </div>
          <h3>Book App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crisar0790/BookApp" className='btn' target='_blanck'>GitHub</a>
            <a href="https://book-app-plum.vercel.app/" className='btn btn-primary' target='_blanck'>Ir</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio