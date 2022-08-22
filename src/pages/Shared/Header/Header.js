import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import pic from '../../../assets/images/t.png';

const Header = () => {

    const { t,i18n } = useTranslation();

    /*-------- Language Switcher code ----------------------*/
    //get() method to read a cookie from the storage and accepts the name of the cookie. 
    const currentLocale = Cookies.get("i18next") || "en";
    //changing the state of the language
    const [language, setLanguage] = useState(currentLocale);
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-lime-200 to-gray-700 text-base-100 lg:fixed lg:top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-b from-lime-200 to-gray-700  rounded-box w-52">
                            <li className='pr-2'><NavLink className='text-white' to='/'>{t("navbar.home")}</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/service'>{t("navbar.services")}</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/products'>{t("navbar.products")}</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/about'>{t("navbar.aboutUs")}</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/blogs'>{t("navbar.blogs")}</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/contact'>{t("navbar.contactUs")}</NavLink></li>

                        </ul>
                    </div>
                    <div className="navbar-start">
                        <a href="###" className="normal-case text-xl text-gray-600"> <img className='pl-3' src={pic} alt="foot logo" /></a>
                    </div>
                    {/* <div className="navbar-start">
                        <a className="normal-case text-xl text-gray-600"> <img className='lg:mx-auto pr-10' src={pic} alt="foot logo" /> <span className='font-bold'>Foot Balance Technology BD</span></a>
                    </div> */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='pr-2'><NavLink className='text-white' to='/'>{t("navbar.home")}</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/services'>{t("navbar.services")}</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/products'>{t("navbar.products")}</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/about'>{t("navbar.aboutUs")}</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/blogs'>{t("navbar.blogs")}</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/contact'>{t("navbar.contactUs")}</NavLink></li>
                    </ul>
                </div>
                <div>
                    {/* "handleChangeLocale" function just above the return statement */}
                    <select id="countries" className="btn btn-ghost" onChange={handleChangeLocale} value={language}>
                        <option className='text-white bg-primary' value="en">English</option>
                        <option className='text-white bg-primary' value="bn">বাংলা</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;