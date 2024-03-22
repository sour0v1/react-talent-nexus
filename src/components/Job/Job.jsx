import React from 'react';

const Job = ({job}) => {
    const {logo, company_name, job_title, remote_or_onsite, job_type, location, salary} = job;
    console.log(job)
    return (
        <div className='border p-4 space-y-3'>
            <img className='w-20' src={logo} alt="" />
            <h2 className='font-bold flex'>{job_title}</h2>
            <h2 className='flex text-gray-700 font-medium'>{company_name}</h2>
            <div className='flex gap-3'>
                <p className='border border-indigo-500 p-2 rounded'>{remote_or_onsite}</p>
                <p className='border border-indigo-500 p-2 rounded'>{job_type}</p>
            </div>
            <div className='flex gap-3'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='flex bg-gray-200 p-2 rounded hover:bg-gray-300'>View Details</button>
            

        </div>
    );
};

export default Job;