import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { logo, company_name, job_title, remote_or_onsite, job_type, location, salary, id } = job;
    // console.log(job)
    return (
        <div className='border p-8 space-y-3 rounded'>
            <img className='w-20' src={logo} alt="" />
            <h2 className='font-bold flex'>{job_title}</h2>
            <h2 className='flex text-gray-700 font-medium'>{company_name}</h2>
            <div className='flex gap-3'>
                <p className='border border-indigo-500 p-2 rounded text-indigo-600'>{remote_or_onsite}</p>
                <p className='border border-indigo-500 p-2 rounded text-indigo-600'>{job_type}</p>
            </div>
            <div className='flex gap-6'>
                <div className='flex items-center gap-2'>
                    <IoLocationOutline />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineDollarCircle />
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className='flex bg-gray-200 p-2 rounded hover:bg-gray-300'>View Details</button>
            </Link>

        </div>
    );
};

export default Job;