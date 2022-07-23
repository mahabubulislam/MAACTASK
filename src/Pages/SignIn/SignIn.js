import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const [token, setToken] = useState('')

    const onSubmit = data => {
      
        fetch('https://staging-api.erpxbd.com/api/v1/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                setToken(data.token)
                localStorage.setItem('token', data?.token)
                localStorage.setItem('user', data?.user?.name)
                setError(data.message)
            })
    }
    if (token) {
        return <Navigate to="/dashboard"></Navigate>
    }

    return (
        <section style={{ backgroundImage: `url("https://i.ibb.co/VtVnhpf/blue-abstract-layered-stripes-background-2.png")` }}>
            <Navbar />
            <div className='px-36 py-28'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center my-4">Welcome Back!</h2>
                        <p className='text-center text-accent mb-12'>Please login to your account</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/4 mx-auto'>
                            <label className="block" >
                                <span className='text-accent block mb-px' >Enter Your Employee Id</span>
                                <input type="text" {...register("employeeId", { required: true })} className='outline-none border-b-2 border-info w-full' />
                                {errors.employeeId?.type === 'required' && <small className='block text-red-600'>Employee Id  is required</small>}
                            </label>
                            <label className="block">
                                <span className='text-accent block mb-px mt-6' >Password</span>
                                <input type="password" {...register("password", { required: true, minLength: 8 })} className='outline-none border-b-2 border-info w-full' autoComplete='off' />
                                {errors.password?.type === 'required' && <small className='block text-red-600'>Password is required</small>}
                                {errors.password?.type === 'minLength' && <small className='block text-red-600'>Password must be 8 characters</small>}
                                {error && <small className='block text-red-600'>{error}</small>}
                            </label>

                            <input type="submit" value="Sign In" className='bg-primary text-white font-bold w-full mt-12 py-6 px-56 cursor-pointer rounded-lg' />
                            <label className="block mt-16 mb-20">
                                <p className="block text-center font-medium my-2">Don't have any account? <Link to='/register' className='text-primary'>Sign Up</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default SignIn;