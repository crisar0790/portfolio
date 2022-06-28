import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function HeaderSocial() {
        return (
            <div className='header__socials'>
                <a href="https://www.linkedin.com/in/cristian-ariel-achetoni-developer/" target='_blank'><BsLinkedin /></a>
                <a href="https://github.com/crisar0790" target='_blanck'><FaGithub /></a>
            </div>
        )
    }

export default HeaderSocial