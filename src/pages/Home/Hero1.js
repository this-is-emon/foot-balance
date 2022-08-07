import React from 'react';
import walk1 from '../../assets/images/walk1.jpg';
import footer from '../../assets/images/footer.png'

const Hero1 = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <div class="hero min-h-screen bg-gradient-to-r from-gray-200 bg-opacity-50">
                {/* <svg className='mb-80 hidden sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6b7280" fill-opacity="1" d="M0,320L34.3,277.3C68.6,235,137,149,206,133.3C274.3,117,343,171,411,181.3C480,192,549,160,617,128C685.7,96,754,64,823,80C891.4,96,960,160,1029,176C1097.1,192,1166,160,1234,154.7C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
                {/* <svg className='mb-80 hidden sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4d7c0f" fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,80C320,43,400,21,480,53.3C560,85,640,171,720,218.7C800,267,880,277,960,240C1040,203,1120,117,1200,80C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
                <div class="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-top"
                        data-aos-duration="30000"
                        data-aos-delay="800" className='mx-auto md:mr-2' src={walk1} alt='walking pic' class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-16 md:mr-4 mx-auto'>
                        <p data-aos="fade-right"
                            data-aos-duration="30000"
                            data-aos-delay="1000"
                            className="mb-5 font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400 border-b-4 border-gray-500 "
                        >We can help you walk again!!</p>
                        <p data-aos="fade-left"
                            data-aos-duration="30000"
                            data-aos-delay="1200" class="py-6 font-bold text-2xl text-gray-700">Did you know Foot Balance Technology can help you fight your walking inability better? </p>
                        <p data-aos="fade-right"
                            data-aos-duration="30000"
                            data-aos-delay="1300" class="py-6 text-lime-700 text-xl">It is possible to enable people who have lower limb deformities caused by any accident, disease or even congenital conditions to be back on their feet.
                            Foot Balance Technology is a specialized professional Pedorthic service provider based in Sydney, Australia. We provide care for feet & ankles through proper footwear for men, women, and children.
                        </p>
                    </div>
                </div>
                <svg className='mt-40 hidden sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d9f99d" fill-opacity="0.6" d="M0,64L40,58.7C80,53,160,43,240,74.7C320,107,400,181,480,218.7C560,256,640,256,720,224C800,192,880,128,960,85.3C1040,43,1120,21,1200,48C1280,75,1360,149,1400,186.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
    );
};

export default Hero1;