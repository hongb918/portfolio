import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/landscape1.jpeg'
import HeaderSocials from './HeaderSocials'


function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h3>Hello, my name is</h3>
                <div className="content">
                    <h2>Hong</h2>
                    <h2>Hong</h2>
                </div>
                <h5 className='text-light'>A software developer specializing in curating intentional design for user experience.</h5>
                <CTA />
                <HeaderSocials /> 
                <div className='me'>
                    <img src={me} alt='me'/>
                    <h4>Just so you know...I'm only an email away!</h4>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header