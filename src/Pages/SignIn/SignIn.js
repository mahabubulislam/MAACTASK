import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const SignIn = () => {
    return (
        <section style={{ backgroundImage: `url("https://i.ibb.co/VtVnhpf/blue-abstract-layered-stripes-background-2.png")` }}>
            <Navbar/>
            <div className='px-36 py-28'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center my-4">Welcome Back!</h2>
                        <p className='text-center text-accent mb-12'>Please login to your account</p>
                        <form className='flex flex-col w-3/4 mx-auto'>
                            <label className="block" htmlFor='email'>
                                <span className='text-accent block mb-px' >Enter Your Email</span>
                                <input type="email" name='email' id='email' className='outline-none border-b-2 border-info w-full' />
                            </label>
                            <label className="block" htmlFor='password'>
                                <span className='text-accent block mb-px mt-6' >Password</span>
                                <input type="password" name='password' id='password' className='outline-none border-b-2 border-info w-full' autoComplete='off' />
                            </label>

                            <input type="submit" value="Sign In" className='bg-primary text-white font-bold w-full mt-12 py-6 px-56  rounded-lg' />
                            <label className="block mt-16 mb-20">
                                <p className="block text-center font-medium my-2">Don't have any account? <Link to='/register' className='text-primary'>Sign Up</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default SignIn;