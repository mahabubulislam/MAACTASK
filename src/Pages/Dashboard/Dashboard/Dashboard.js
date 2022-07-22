import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import DashboardFooter from './DashboardFooter';
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    console.log(location.pathname==='/dashboard/create-region');
    return (
        <section>
            <DashboardNavbar />
            <section className='flex justify-between'>
                <section className={`w-96 ${open && 'w-20'} duration-700 ease-in-out`}>
                    <div className={`flex justify-between items-center relative p-6`}>
                        <p className={`text-accent uppercase font-semibold `}>Menu</p>
                        <div onClick={() => setOpen(!open)} className={`rounded-full w-6 p-1 bg-secondary text-white ${!open && 'absolute -right-3'} ease-in-out duration-700`}>
                            <AiOutlineLeft />
                        </div>
                    </div>
                    <div className='text-accent'>
                        <p className='flex ml-5'><GrLocation className='mr-5' /> Geo Information</p>
                        <nav className='ml-14 flex flex-col mt-4'>
                            <NavLink to='area' className='mt-3 '>Area</NavLink>
                            <NavLink to='region' className='mt-3 '>Region</NavLink>
                        </nav>
                    </div>
                </section>
                <section className='bg-success w-full h-screen flex flex-col justify-between'>
                    <section>
                        <Outlet />
                    </section>
                    <DashboardFooter />
                </section>
            </section>

        </section>
    );
};

export default Dashboard;