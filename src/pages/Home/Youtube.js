import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import pic from '../../assets/images/footer.png';
import pic2 from '../../assets/images/ortho4.jpg';

const Youtube = () => {
    const { t } = useTranslation();
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
                                class="py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 text-xl">{t("introVideoTitle")}</p>
                            <iframe

                                data-aos="zoom-in-right"
                                data-aos-duration="30000"
                                data-aos-delay="800"
                                className='mx-auto pb-5 w-full h-full border-4 border-primary rounded-xl' src="https://www.youtube.com/embed/1uXbBusjUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                            <h1
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1000"
                                class="text-3xl font-bold"
                            >{t("caseStudyTitle1")}
                            </h1>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1200"
                                class="py-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400"
                            >{t("caseStudyTitle2")}</p>
                            <p
                                data-aos="fade-left"
                                data-aos-duration="30000"
                                data-aos-delay="1400"
                                class="py-4 font-semibold"
                            >{t("caseStudyParagraph1")}
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1600"
                                class="py-2 font-semibold"
                            >{t("caseStudyParagraph2")} 
                            </p>
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

                                class="py-3 pb-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 text-4xl">Our Services</p>
                            <img data-aos="zoom-in-left"
                                data-aos-duration="30000"
                                data-aos-delay="800"
                                className='w-60 rounded-xl border-t-4 border-b-4 border-primary mx-auto' src={pic2} alt="shoe pic" />
                            <p data-aos="fade-right"
                                data-aos-duration="30000"
                                data-aos-delay="1400"
                                class="py-4 font-semibold pt-10">At Foot Balance Technology we manage and treat various conditions of the foot, ankle, and lower limb extremities that require fitting, fabrication, and adjustments of pedorthic devices/footwear. </p>
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