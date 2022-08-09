import React from 'react'

import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App