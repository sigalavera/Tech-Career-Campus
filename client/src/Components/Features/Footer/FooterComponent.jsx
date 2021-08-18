<Footer />
import React from 'react';

function Footer() {
    return (
        <div className="footerDiv">
            <div className="aboutUsClass">
                <h4> מי אנחנו </h4>
                <ul>
                    <li>
                        <a href="https://www.tech-career.org/" target="_blank" rel="noopener noreferrer"> אתר טק קריירה </a>
                        <i class="fas fa-tv"></i>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/tech.career/" target="_blank" rel="noopener noreferrer"> פייסבוק טק קריירה </a>
                        <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/school/techcareerisrael/" target="_blank" rel="noopener noreferrer"> לינקדין טק קריירה </a>
                        <i class="fab fa-linkedin-in"></i>
                    </li>
                </ul>
            </div>
            <div className="contactUsClass">
                <h4> צור קשר</h4>
                <ul>
                    <li> 08-3738000 </li>
                    <li> info@tech-career.org </li>
                    <li> בת שבע 3, מתחם טלרד, לוד </li>
                </ul>
            </div>
        </div>
    )
    
}
export default Footer;
