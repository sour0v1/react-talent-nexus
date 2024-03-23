import React from 'react';

const AppliedJob = ({ appliedJob }) => {
    console.log(appliedJob);
    const { company_name, contact_information, educational_requirements, experiences
        , job_description, job_responsibility, job_title, logo, remote_or_onsite, location, job_type, salary } = appliedJob;
    return (
        <div className='my-6 flex justify-evenly items-center'>
            <div className='flex gap-5'>
                <div className='px-6 py-12 bg-gray-100 rounded w-fit'>
                    <img className='w-36' src={logo} alt="" />
                </div>
                <div>
                    <h3 className='font-bold'>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className='flex gap-2'>
                        <p className='p-2 border border-indigo-600 rounded w-fit'>{remote_or_onsite}</p>
                        <p className='p-2 border border-indigo-600 rounded w-fit'>{job_type}</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
            </div>

            <div>
                <button className='flex bg-gray-200 p-2 rounded hover:bg-gray-300 mx-auto'>See details</button>
            </div>
        </div>
    );
};

export default AppliedJob;