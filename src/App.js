import React from 'react'

import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
// import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App