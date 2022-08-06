import React from 'react';
import pic from '../../../assets/images/ee.png'
// import pic2 from '../../assets/images/oo.png'
const Footer = () => {
    return (
        <div>
            {/* <footer className="footer footer-center p-10 bg-gradient-to-r from-lime-200 to-gray-700 text-base-100 rounded mt-40">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>

                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by FOOTBALANCE Technology, BD</p>
                </div>
            </footer> */}


            <footer className="footer footer-center p-10 bg-gradient-to-r from-lime-200 to-gray-700 text-base-100 rounded mt-40">
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-36 mx-auto'>

                    <div>
                        <img className='mx-auto w-28' src={pic} alt="logo" />
                        <p className='font-extrabold text-gray-700 text-xl'>Foot Balance Technology BD</p>
                        <p className='font-bold text-gray-700'>208-9 Outer Circular Road</p>
                        <p className='font-bold text-gray-700'>Mogbazar</p>
                        <p className='font-bold text-gray-700'>Dhaka-1217</p>
                    </div>

                    <div className=''>
                        <p className='font-bold text-white text-2xl border-b-2 border-white'>Contact Us</p>
                        <p className='font-extrabold text-gray-700 text-lg pt-2'>Phone Number</p>
                        <p className='font-bold text-white text-sm'>01712345678</p>
                        <p className='font-bold text-white text-sm'>01712345678</p>
                        <p className='font-extrabold text-gray-700 text-lg'>Email Address</p>
                        <p className='font-bold text-white text-sm'>www.footbalance.com</p>
                    </div>


                    <div className='mx-auto'>
                        <p className='font-bold text-white text-2xl border-b-2 border-primary'>Available Hours</p>
                        <p className='pt-3 font-bold'>Saturday - Thursday   <span className='pl-3 font-semibold'>(09:00am - 09:00pm)</span></p>
                        <p className=' font-bold'>Friday   <span className='pl-3 font-semibold'>(09:00am - 05:00pm)</span></p>
                        <div className='grid grid-cols-3 p-5 mx-auto pl-16'>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='bg-base text-gray-700 p-3 text-sm font-bold text-center'>
                <p >Copyright © 2022 - All right reserved by FOOTBALANCE Technology, BD</p>
                <p>Designed & Developed by ... </p>
            </div>
        </div>
    );
};

export default Footer;