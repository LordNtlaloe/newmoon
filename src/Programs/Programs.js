import React from 'react';
import program1 from '../Assets/IMG-20230102-WA0000.jpg';
import program2 from '../Assets/IMG-20230102-WA0005.jpg';
import program3 from '../Assets/IMG_2314.jpg';
import program4 from '../Assets/IMG_2330.jpg';
import './programs.css';

export default function Programs() {
    return (
        <section className="programs" id="programs">
            <div className="section-title">
                <h2>Gym Programs</h2>
            </div>
            <div className="programs-content">
                <div className="content-grid">
                    <div className="content">
                        <img src={program1} alt="" className="program-img"/>
                        <div className="info">
                            <i className="fa-solid fa-dumbbell"></i><br/>
                            <span>Body Building</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus ullam! Magni a ipsum quidem!</p>
                            <a href="#" className="about-btn">Read More...</a>
                        </div>
                        <img src={program2} alt="" className="program-img"/>
                    </div>
                    <div className="content">
                        <div className="info">
                            <i className="fa-solid fa-heart-circle-bolt"></i><br/>
                            <span>Weight Loss</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus ullam! Magni a ipsum quidem!</p>
                            <a href="#" className="about-btn">Read More...</a>
                        </div>
                        <img src={program2} alt="" className="program-img"/>
                        <div className="info">
                            <i className="fa-solid fa-utensils"></i><br/>
                            <span>Healthy Meal Plans</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus ullam! Magni a ipsum quidem!</p>
                            <a href="#" className="about-btn">Read More...</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src={program1} alt="" className="program-img"/>
                        <div className="info">
                            <i className="fa-solid fa-person-dress"></i><br/>
                            <span>Booty Builder Program</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus ullam! Magni a ipsum quidem!</p>
                            <a href="#" className="about-btn">Read More...</a>
                        </div>
                        <img src={program2} alt="" className="program-img"/>
                    </div>
                </div>
                <div className="pricing">
                    <div className="pricing-intro">
                        <h3>Pricing Plan</h3>
                        <p>Finding The Right Prices And Plan For You</p>
                        <span>Membership Fee <span className="fee">M50.00</span></span>
                    </div>
                    <div className="prices-grid">
                        <div className="prices">
                            <h3>Basic Plan</h3>
                            <p>M <span>300</span>/month</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Personal Trainer
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Progress Monitoring
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Scheduled Training Regiment
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Basic Nutrition and Lifestyle Training
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-xmark"></i>
                                    Meal Plan
                                </li>
                            </ul>
                        </div>
                        <div className="prices">
                            <h3>Basic Plan</h3>
                            <p>M <span>300</span>/month</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Personal Trainer
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Progress Monitoring
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Scheduled Training Regiment
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Basic Nutrition and Lifestyle Training
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-xmark"></i>
                                    Meal Plan
                                </li>
                            </ul>
                        </div>
                        <div className="prices">
                            <h3>Basic Plan</h3>
                            <p>M <span>300</span>/month</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Personal Trainer
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Progress Monitoring
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Scheduled Training Regiment
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Basic Nutrition and Lifestyle Training
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-xmark"></i>
                                    Meal Plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}