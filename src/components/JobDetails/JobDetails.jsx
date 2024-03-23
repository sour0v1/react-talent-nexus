import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const notify = () => toast("Applied Successfully");
    const jobs = useLoaderData();
    const params = useParams();
    const { jobId } = params;
    const intJobId = parseInt(jobId);
    // console.log(jobs);
    // console.log(intJobId);
    const jobDes = jobs.find(job => job.id === intJobId);
    console.log(jobDes)
    const { id, contact_information, company_name, educational_requirements, job_description, job_responsibility, job_title, job_type, location, logo, experiences, salary } = jobDes;
    return (
        <div className="grid grid-cols-3 gap-3 my-8">

            <div className="col-span-2 p-4 pt-0 space-y-3">
                {/* <h1 className="text-xl font-bold text-center">{company_name}</h1> */}
                <img className="w-16 mx-auto" src={logo} alt="" />
                <p><span className="font-bold">Job description : </span>{job_description}</p>
                <p><span className="font-bold">Job responsibility : </span>{job_responsibility}</p>
                <p className="font-bold">Education Requirements : </p>
                <p>{educational_requirements}</p>
                <p className="font-bold">Experiences : </p>
                <p>{experiences}</p>
            </div>
            <div>
                <div className="col-span-1 p-4 space-y-3 bg-gray-100 rounded">
                    <h2 className="mb-4 font-bold text-xl">Job Details</h2>
                    <hr />
                    <div className="mt-3">
                        <p><span className="font-bold">Salary : </span>{salary}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Job title : </span>{job_title}</p>
                    </div>
                    <h2 className="mt-4 text-xl font-bold">Contact Information</h2>
                    <hr />
                    <div className="mt-3">
                        <p><span className="font-bold">Phone : </span>{contact_information.phone}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Email : </span>{contact_information.email}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Address : </span>{contact_information.address}</p>
                    </div>
                </div>
                <button onClick={() => {notify(); saveApplication(intJobId)}} className=' bg-gray-200 p-2 rounded hover:bg-gray-300 w-full my-4'>Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;