import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
    return (
        <section  className='bg-cover' style={{ backgroundImage: `url("https://i.ibb.co/VtVnhpf/blue-abstract-layered-stripes-background-2.png")` }}>
            <Navbar/>
            <div  className='px-36 py-28'>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center my-4">Create Account</h2>
                        <p className='text-center text-accent mb-12'>Fill in the details below to create an account</p>
                        <form className='flex flex-col w-3/4 mx-auto'>
                            <label className="block" htmlFor='name'>
                                <span className='text-accent block mb-px' >Enter Your Full Name</span>
                                <input type="text" name='name' id='name' className='outline-none border-b-2 border-info w-full' />
                            </label>
                            <label className="block" htmlFor='email'>
                                <span className='text-accent block mb-px mt-6' >Enter Email</span>
                                <input type="email" name='email' id='email' className='outline-none border-b-2 border-info w-full' />
                            </label>
                            <label className="block" htmlFor='id'>
                                <span className='text-accent block mb-px mt-6' >Your ID</span>
                                <input type="text" name='id' id='id' className='outline-none border-b-2 border-info  w-full' />
                            </label>
                            <label className="block" htmlFor='phone'>
                                <span className='text-accent block mb-px mt-6' >Your Mobile Number</span>
                                <input type="tel" name='phone' id='phone' className='outline-none border-b-2 border-info w-full' />
                            </label>
                            <label className="block" htmlFor='new-password'>
                                <span className='text-accent block mb-px mt-6' >Password</span>
                                <input type="password" name='new-password' id='new-password' className='outline-none border-b-2 border-info w-full' autoComplete='off' />
                            </label>
                            <label className="block" htmlFor='confirm-password'>
                                <span className='text-accent block mb-px mt-6' >Confirm Password</span>
                                <input type="password" name='confirm-password' id='confirm-password' className='outline-none border-b-2 border-info  w-full' autoComplete='off' />
                            </label>
                            <label className="block" htmlFor='select'>
                                <span className='text-accent block mb-px mt-6' >Select Your Role</span>
                                <select className="bg-base-100 py-3 border-b-2 border-info outline-none w-full">
                                    <option>HUB</option>
                                    <option>Greedo</option>
                                </select>
                            </label>
                            <label className="cursor-pointer flex items-center" htmlFor='checkbox'>
                                <input type="checkbox" id='checkbox' className="checkbox" />
                                <span className='ml-4'>I read and agree to the <Link to="/terms" className='text-primary'>Terms & Condition</Link></span>
                            </label>
                            <input type="submit" value="Create Account" className='bg-primary text-white font-bold w-full mt-12 py-6 px-56  rounded-lg' />
                            <label className="block mt-16 mb-20">
                                <p className="block text-center font-medium my-2">Already have an account? <Link to='/signin' className='text-primary'>Sign In</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Register;