import React from 'react';

const CreateArea = () => {
    return (
        <section>
            <div className="w-[475px] bg-base-100 shadow-xl rounded-xl  mx-auto">
                <div className="p-12">
                    <div>
                        <label className='label'>
                            <span className="label-text">Region</span>
                        </label>
                        <select className="bg-base-100 select rounded-xl w-full border-2 border-[#CED4DA] outline-none" style={{ outline: 'none', padding: '8px', color: '#4E4E4E', fontWeight: '400' }}>
                            <option defaultValue="Select Region">Select Region</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Tangail">Tangail</option>
                            <option value="Rajhshahi">Rajhshahi</option>
                        </select>

                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <input type="text" placeholder="Type Area" className="outline-none border-[#CED4DA] border-2 rounded-xl p-2 w-full" />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-neutral text-white mt-14 py-3 px-5 rounded-xl">Add Area</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateArea;