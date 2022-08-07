import React from 'react';
import pic from '../../assets/images/ddot.png'

const Youtube = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2' style={{ background: `url(${pic})`, backgroundSize: 'cover' }}>

            {/* ------- youtube section------- */}

            <div className='pl=80'>
                <div class="hero min-h-screen">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <p class="py-3 font-semibold text-grey-700 text-xl"> Watch the video and hear an inspiring story!</p>
                            <iframe className='mx-auto pb-5 lg:w-80 h-50 border-4 border-primary rounded-xl' src="https://www.youtube.com/embed/1uXbBusjUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h1 class="text-3xl font-bold">Case studies
                                of our clients</h1>
                            <p class="py-3 text-xl font-bold text-primary">STORIES THAT INSPIRE…</p>
                            <p class="py-4 font-semibold">There is nothing harder than not being able to be on one’s feet. There are thousands of people suffering from difficulties in the lower limbs around the world. Over the years we have helped many people gain back their mobility and have put them back on track in their lives.</p>
                            <p class="py-2 font-semibold"> If you or anyone you know needs help managing or regaining their ability to walk at any point in their life, let us help. Spread the word so that everyone knows that we are here and we can help people walk again.</p>
                        </div>
                    </div>
                </div>

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/1uXbBusjUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>


            {/* ----------review section---------------------------- */}

            <div className='mx-auto'>
                <h1 className='text-center font-bold text-3xl text-primary pb-10 pt-14'>Client Reviews</h1>
                <div class="h-96 carousel carousel-vertical rounded-box border-l-4 border-r-4 border-primary">
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;