import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
const Register = () => {
    const [agree, setAgree] = useState(false)
    const [error, setError] = useState('')
    const [passError, setPassError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token, setToken]= useState('')

    const onSubmit = data => {
        if (agree) {
            if (data.password === data.passwordConfirm) {
                fetch('https://staging-api.erpxbd.com/api/v1/users/signup', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data?.token)
                        setToken(data?.token)
                        setPassError(data.message)
                    })
                setPassError('')
            }
        }
        else {
            setError('You must agree our Terms & Conditions')
        }
    };
    if(token){
        return <Navigate to="/dashboard"></Navigate>
    }
    return (
        <section className='bg-cover' style={{ backgroundImage: `url("https://i.ibb.co/VtVnhpf/blue-abstract-layered-stripes-background-2.png")` }}>
            <Navbar />
            <div className='px-36 py-28'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center my-4">Create Account</h2>
                        <p className='text-center text-accent mb-12'>Fill in the details below to create an account</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/4 mx-auto'>
                            <label className="block" >
                                <span className='text-accent block mb-px' >Enter Your Full Name</span>
                                <input type="text" {...register("name", { required: true })} className='outline-none border-b-2 border-info w-full' />
                                {errors.name?.type === 'required' && <small className='block text-red-600'>Name is required</small>}
                            </label>
                            <label className="block" >
                                <span className='text-accent block mb-px mt-6' >Enter Email</span>
                                <input type="email" {...register("email", { required: true })} className='outline-none border-b-2 border-info w-full' />
                                {errors.email?.type === 'required' && <small className='block text-red-600'>Email is required</small>}
                            </label>
                            <label className="block">
                                <span className='text-accent block mb-px mt-6' >Your ID</span>
                                <input type="text" {...register("employeeId", { required: true })} className='outline-none border-b-2 border-info  w-full' />
                                {errors.employeeId?.type === 'required' && <small className='block text-red-600'>Employee Id is required</small>}
                            </label>
                            <label className="block" >
                                <span className='text-accent block mb-px mt-6' >Your Mobile Number</span>
                                <input type="tel"  {...register("phoneNumber", { required: true })} className='outline-none border-b-2 border-info w-full' />
                                {errors.phoneNumber?.type === 'required' && <small className='block text-red-600'>Mobile Number is required</small>}
                            </label>
                            <label className="block" >
                                <span className='text-accent block mb-px mt-6' >Password</span>
                                <input type="password"  {...register("password", { required: true, minLength: 8 })} className='outline-none border-b-2 border-info w-full' autoComplete='off' />
                                {errors.password?.type === 'required' && <small className='block text-red-600'>Password is required</small>}
                                {errors.password?.type === 'minLength' && <small className='block text-red-600'>Password must be 8 characters</small>}
                            </label>
                            <label className="block" >
                                <span className='text-accent block mb-px mt-6' >Confirm Password</span>
                                <input type="password"  {...register("passwordConfirm", { required: true, minLength: 8 })} className='outline-none border-b-2 border-info  w-full' autoComplete='off' />
                                {errors.passwordConfirm?.type === 'required' && <small className='block text-red-600'>Confirm Password is required</small>}
                                {errors.passwordConfirm?.type === 'minLength' && <small className='block text-red-600'>Password must be 8 characters</small>}
                            </label>
                            <label className="block" >
                                <span className='text-accent block mb-px mt-6' >Select Your Role</span>
                                <select  {...register("role", { required: true })} className="bg-base-100 py-3 border-b-2 border-info outline-none w-full">
                                    <option value="HUB">HUB</option>
                                </select>
                            </label>
                            <label className="cursor-pointer flex items-center" >
                                <input onClick={() => {
                                    setAgree(!agree)
                                    setError('')
                                }} type="checkbox" className="checkbox" />
                                <span className='ml-4'>I read and agree to the <Link to="/terms" className='text-primary'>Terms & Condition</Link></span>
                            </label>
                            {<small className='block text-red-600'>{passError}</small>}
                            {<small className='block text-red-600'>{error}</small>}
                            <input type="submit" value="Create Account" className='bg-primary text-white font-bold w-full mt-12 py-6 px-56 cursor-pointer rounded-lg' />
                            <label className="block mt-16 mb-20">
                                <p className="block text-center font-medium my-2">Already have an account? <Link to='/signin' className='text-primary'>Sign In</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Register;