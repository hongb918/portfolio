import React from "react";
import Resume from "../../assets/Hong Bui_Resume.pdf";

function CTA() {
    return (
        <div className="cta">
            <a href={Resume} className="btn"> Download resume</a>
            <a href="contact" className="btn btn-primary"> Let's talk</a>
    </div>
    );
}

export default CTA;
