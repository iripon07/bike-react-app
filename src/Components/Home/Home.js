import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Hero from '../Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CustomerReviews></CustomerReviews>
            <button className='review-button'>
            <Link to={`/review`}>See All Reviews</Link>
            </button>
        </div>
    );
};

export default Home;