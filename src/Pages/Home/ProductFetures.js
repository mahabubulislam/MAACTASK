import React from 'react';
import phone from '../../assets/images/banner/Central phone 2.png'
import { HiOutlineCube } from 'react-icons/hi'
const ProductFetures = () => {
    return (
        <section className='mt-36'>
            <div className='text-center'>
                <p className='text-primary font-medium'>Products Features</p>
                <h2 className="text-5xl font-extrabold">Make more out of your data</h2>
            </div>
            <section className='flex mt-36 px-14 gap-14'>
                <section className='flex-grow'>
                    <div>
                        <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                            <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                        </div>
                        <h4 className='text-2xl font-extrabold'>Real-time analytics</h4>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className='mt-14'>
                        <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                            <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                        </div>
                        <h4 className='text-2xl font-extrabold'>Intuitive dashboard</h4>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className='mt-14'>
                        <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                            <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                        </div>
                        <h4 className='text-2xl font-extrabold'>Smart suggestions</h4>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                </section>
                <section className='relative ' style={{ flexGrow: 3}}>
                    <div className='rounded-full bg-primary w-[548px] h-[548px]'></div>
                    <img className='absolute -top-24 left-24 rounded-2xl shadow-2xl' src={phone} alt="" />
                </section>
                <section className='flex-grow'>
                    <div>
                        <div>
                            <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                                <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                            </div>
                            <h4 className='text-2xl font-extrabold'>Real-time analytics</h4>
                            <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                        </div>
                        <div className='mt-14'>
                            <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                                <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                            </div>
                            <h4 className='text-2xl font-extrabold'>Intuitive dashboard</h4>
                            <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                        </div>
                        <div className='mt-14'>
                            <div className='p-4 rounded-2xl shadow-2xl w-16 ml-auto'>
                                <HiOutlineCube className='text-center text-primary text-4xl font-extrabold' />
                            </div>
                            <h4 className='text-2xl font-extrabold'>Smart suggestions</h4>
                            <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default ProductFetures;