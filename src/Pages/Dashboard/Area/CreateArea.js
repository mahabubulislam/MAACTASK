import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useRegions from '../../../hooks/useRegions';

const CreateArea = () => {
    const [regions] = useRegions()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, setError] = useState('')


    const onSubmit = data => {
        if (data.region === 'Select Region') {
            setError('Please select a Region')
        }
        else {
            setError('')
            fetch('https://staging-api.erpxbd.com/api/v1/area', {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.status === 'success') {
                        reset()
                    }
                })
        }
    }
    return (
        <section>
            <div className="w-[475px] bg-base-100 shadow-xl rounded-xl mb-28 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="p-12">
                    <div>
                        <label className='label'>
                            <span className="label-text">Region</span>
                        </label>
                        <select  {...register("region", { required: true })} className="bg-base-100 select rounded-xl w-full border-2 border-[#CED4DA] outline-none" style={{ outline: 'none', padding: '8px', color: '#4E4E4E', fontWeight: '400' }}>
                            <option >Select Region</option>
                            {regions?.map(region => <option key={region?._id} value={region?._id}>{region?.name}</option>)}
                        </select>
                            {error && <small className='block text-red-600'>{error}</small>}
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Type Area" className="outline-none border-[#CED4DA] border-2 rounded-xl p-2 w-full" />
                        {errors.name?.type === 'required' && <small className='block text-red-600'>Area Name is required</small>}
                    </div>
                    <div className="flex justify-end">
                        <input type="submit" className="bg-neutral text-white mt-14 py-3 px-5 rounded-xl cursor-pointer" value="Add Area" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateArea;