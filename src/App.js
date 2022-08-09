import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
// import HashLoader from "react-spinners/HashLoader";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import './Loader.css'
function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);


    return (
        <div>

            {loading ? (
                <div className="loader-container">

                    <PacmanLoader
                        // css={override}
                        size={25}
                        color={'#bc6c25'}
                        loading={loading}
                        speedMultiplier={2}
                        className='loader'
                    />
                </div>
            )
                :
                <div>
                    <Header />
                    <Navbar />
                    <About />
                    <Experience />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
            }

        </div>
    );
}
export default App;
