import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtcpu1e', 'template_4by63hm', form.current, 'jqunyVZASj9v563eM');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Pongámonos en contacto</h5>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="malito:cristian.achetoni@gmail.com">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/542604694828">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <a href="https://m.me/cris.sariel/">Enviar un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre...' required />
          <input type="email" name='email' placeholder='Email...' required />
          <textarea name="message" rows="7" placeholder='Mensaje...' required ></textarea>
          <button type='submit' className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact