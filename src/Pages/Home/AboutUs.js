import React from 'react';
import background from '../../assets/images/others/Group 34028.png'
import selling from '../../assets/images/others/Top Selling Routes 1.png'
import preOrder from '../../assets/images/others/Pre order vs delivery 1.png'
import avg from '../../assets/images/others/Avg 1.png'
import user from '../../assets/images/others/Ellipse 1.png'
import monitor from '../../assets/images/icons/monitor-mobbile.png'
import users from '../../assets/images/icons/people.png'
import client from '../../assets/images/icons/user.png'
import cup from '../../assets/images/icons/cup.png'
const AboutUs = () => {
    return (
        <section className='px-14 mt-60 bg-cover' style={{ backgroundImage: `url("https://i.ibb.co/zxYp4Cw/blue-abstract-layered-stripes-background-1.png")` }}>
            <section className='flex justify-between items-center'>
                <section className='relative h-[486px]'>
                    <div className='px-20 py-24 rounded-2xl bg-[#F1F6FF]'>
                        <img src={background} alt="" />
                    </div>
                    <img className='absolute -top-20 left-16' src={preOrder} alt="" />
                    <img className='absolute -bottom-20 -left-16' src={selling} alt="" />
                    <img className='absolute bottom-20 -right-10' src={avg} alt="" />
                </section>
                <section className='w-[586px]'>
                    <p className='text-primary font-medium mb-5'>About us</p>
                    <h3 className='text-4xl font-extrabold mb-10'>A dedicated solution for startups and enterprises</h3>
                    <p className='text-accent mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="divider mb-10"></div>
                    <div className='flex justify-between'>
                        <img src={user} alt="" />
                        <div>
                            <p className='text-accent w-3/4'>"Fieldx is for teams that care about their product growth."</p>
                            <h5 className="text-xl font-bold">CEO, FieldX</h5>
                        </div>
                    </div>
                </section>
            </section>
            <section className='mt-40 grid grid-cols-4 gap-36'>
                <div className='flex flex-col items-center'>
                    <img src={monitor} alt="" />
                    <h3 className="text-4xl text-primary font-extrabold my-4">10+</h3>
                    <p className="text-accent">Platforms Created</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={users} alt="" />
                    <h3 className="text-4xl text-primary font-extrabold my-4">1559+</h3>
                    <p className="text-accent">Total Users</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={client} alt="" />
                    <h3 className="text-4xl text-primary font-extrabold my-4">10+</h3>
                    <p className="text-accent">Total Clients</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={cup} alt="" />
                    <h3 className="text-4xl text-primary font-extrabold my-4">300 Days</h3>
                    <p className="text-accent">In Operations</p>
                </div>
            </section>
        </section>
    );
};

export default AboutUs;