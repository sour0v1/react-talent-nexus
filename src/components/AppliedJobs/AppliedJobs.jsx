import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplications } from '../../utility/localStorage';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    console.log(typeof jobs);
    const [appliedJobs, setAppliedJobs] = useState([]);
    console.log(appliedJobs);
    useEffect(() =>{
        const appliedJobApplicationsIds = getStoredApplications();
        if(appliedJobApplicationsIds.length > 0){
            /* // method 1
           const jobApplied =  jobs.filter(job => appliedJobApplicationsIds.includes(job.id)) */
        // method 2
        const jobApplied = [];
        for(const id of appliedJobApplicationsIds){
            const job = jobs.find(job => job.id === id);
            jobApplied.push(job);
        }
        //    console.log(jobs, appliedJobApplicationsIds, jobApplied);
        setAppliedJobs(jobApplied);
        }
        
    },[jobs])
    // console.log(appliedJobApplicationsIds)
    // console.log(data);
    return (
        <div>
            
            <div>
                {
                    appliedJobs.map(appliedJob => <AppliedJob appliedJob = {appliedJob} key={appliedJob.id}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;