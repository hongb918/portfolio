import React from 'react'
import './footer.css'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'


function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>
                HONG
            </a>
            <ul className='permalinks'>
                <li><a href ='#'>Home</a></li>
                <li><a href ='#about'>About</a></li>
                <li><a href ='#experience'>Experience</a></li>
                <li><a href ='#portfolio'>Portfolio</a></li>
                <li><a href ='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://github.com/hongb918'><SiGithub/></a>
                <a href='https://www.linkedin.com/in/hong-bui918/'><SiLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy;Hong Bui</small>
            </div>
        </footer>
    )
}

export default Footer