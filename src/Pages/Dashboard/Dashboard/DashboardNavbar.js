import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/FieldX.png'

const DashboardNavbar = () => {
    const navigate = useNavigate()
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
                                <span className='mx-1'>{localStorage.getItem('user')}</span>
                                <AiOutlineDown className='mx-1' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li> <Link to='create-region'> Create Region </Link></li>
                            <li> <Link to='create-area'> Create Area </Link></li>
                            <li><label htmlFor="logoutModal">Sign Out</label></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="logoutModal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <h3 className="font-bold text-lg">Sign out?</h3>
                        <p className="py-4">Are you sure you want to sign out?</p>
                        <div className="flex justify-around items-center">
                            <label onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('user')
                                navigate('/') 
                            }} htmlFor="logoutModal" className="btn btn-ghost">Yes</label>
                            <label htmlFor="logoutModal" className="btn btn-ghost"><span className='text-primary'>Cancel</span></label>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default DashboardNavbar;