import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { TbCertificate } from 'react-icons/tb'
import { AiFillFolderOpen } from 'react-icons/ai'

function about() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='hong'/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Experience</h5>
                            <small>Software Engineer Fellow at General Assembly</small>
                        </article>

                        <article className='about__card'>
                            <a href='#portfolio'>
                                <AiFillFolderOpen className='about__icon' />
                            </a>
                            <h5>Projects</h5>
                            <small>Completed Projects</small>
                        </article>
                    </div>

                    <p>Lorem Ipsum</p>

                    <a href='#contact' className='btn btn-primary'>Let's chat
                    </a>
                </div>
            </div>
        </section>
    )
}

export default about