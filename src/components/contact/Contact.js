import React from 'react'
import './Contact.css'
import Typewriter from 'typewriter-effect'
// import './mail.scss'

function Contact() {
    return (
        <section id='contact'>
            <h2 className="title">Get In Touch</h2>
            <p> Open to opportunities in software development</p>
            <div className="hello">
                    <a className='email-link btn' href='mailto:hong.b918@gmail.com'>Say Hello!</a>
            </div>
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

            {/* <div class="letter-image">
                <div class="animated-mail">
                    <div class="back-fold"></div>
                    <div class="letter">
                        <div class="letter-border"></div>
                        <div class="letter-title"></div>
                        <div class="letter-context"></div>
                        <div class="letter-stamp">
                            <div class="letter-stamp-inner"></div>
                        </div>
                    </div>
                    <div class="top-fold"></div>
                    <div class="body"></div>
                    <div class="left-fold"></div>
                </div>
                <div class="shadow"></div>
            </div> */}


        </section>
    )
}

export default Contact