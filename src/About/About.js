import React from 'react';
import './about.css';
import aboutImg from '../Assets/IMG_2314.jpg';
export default function About(){
    return (
        <section className="about" id="about">
            <div className="section-title">
                <h2><span>About</span> Us</h2>
            </div>
            <div className="section-content">
                <div className="section-img">
                    <img src={aboutImg} alt="" width="450px"/>
                </div>
                <div className="section-information">
                    <h2>Every Day Is A Chance To Become Your Best Self</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo recusandae magnam vel explicabo reiciendis tempora perspiciatis esse. Inventore molestiae, voluptas voluptatem quas nisi accusamus doloribus. Ea, quod. Itaque!
                    </p>
                    <div className="info-grid">
                        <div className="info">
                            <span><i className="fa-solid fa-check"></i>Mind & Body</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, accusantium hic eum voluptatum facere eveniet</p>
                        </div>
                        <div className="info">
                            <span><i className="fa-solid fa-check"></i>Healthy Life</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, accusantium hic eum voluptatum facere eveniet</p>
                        </div>
                        <div className="info">
                            <span><i className="fa-solid fa-check"></i>Meal Plans</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, accusantium hic eum voluptatum facere eveniet</p>
                        </div>
                        <div className="info">
                            <span><i className="fa-solid fa-check"></i>Workout Plans</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, accusantium hic eum voluptatum facere eveniet</p>
                        </div>
                    </div>
                    <a href="#" className="about-btn">Read More...</a>
                </div>
            </div>
        </section>
    )
}