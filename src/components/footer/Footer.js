import React from 'react'
import './footer.css'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'


function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>
                HONG BUI
            </a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://github.com/hongb918' target='github'><SiGithub /></a>
                <a href='https://www.linkedin.com/in/hong-bui918/' target='linkedin'><SiLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy;Designed & Built by Hong Bui</small>
            </div>

            <small className='credit'>
                <a target="hkey" href="https://icons8.com/icon/xWl53D3Z2TQm/h-key">H Key</a> icon by <a target="icon" href="https://icons8.com">Icons8</a>
            </small>
        </footer>
    )
}

export default Footer