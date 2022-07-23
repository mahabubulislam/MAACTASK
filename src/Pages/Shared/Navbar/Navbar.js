import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/FieldX.png'

const Navbar = () => {
    const token = localStorage.getItem('token')
    return (
        <nav className='flex justify-between items-center px-28 py-5 border-b border-primary border-opacity-25'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="FieldX" />
                </Link>
            </div>
            <div>
                {
                    token ? <Link to='/dashboard' className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2' style={{ boxShadow: '2px 2px  0px 0px' }}>Dashboard</Link>
                        :
                        <>
                            <Link to='/signin' className='bg-primary text-white px-6 py-3 rounded-lg mx-2'>Login</Link>
                            <Link to='/register' className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2' style={{ boxShadow: '2px 2px  0px 0px' }}>Registration</Link>
                        </>
                }

            </div>
        </nav>
    );
};

export default Navbar;