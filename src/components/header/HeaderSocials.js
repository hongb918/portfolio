import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { DiGithubBadge } from 'react-icons/di'
import {SiMinutemailer } from 'react-icons/si'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/hong-bui918/' target='linkedin' className='header__socials-icon'>< FiLinkedin size={'25'}/></a>
            <a href='https://github.com/hongb918' target='github' className='header__socials-icon'>< DiGithubBadge size={'25'} /></a>
            <a href='mailto:hongb918@gmail.com' className='header__socials-icon'>< SiMinutemailer size={'25'} /></a>
        </div>
    )
}

export default HeaderSocials