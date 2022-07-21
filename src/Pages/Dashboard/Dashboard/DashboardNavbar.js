import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/FieldX.png'

const DashboardNavbar = () => {
    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="flex-1 pl-20">
                    <Link to='/'>
                        <img src={logo} alt="FieldX" />
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" >
                            <div>
                                <img className='w-9 avater rounded-full' src="https://placeimg.com/80/80/people" alt='User' />
                            </div>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end ml-2">
                        <label tabIndex="0" className="cursor-pointer">
                            <div className='flex items-center text-accent'>
                                <span className='mx-1'>Henry</span>
                                <AiOutlineDown  className='mx-1'/>
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default DashboardNavbar;