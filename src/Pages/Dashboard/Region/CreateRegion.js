import React from 'react';

const CreateRegion = () => {
    return (
        <section>
            <div className="w-[475px] bg-base-100 shadow-xl rounded-xl mx-auto">
                <div className="p-12">
                    <div>
                        <label className="label">
                            <span className="label-text">Region</span>
                        </label>
                        <input type="text" placeholder="Type Region" className="outline-none border-[#CED4DA] border-2 rounded-xl p-3 w-full" />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-neutral text-white mt-14 py-3 px-5 rounded-xl">Add Region</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateRegion;