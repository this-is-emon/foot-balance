import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../../assets/images/footer.png';
import pic2 from '../../assets/images/ortho4.jpg';

const Youtube = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2' style={{ background: `url(${pic})`, backgroundSize: 'cover' }}>

            {/* ------- youtube section------- */}

            <div className='pl=80'>
                <div class="hero min-h-screen">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <p
                                data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="600"
                                class="py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 text-xl"> Watch the video and hear an inspiring story!</p>
                            <iframe
                                data-aos="zoom-in-right"
                                data-aos-duration="30000"
                                data-aos-delay="800"
                                className='mx-auto pb-5 w-full h-full border-4 border-primary rounded-xl' src="https://www.youtube.com/embed/1uXbBusjUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1000"
                                class="text-3xl font-bold">Case studies
                                of our clients</h1>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1200"
                                class="py-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400">STORIES THAT INSPIRE…</p>
                            <p
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1400"
                                class="py-4 font-semibold">There is nothing harder than not being able to be on one’s feet. There are thousands of people suffering from difficulties in the lower limbs around the world. Over the years we have helped many people gain back their mobility and have put them back on track in their lives.</p>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1600"
                                class="py-2 font-semibold"> If you or anyone you know needs help managing or regaining their ability to walk at any point in their life, let us help. Spread the word so that everyone knows that we are here and we can help people walk again.</p>
                        </div>
                    </div>
                </div>

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/1uXbBusjUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>


            {/* -----------OUR SERVICEs--------------------------- */}

            <div className='pl=80'>
                <div class="hero min-h-screen">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <p
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="600"
                                class="py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 text-4xl">Our Services</p>
                            <img data-aos="zoom-in-left"
                                data-aos-duration="30000"
                                data-aos-delay="800"
                                className='w-60 rounded-xl border-t-4 border-b-4 border-primary mx-auto' src={pic2} alt="shoe pic" />
                            {/* <h1 data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1000"
                                class="text-3xl font-bold pt-4 pb-4">Let us help you</h1>
                            <p
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1200"
                                class="py-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400">GIVE IT A TRY...</p> */}
                            <p data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1400"
                                class="py-4 font-semibold">At Foot Balance Technology we manage and treat various conditions of the foot, ankle, and lower limb extremities that require fitting, fabrication, and adjustments of pedorthic devices/footwear. </p>
                            <p data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1600"
                                class="py-2 font-semibold"> We make or modify footwear to assist clients to recover as much mobility as possible.</p>

                            <NavLink
                                data-aos="fade-top"
                                data-aos-duration="30000"
                                data-aos-delay="1600"
                                className=' bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400  font-bold text-xl' to='/services'>SEE MORE...</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;