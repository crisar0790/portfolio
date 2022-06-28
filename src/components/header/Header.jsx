import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Cristian Ariel Achetoni</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <dir className='me'>
          <img src={ME} alt="profile" />
        </dir>
        <a href='#contact' className='scroll__down'>Ir abajo</a>
      </div>
    </header>
  )
}

export default Header