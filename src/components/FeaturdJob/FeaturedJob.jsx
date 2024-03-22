import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs)

    useEffect(() =>{
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-3 mb-9'>
                <h1 className='text-2xl mx-auto font-bold'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-5 px-36">
                {
                    jobs.map(job => <Job job = {job} key={job.id}></Job>)
                }
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;