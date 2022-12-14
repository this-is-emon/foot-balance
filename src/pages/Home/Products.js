import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
// import footer from '../../assets/images/footer.png'
import diagram from '../../assets/images/ortho5.png';

const Products = () => {
    const { t } = useTranslation();
    return (
        <div >
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="zoom-in"
                        data-aos-duration="30000"
                        data-aos-delay="800" className='mx-auto sm:m-5 md:m-2 rounded-lg shadow-2xl w-80' src={diagram} alt='walking pic' />
                    <div className='md:mr-4 text-center'>
                        <p data-aos="fade-right"
                            data-aos-duration="30000"
                            data-aos-delay="1000"
                            className="mb-5 font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 border-b-4 max-w-sm mx-auto text-center border-gray-500 "
                        >{t("ourProductsTitle")}</p>
                        <p data-aos="fade-right"
                            data-aos-duration="30000"
                            data-aos-delay="1300" class="py-6 text-lime-700 text-xl sm:m-5"
                        >{t("ourProductsParagraph1")}
                        </p>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="30000"
                            data-aos-delay="1300"
                            class="py-6 text-lime-700 text-xl sm:m-5"
                        >{t("ourProductsParagraph2")}
                        </p>
                        <NavLink
                            data-aos="fade-left"
                            data-aos-duration="30000"
                            data-aos-delay="800"
                            className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 font-bold' to='/products'
                            >{t("outProductsLink")}
                            </NavLink>
                    </div>
                </div>
                <svg className='mt-40 hidden sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6b7280" fill-opacity="0.05" d="M0,64L40,58.7C80,53,160,43,240,74.7C320,107,400,181,480,218.7C560,256,640,256,720,224C800,192,880,128,960,85.3C1040,43,1120,21,1200,48C1280,75,1360,149,1400,186.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
    );
};

export default Products;