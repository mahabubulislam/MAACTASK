import React from 'react';
import tablet from '../../assets/images/banner/tablet 1.png'
import phone from '../../assets/images/banner/phone 1.png'
const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-6xl font-bold">Analytics that transform your product inside-out</h1>
                        <div className='mt-12'>
                            <button className='bg-primary text-white px-12 py-3 rounded-lg mx-2'>Request for Demo</button>
                            <button className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2' style={{ boxShadow: '2px 2px  0px 0px' }}>Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto relative'>
                <img className='w-3/4 -mt-24 mx-auto' src={tablet} alt="" />
                <img className='absolute top-52 right-72' src={phone} alt="" />
            </div>
        </section>
    );
};

export default Banner;