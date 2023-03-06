import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper";

import profile1 from '../Assets/Profile01.jpg';
import profile2 from '../Assets/Profile02.jpg';
import profile3 from '../Assets/Profile03.jpg';
import imgBefore1 from '../Assets/charlene-before.jpg';
import imgAfter1 from '../Assets/charlene-after.jpg';
import imgBefore2 from '../Assets/jade_socoby_before.jpg';
import imgAfter2 from '../Assets/jade_socoby_after.jpg';

export default function Testimonials(){
    return(
        <section className="testimonials" id="testimonials">
            <div className="section-title">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonial-content">
                <div className="text">
                    <h3>Testimonials</h3>
                    <p className="title">What Our Clients Have To Say</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur nesciunt quam ad ratione nulla alias veritatis maxime, illum sit rerum amet incidunt soluta hic!</p>
                    <a href="#" className="testimonial-button">Read More...</a>
                </div>
                <Swiper className="client-testimonials mySwiper" slidesPerView={1} loop={true} grabCursor={true} spaceBetween={24} pagination={{clickable: true}} breakpoints={{576: { slidesPerView: 1 }, 786: {slidesPerView: 2, spaceBetween: 48 }}} modules={[Pagination]}>
                    <SwiperSlide className="client">
                        <p className="comments">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam quasi impedit placeat doloribus consequuntur sapiente totam nisi ut assumenda, modi rem vitae quidem laudantium qui obcaecati maxime voluptatibus possimus.</p>
                        <div className="profile">
                            <div className="profile-info">
                                <img src={profile1} alt="" className="comment-img" />
                                <div className="profile-text">
                                    <h3>Mrs Someone</h3>
                                    <p>Weight Loss Theraphy</p>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className="client">
                        <p className="comments">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam quasi impedit placeat doloribus consequuntur sapiente totam nisi ut assumenda, modi rem vitae quidem laudantium qui obcaecati maxime voluptatibus possimus.</p>
                        <div className="profile">
                            <div className="profile-info">
                                <img src={profile2} alt="" className="comment-img" />
                                <div className="profile-text">
                                    <h3>Mrs Someone</h3>
                                    <p>Weight Loss Theraphy</p>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="client">
                        <p className="comments">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam quasi impedit placeat doloribus consequuntur sapiente totam nisi ut assumenda, modi rem vitae quidem laudantium qui obcaecati maxime voluptatibus possimus.</p>
                        <div className="profile">
                            <div className="profile-info">
                                <img src={profile3} alt="" className="comment-img" />
                                <div className="profile-text">
                                    <h3>Mrs Someone</h3>
                                    <p>Weight Loss Theraphy</p>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="client">
                        <p className="comments">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam quasi impedit placeat doloribus consequuntur sapiente totam nisi ut assumenda, modi rem vitae quidem laudantium qui obcaecati maxime voluptatibus possimus.</p>
                        <div className="profile">
                            <div className="profile-info">
                                <img src={profile1} alt="" className="comment-img" />
                                <div className="profile-text">
                                    <h3>Mrs Someone</h3>
                                    <p>Weight Loss Theraphy</p>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="progress">
                <div className="text">
                    <h3>Progress</h3>
                    <p className="title">Our Client Transformations</p>
                </div>
                <div className="transformations">
                    <div className="transformation">
                        <div className="before">
                            <h5 className="before-title">Before</h5>
                            <img src={imgBefore1} alt="" />
                        </div>
                        <div className="after">
                            <h5 className="after-title">After</h5>
                            <img src={imgAfter1} alt="" />
                        </div>
                    </div>
                    <div className="transformation">
                        <div className="before">
                            <h5 className="before-title">Before</h5>
                            <img src={imgBefore2} alt="" />
                        </div>
                        <div className="after">
                            <h5 className="after-title">After</h5>
                            <img src={imgAfter2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}