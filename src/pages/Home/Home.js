import React from 'react';
import Awards from '../Awards/Awards';
import Carousel from './Carousel';
import Hero1 from './Hero1';
import Products from './Products';
import Review from './Review';
import Youtube from './Youtube';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Hero1></Hero1>
            <Youtube></Youtube>
            <Products></Products>
            <Awards></Awards>
            <Review></Review>
        </div>
    );
};

export default Home;