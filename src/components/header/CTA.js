import React from "react";
import { Link } from 'react-router-dom';
import Resume from "../../assets/Hong Bui_Resume.pdf";
import Contact from "../contact/Contact"
function CTA() {
    return (
        <div className="cta">
            <a href={Resume} className="btn" target="_blank"> Download resume</a>
            <a href="#contact" className="btn btn-primary"> Let's talk</a>
    </div>
    );
}

export default CTA;
