import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
    const date = new Date()
    
    return (
        <footer className='flex justify-between py-5 px-6 bg-[#F2F2F5] text-[#74788D]'>
            <p className='uppercase'>{date.getFullYear()} &copy; MAAC</p>
            <div className='flex'>
                <Link className='mx-2' to='/'>Contact us</Link>
                <Link className='mx-2' to='/'>Privacy Policy</Link>
                <Link className='mx-2' to='/'>Terms and Condition</Link>
            </div>
        </footer>
    );
};

export default DashboardFooter;