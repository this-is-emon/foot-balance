import React from 'react';
import pic1 from '../../assets/images/Screenshot_1.png';
import pic2 from '../../assets/images/Screenshot_2.png';
import pic3 from '../../assets/images/Screenshot_3.png';
import footer from '../../assets/images/ddot.png'

const Review = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <p className="mb-5 pt-10 text-center mt-14 font-bold text-4xl text-gray-700"
            >Customer Reviews</p>
            <div class="carousel">
                <div id="item1" class="carousel-item w-full ">
                    <img src={pic1} alt='review' class="w-100 h-80 mx-auto rounded-2xl" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={pic2} alt='review' class="w-100 h-80 mx-auto rounded-2xl" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={pic3} alt='review' class="w-100 h-80 mx-auto rounded-2xl" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs bg-primary">1</a>
                <a href="#item2" class="btn btn-xs bg-primary">2</a>
                <a href="#item3" class="btn btn-xs bg-primary">3</a>
            </div>

        </div>
    );
};

export default Review;