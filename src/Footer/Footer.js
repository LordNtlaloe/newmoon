import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="top-footer">
                <div className="links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                           <a href="#home">Home</a>
                        </li>
                        <li>
                           <a href="#about">About</a>
                        </li>
                        <li>
                           <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#team">Team</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="hours">
                    <h2>Opening Hours</h2>
                    <ul>
                        <li>Mon: <span>05:00 - 20:00</span></li>
                        <li>Tue: <span>05:00 - 20:00</span></li>
                        <li>Wed: <span>05:00 - 20:00</span></li>
                        <li>Thu: <span>05:00 - 20:00</span></li>
                        <li>Fri: <span>05:00 - 20:00</span></li>
                        <li>Sat: <span>05:00 - 20:00</span></li>
                        <li>Sun: <span>Closed</span></li>
                    </ul>
                </div>
                <div className="reach-out">
                    <h2>Reach Us</h2>
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i> Facebook</li>
                        <li><i className="fa-brands fa-twitter"></i> Twitter</li>
                        <li><i className="fa-brands fa-instagram"></i> Instagram</li>
                        <li><i className="fa-brands fa-whatsapp"></i> Whatsapp</li>
                        <li><i className="fa-solid fa-location-dot"></i> Ha Pita, Mapoleseng</li>
                        <li><i className="fa-solid fa-phone"></i> Call</li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                <p>Created By <a href=""> Teboho Ntlaloe</a> &#8482; &#169; 2023</p>
            </div>
        </footer>
    )
}