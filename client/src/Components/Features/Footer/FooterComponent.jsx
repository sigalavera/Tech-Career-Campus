import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="container">
                <div className="aboutUsClass">
                    <div className="about">
                        <div className="title">
                            <h4>About</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet, <br></br> consectetur adipisicing elit. Et delectus
                    laudantium aspernatur perspiciatis<br></br> cupiditate, eaque labore
                    nihil excepturi
                     </p>
                    </div>
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
                <div className="quick-link">
                    <div className="title">
                        <h4>Quick Link</h4>
                    </div>
                    <ul className="quick-links">
                        <li>
                            <Link to={"/news"}>חדשות</Link>
                        </li>
                        <li>
                            <Link to={"/events"}>אירועים</Link>
                        </li>
                        <li>
                            <Link to={"/forum"}>פורום</Link>
                        </li>
                        <li>
                            <Link to={"/my-course"}>הקורס שלי</Link>
                        </li>
                        <li>
                            <Link to={"/class-schedule"}>לו"ז כיתות</Link>
                        </li>
                    </ul>

                </div>
                <div className="contactUsClass">
                    <div className="title">
                        <h4>Contact</h4>
                    </div>
                    <ul>
                        <li> 08-3738000 </li>
                        <li> info@tech-career.org </li>
                        <li> בת שבע 3, מתחם טלרד, לוד </li>
                    </ul>
                </div>
            </div>
            <div className="footer">
                <span>david talala</span>

            </div>
        </div>
    )
}
export default Footer;
