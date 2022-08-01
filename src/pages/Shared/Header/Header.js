import React from 'react';
import pic from '../../../assets/images/03.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-lime-200 to-gray-700 text-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden text-base-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-b from-lime-200 to-gray-700  rounded-box w-52">
                            <li><a>About Us</a></li>
                            <li><a>Services</a></li>
                            <li><a>Case Study</a></li>
                            <li><a>Products</a></li>
                            <li><a>Refer A Patient</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-gray-600"> <img className='pr-2' src={pic} alt="foot logo" /> FootBalance</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>About Us</a></li>
                        <li><a>Services</a></li>
                        <li><a>Case Study</a></li>
                        <li><a>Products</a></li>
                        <li><a>Refer A Patient</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;