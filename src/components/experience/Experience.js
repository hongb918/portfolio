import React from 'react'
import './experience.css'
import { TiHtml5 } from 'react-icons/ti'
import { RiCss3Line } from 'react-icons/ri'
import { SiJavascript } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'


function Experience() {
    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <TiHtml5 className='experience__details-icon' />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <RiCss3Line className='experience__details-icon' />
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                                <h4>Javascript</h4>
                        </article>
                        <article className='experience__details'>
                            <FaBootstrap className='experience__details-icon' />
                            <h4>Bootstrap</h4>
                        </article>
                        <article className='experience__details'>
                            <FaReact className='experience__details-icon' />
                            <h4>React</h4>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <FaNode className='experience__details-icon' />
                                <h4>Node JS</h4>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb className='experience__details-icon' />
                            <h4>MongoDB</h4>
                        </article>
                        <article className='experience__details'>
                            <FaPython className='experience__details-icon' />
                            <h4>Python</h4>
                        </article>
                        <article className='experience__details'>
                            <SiDjango className='experience__details-icon' />
                            <h4>Django</h4>
                        </article>
                        <article className='experience__details'>
                            <SiPostgresql className='experience__details-icon' />
                            <h4>PostGreSQL</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience