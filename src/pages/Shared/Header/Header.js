import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import pic from '../../../assets/images/t.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-lime-200 to-gray-700 text-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-b from-lime-200 to-gray-700  rounded-box w-52">
                            <li className='pr-2'><NavLink className='text-white' to='/'>Home</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/service'>Services</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/products'>Products</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/about'>About Us</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/blogs'>Blogs</NavLink></li>
                            <li className='pr-2'><NavLink className='text-white' to='/contact'>Contact Us</NavLink></li>

                        </ul>
                    </div>
                    <div className="navbar-start">
                        <a className="normal-case text-xl text-gray-600"> <img className='pr-2 lg:mx-auto' src={pic} alt="foot logo" /> <span className='font-bold'>Foot Balance</span> <span className='font-bold'>Technology</span></a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='pr-2'><NavLink className='text-white' to='/'>Home</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/services'>Services</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/products'>Products</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/about'>About Us</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/blogs'>Blogs</NavLink></li>
                        <li className='pr-2'><NavLink className='text-white' to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div>
                    <select id="countries" className="btn btn-ghost">
                        <option className='text-white bg-primary' value="en">English</option>
                        <option className='text-white bg-primary' value="bn">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;