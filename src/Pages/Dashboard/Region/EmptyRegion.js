import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/dashboard/emptydata.png'
const EmptyRegion = () => {
    return (
        <section className='flex justify-center items-center h-screen bg-[#E6E6E6]'>
            <div className='text-center text-[#9FA3A6]'>
                <img src={img} alt="" />
                <p className='mt-10'>Currently you have no Data.</p>
                <p>For next step first <Link to="/create-region" className='text-primary'>Create Region</Link></p>
            </div>
        </section>
    );
};

export default EmptyRegion;