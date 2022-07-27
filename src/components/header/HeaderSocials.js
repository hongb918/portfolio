import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { DiGithubBadge } from 'react-icons/di'
import { DiHeroku } from 'react-icons/di'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='#linkedin' target='_blank'>< FiLinkedin /></a>
            <a href='#github' target='_blank'>< DiGithubBadge /></a>
            <a href='#heroku' target='_blank'>< DiHeroku /></a>
        </div>
    )
}

export default HeaderSocials