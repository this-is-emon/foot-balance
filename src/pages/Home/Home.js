import React from 'react';
import Services from '../Services/Services';
import Carousel from './Carousel';
import Hero1 from './Hero1';
import Products from './Products';
import Youtube from './Youtube';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Hero1></Hero1>
            <Youtube></Youtube>
            <Products></Products>
        </div>
    );
};

export default Home;