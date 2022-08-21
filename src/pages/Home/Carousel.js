import React from 'react';
// import pic1 from '../../../src/assets/images/green.png';
import pic2 from '../../../src/assets/images/ortho3.png';
import pic3 from '../../../src/assets/images/ortho27.png';

const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={pic2} alt='slider1 pic' class="w-full lg:mt-16" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={pic3} alt='slider2 pic' class="w-full lg:mt-16" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;