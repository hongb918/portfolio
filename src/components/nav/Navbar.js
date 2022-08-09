import React, { useState } from 'react'
import './navbar.css'
import { BiHomeSmile } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'
import { GrContact } from 'react-icons/gr'
import { GiSkills } from 'react-icons/gi'

function Navbar() {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <BiHomeSmile />
            </a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <BiUserCircle />
            </a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
                <GiSkills />
            </a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
                < AiOutlineProject />
            </a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <GrContact />
            </a>
        </nav>

    )
}

export default Navbar