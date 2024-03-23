import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way
    const [length, setLength] = useState(4);
    /* const handleLength = () =>{
        setLength(jobs.length);
    } */
    // console.log(jobs)

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    jobs.slice(0, length).map(job => <Job job = {job} key={job.id}></Job>)
                }
                </div>
                <button onClick={() => setLength(jobs.length)} className={`flex bg-gray-200 p-2 rounded hover:bg-gray-300 mx-auto ${length > 4 && 'hidden'}`}>See all Jobs</button>

            </div>
        </div>
    );
};

export default FeaturedJob;