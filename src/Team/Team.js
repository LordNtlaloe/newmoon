import React from 'react';
import './team.css';
import trainer1 from "../Assets/IMG_2372.jpg";
import trainer2 from "../Assets/IMG-20230102-WA0006.jpg";
import trainer3 from "../Assets/IMG-20230102-WA0003.jpg";
import trainer4 from "../Assets/IMG-20230102-WA0004.jpg";


export default function Team() {
    return(
        <section className="team" id="team">
            <div className="section-title">
                <h2>Our Trainers</h2>
            </div>
            <div className="team-content">
                <div className="team-grid">
                    <div className="team-item">
                        <img src={trainer1} alt="" className="team-img"/>
                        <div className="team-info">
                            <span>Mohale</span>
                            <p>Personal Trainer</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <img src={trainer2} alt="" className="team-img"/>
                        <div className="team-info">
                            <span>Mohale</span>
                            <p>Personal Trainer</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <img src={trainer3} alt="" className="team-img"/>
                        <div className="team-info">
                            <span>Mohale</span>
                            <p>Personal Trainer</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <img src={trainer4} alt="" className="team-img"/>
                        <div className="team-info">
                            <span>Mohale</span>
                            <p>Personal Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}