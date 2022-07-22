import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
const RegionList = () => {
    const [show, setShow] = useState('')
    const [regions, setRegions] = useState([])
    useEffect(() => {
        fetch('https://staging-api.erpxbd.com/api/v1/region/20/1', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setRegions(data?.region)
            })
    }, [])
    return (
        <section className='px-6 mb-32'>
            <div className='bg-white p-6 flex items-center justify-end'>
                <div className='relative' >
                    <input onChange={(e) => setShow(e.target.value)} type="search" name="" id="" className='rounded-full border-2 border-[#E5E6E6] outline-none p-2' placeholder='       Search...' />
                    <BiSearchAlt className={`text-xl absolute top-3 ml-2 text-accent ${!show ? 'block' : 'hidden'}`} />
                </div>
                <label>
                    <select className="bg-base-100 select rounded-full w-72 border-2 border-[#E5E6E6] outline-none mx-3" style={{ outline: 'none', padding: '8px', color: '#4E4E4E', fontWeight: '400' }}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                    </select>
                </label>
            </div>
            <div className="overflow-x-auto w-full  rounded-md">
                <table className="bg-white w-full border border-[#E5E6E6]">
                    <thead className='bg-[#F8F9FA] text-black  '>
                        <tr>
                            <td className='py-4'>
                                <label>
                                    <input type="checkbox" className="checkbox ml-8 mr-12" />
                                </label>
                            </td>
                            <td className='text-center ml-12'>Sl No.</td>
                            <td className='columns-3 text-center'>Region</td>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            regions?.map((region, index) =>
                                <tr key={region?._id} className='border-b border-[#E5E6E6]'>
                                    <td className='w-5 py-4 '>
                                        <label>
                                            <input type="checkbox" className="checkbox ml-8" />
                                        </label>
                                    </td>
                                    <td className='w-20 text-center'>{index+1}</td>
                                    <td className='columns-3 text-center'>{region?.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default RegionList;