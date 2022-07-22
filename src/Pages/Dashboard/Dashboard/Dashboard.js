import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { Outlet, useLocation } from 'react-router-dom';
import CustomActiveLink from './CustomActiveLink';
import DashboardFooter from './DashboardFooter';
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const b = location.pathname.split('/')
    const breadcrumbs = b[2].replace('-', ' ')
    
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
                        <nav className='pl-14 flex flex-col mt-4'>
                            <CustomActiveLink to='area-list'>Area</CustomActiveLink>
                            <CustomActiveLink to='region-list'>Region</CustomActiveLink>
                        </nav>
                    </div>
                </section>
                <section className='bg-success w-full  flex flex-col justify-between'>
                    <section>
                        <div className='p-10'>
                            <h3 className='text-secondary font-bold capitalize'>{breadcrumbs}</h3>
                            <div className='flex items-center'>
                                <span className='text-accent'>Geo</span>
                                <AiOutlineRight className='text-sm font-bold text-accent mx-2'/>
                                <span className='text-accent'>Geo List</span>
                                <AiOutlineRight className='text-sm font-bold text-accent mx-2'/>
                                <span className='capitalize text-primary'>{breadcrumbs}</span>
                            </div>
                        </div>
                        <Outlet />
                    </section>
                    <DashboardFooter />
                </section>
            </section>

        </section>
    );
};

export default Dashboard;