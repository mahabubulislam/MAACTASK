import React from 'react';

const FAQ = () => {
    return (
        <section className='bg-primary mt-10' style={{ backgroundImage: `url('https://i.ibb.co/6D0ZHgL/ajscb-1.png')` }}>
            <div className='text-white text-center py-36 px-28'>
                <p >Common Questions</p>
                <h5 className='text-5xl font-bold mt-4'>Frequently asked questions</h5>
            </div>
            <div className='flex justify-center items-center gap-8 px-28'>
                <div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What kind of data can I see in FieldX?
                        </div>
                        <div className="collapse-content">
                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Does Bizzy read my customers' data?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam consequatur alias recusandae, voluptatem eos voluptates ad ipsa?</p>
                        </div>
                    </div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What's your refund and cancellation policy?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt eius laboriosam at iusto reprehenderit, quibusdam aspernatur id.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How do you take payments?
                        </div>
                        <div className="collapse-content">
                            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Can I also track website analytics on fieldX?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam consequatur alias recusandae, voluptatem eos voluptates ad ipsa?</p>
                        </div>
                    </div>
                    <div className="collapse  collapse-arrow bg-white rounded-box px-5 mb-8">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What makes Bizzy different from other analytics tools?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt eius laboriosam at iusto reprehenderit, quibusdam aspernatur id.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;