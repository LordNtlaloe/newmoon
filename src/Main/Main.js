import React from 'react';
import './main.css';
import Header from '../Header/Header';

export default function Main(){
    return(
        <main className="main container" id="home">
            <div className="content">
                <Header/>
                <div className='text'>
                    <h1>Growing In Health<br/> & Fitness Together</h1>
                    <span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus porro pariatur, corrupti similique voluptatem nobis, deleniti consequuntur quaerat ex in reiciendis? Perspiciatis, nam molestias reprehenderit delectus, sit dolores magnam incidunt illum sint mollitia ratione quasi assumenda asperiores exercitationem enim impedit ullam. Incidunt optio modi velit omnis nesciunt, nam delectus.
                        </p>
                    </span>
                    <a href="" className="start-btn">Get Started</a>    
                </div>
            </div>
        </main>
    )
}
