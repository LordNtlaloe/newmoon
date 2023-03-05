import React from 'react';
import './contact.css';

export default function Contact() {
    return(
        <section className="contact" id="contact">
            <div className="section-title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-info">
                <div className="socials">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                        <p>+266 6366 2280</p>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>+266 6366 2280</p>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Ha Pita, Mapoleseng</p>
                    </div>
                    <div className="icon">
                        <i className="fa-regular fa-clock"></i>
                        <p>Mon - Fri: 05:00 to 20:00 | Sat 06:00 to 12:00 | Sun: Closed</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Write To Us:</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit"></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}