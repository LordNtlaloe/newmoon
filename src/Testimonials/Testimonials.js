import React from "react";
import './testimonials.css';
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper";


export default function Testimonials() {
    return (
        <section className="tesimonials section container" id="testimonials">
            <div className="section-title">
                <h2>Testimonials</h2>     
            </div>
            <Swiper className="testimonials-container mySwiper" slidesPerView={2} loop={true} grabCursor={true} 
                spaceBetween={24} autoplay={{ delay: 1500, disableOnInteraction: false }} pagination={{ clickable: true }} 
                breakpoints={{ 360: { slidesPerView: 1 }, 480: { slidesPerView: 1 }, 576: { slidesPerView: 1 }, 786: { slidesPerView: 1}}} 
                modules={ [Pagination, Autoplay] }>
                {
                Data.map(({
                    id,
                    image,
                    title,
                    description,
                    program
                }) => {
                    return (
                        <SwiperSlide className="testimonials-card" key={id}>
                            <p className="testimonial-desription"> {description}</p>
                            <div className="text">
                                <img src={image}className="testimonial-image"  alt=""/>
                                <div className="testimonial-name">
                                    {title}
                                    {program}
                                </div>
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </SwiperSlide>
                    )
                })
            } </Swiper>
        </section>
    )
}
