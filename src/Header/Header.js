import './header.css';
import  logo  from "../Assets/logo.png";
import {useState} from 'react';
import React from 'react';

export default function Header(){

    const[Toggle, showMenu] = useState(false);

    return(
        <header className="header">
            <nav className="nav container">
                <a href="" className="nav-logo">
                    <img src={logo} alt="" />
                    <h3>New Moon Gym + </h3>
                </a>
                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                                <i className="uil uil-estate nav-icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="about" className="nav-link">
                                <i className="uil uil-user nav-icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#programs" className="nav-link">
                                <i className="uil uil-file nav-icon"></i>
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">
                                <i className="uil uil-briefcase-alt nav-icon"></i>
                                Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonials" className="nav-link">
                                <i className="uil uil-scenery nav-icon"></i>
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-message nav-icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}