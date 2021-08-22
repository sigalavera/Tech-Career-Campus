import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="contactUsClass">
                <h4> צור קשר</h4>
                <ul>
                    <li> 08-3738000 </li>
                    <li> info@tech-career.org </li>
                    <li> בת שבע 3, מתחם טלרד, לוד </li>
                </ul>
            </div>
            <div className="aboutUsClass">
                
                {/* <h4> מי אנחנו </h4> */}
                
                <ul>
                    <li>
                        <a href="https://www.tech-career.org/" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-tv"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/tech.career/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/school/techcareerisrael/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCVNITxGQ4M_Ze5hxv36B40Q" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
                
            </div>
            
        </div>
    )
}
export default Footer;
