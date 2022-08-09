import React from 'react'
import './portfolio.css'
import './portfolio.scss'
import dinerdash from '../../assets/restaurant.jpeg'
import everyvolt from '../../assets/project3.jpeg'
import thue from '../../assets/project4.jpeg'
import cat from '../../assets/cat.jpeg'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item card'>
                    <div className='portfolio__item-image img-cont'>
                        <span class='drop-down-window'>A memory game website that follows a traidional card memory game. The goal for users is to find the matching pairs whilte using the least amount of moves. Built using HTML, CSS, Javascript for DOM manipulation.  </span>
                        <img src={cat} alt='cat-with-yarn'/>
                    </div>
                    <h3>Remember Me</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/hongb918/memory-game" className="btn-portfolio" target="github">Github</a>
                        {/* <a href="https://fathomless-beach-35127.herokuapp.com/" className="btn-portfolio btn-portfolio-primary" target="diner-dash">
                            Demo
                        </a> */}
                    </div>
                </article>

                <article className='portfolio__item card'>
                    <div className='portfolio__item-image img-cont'>
                        <span class='drop-down-window'>A dining suggestion website for several different local cuisines throughout Dallas. This application allows users to edit and view information of the restaurants utilizing full Crud functionality. Built using Node.js, Express, Handlebars, and mongoDB + mongose.</span>
                        <img src={dinerdash} alt='italian-food' />
                    </div>
                    <h3>Fine to Dine</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/hongb918/Dash-Dine" className="btn-portfolio" target="github">Github</a>
                        <a href="https://fathomless-beach-35127.herokuapp.com/" className="btn-portfolio btn-portfolio-primary" target="diner-dash">
                            Demo
                        </a>
                    </div>
                </article>

                <article className='portfolio__item card'>
                    <div className='portfolio__item-image img-cont'>
                        <span class='drop-down-window'>A MERN full-stack web application that provides geographic electric vehicle charger data in Unite States. Users are able to find their neares charging locations in the area by input their coordinates. They can also create an account and get authenticated by using JWT with every logins.</span>
                        <img src={everyvolt} alt='electric-car' class />
                    </div>
                    <h3>Every Volt</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Every-Volt-App/front-end" className="btn-portfolio" target="github">Github</a>
                        <a href="https://every-volt-front.herokuapp.com/" className="btn-portfolio btn-portfolio-primary" target="everyvolt">
                            Demo
                        </a>
                    </div>
                </article>

                <article className='portfolio__item card'>
                    <div className='portfolio__item-image img-cont'>
                        <span class='drop-down-window'>An e-commerce web application built with Django/React that allows users to shop and view products, register/login to complete payment through PayPal. Site is equipped with admin panel on both frontend and backend for full CRUD functionality of users, orders, and products.
                        </span>
                        <img src={thue} alt='furniture-items' />
                    </div>
                    <h3>Thue</h3>
                    <div className='portfolio__item-cta'>
                        <a href="hhttps://github.com/hongb918/thue-frontend" className="btn-portfolio" target="github">Github</a>
                        {/* <a href="https://heroku.com/every-volt" className="btn-portfolio btn-portfolio-primary" target="thue">
                            Demo
                        </a> */}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio