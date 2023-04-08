import React from 'react';
import './Hero.css';
import img  from "../header-bike.png";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='sub-hero'>
                <h1 className='title'>More Speed <br /> <span>More Adventures</span></h1>
                <p>It is an best bike ever i seen.It is affordable sport bike and with strong body. <br /> Perfect in look. They have little bit high maintenance. But, this bike <br /> i most like and say to every one if you want to budgetable <br /> sport bike then you buy honda cbr250.</p>
                <button className='hero-button'>Live Demo</button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Hero;