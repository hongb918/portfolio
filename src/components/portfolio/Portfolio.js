import React from 'react'
import './portfolio.css'
import dinerdash from '../../assets/restaurant.jpeg'
import everyvolt from '../../assets/project3.jpeg'
import thue from '../../assets/project4.jpeg'


function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={dinerdash} alt='italian-food' />
                    </div>
                    <h3>Diner-Dash</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/every-volt" className="btn">Github</a>
                        <a href="https://heroku.com/every-volt" className="btn btn-primary" target="everyvolt">
                            Demo
                        </a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={everyvolt} alt='electric-car' />
                    </div>
                    <h3>Every Volt</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/every-volt" className="btn">Github</a>
                        <a href="https://heroku.com/every-volt" className="btn btn-primary" target="everyvolt">
                            Demo
                        </a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={thue} alt='furniture-items' />
                    </div>
                    <h3>Thue</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/every-volt" className="btn">Github</a>
                        <a href="https://heroku.com/every-volt" className="btn btn-primary" target="everyvolt">
                            Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio