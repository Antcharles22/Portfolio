import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

export const Nav = () => {
    return (
        
        <div className="nav-container">
            <div className="nav">
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="portfillo" smooth={true} duration={500}>portfillo</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>

    );
};


