import React from 'react'
import './Contact.css'
import Typewriter from 'typewriter-effect'

function Contact() {
    return (
        <section id='contact'>
            <h2 className="title">Get In Touch</h2>
            <p> I am looking for opportunities in front-end development.</p>
            <button className='btn'>
                <a className='email-link' href='mailto:hong.b918@gmail.com'>Say Hello</a>
            </button>
            <div className='typewriter'>

                <Typewriter
                    options={{
                        strings: ['hong.b918@gmail.com'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1500,
                        delay: 100,
                        deleteSpeed: 150,
                    }}
                />
            </div>
        </section>
    )
}

export default Contact