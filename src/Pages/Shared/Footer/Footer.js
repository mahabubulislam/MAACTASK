import React from 'react';
import logo from '../../../assets/images/logo/FieldX White.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center pt-24 pb-16 bg-secondary'>
            <img src={logo} alt="" />
            <p className='text-center mt-8 text-white w-[516px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
            <div className='flex mt-8'>
                <Link to='/' className='bg-white hover:bg-primary hover:text-white w-10 p-3 mx-10 rounded-full'><FaTwitter /></Link>
                <Link to='/' className='bg-white hover:bg-primary hover:text-white w-10 p-3 mx-10 rounded-full'><FaLinkedinIn /></Link>
                <Link to='/' className='bg-white hover:bg-primary hover:text-white w-10 p-3 mx-10 rounded-full'><FaFacebookF /></Link>
            </div>
                <div className="h-px w-4/5 mt-20 bg-[#0D3166]"></div>    
                <p className='text-white font-bold mt-10'>&copy; All rights reserve by <span className='text-red-600'>MAAC</span></p>
        </footer>
    );
};

export default Footer;