import React from 'react';
import phone from '../../assets/images/banner/Central phone 2.png'
import { HiOutlineCube } from 'react-icons/hi'
const ProductFetures = () => {
    return (
        <section className='lg:mt-96 xl:mt-36'>
            <div className='text-center'>
                <p className='text-primary font-medium'>Products Features</p>
                <h2 className="text-5xl font-extrabold">Make more out of your data</h2>
            </div>
            <section className='flex items-center mt-40 px-14 gap-14'>
                <section className='flex-grow '>
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
                    <div className='rounded-full bg-primary lg:w-[400px] lg:h-[400px] xl:w-[548px] xl:h-[548px]'></div>
                    <img className='absolute lg:w-3/5 lg:-top-12 lg:left-20 xl:-top-20 xl:left-24 rounded-xl' style={{boxShadow:'0px 1px 100px #052C68'}} src={phone} alt="" />
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