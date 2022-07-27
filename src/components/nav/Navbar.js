import React, { useState } from 'react'
import './navbar.css'
import { BiHomeSmile } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'
import { GrContact } from 'react-icons/gr'


function Navbar() {
    const [activeNav, setActiveNav] = useState('#home')


    return (
        <nav>
            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
                <BiHomeSmile /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
            < BiUserCircle /></a>
            <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>< AiOutlineProject /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact/></a>
        </nav>

    )
}

export default Navbar