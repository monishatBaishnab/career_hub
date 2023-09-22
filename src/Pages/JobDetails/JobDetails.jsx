import { useParams } from "react-router-dom";
import PageTitile from "../../Components/PageTitile";
import { useEffect, useState } from "react";
import { AiOutlineDollarCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { getStoreJobs, setJobApplications } from "../../assets/Functions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const job = jobs.find(job => job.id == jobId) || {};
    const { id, job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    const notify = () => toast.warn("Already added this Job!");

    const handleAppli = () => {
        const storedJobs = getStoreJobs();
        const exist = storedJobs.find(streId => streId == id);
        if (!exist) {
            setJobApplications(id);
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        } else {
            notify();
        }
    }
    return (
        <div>
            <PageTitile pageTitle='Job Details' />
            <div className="c_container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <p className="text-[#757575] mb-2"><span className="text-[#1A1919] font-bold">Job Description: </span>{job_description}</p>
                        <p className="text-[#757575] mb-2"><span className="text-[#1A1919] font-bold">Job Responsibility: </span>{job_responsibility}</p>
                        <p className="text-[#757575] mb-2"><span className="text-[#1A1919] font-bold">Educational Requerment: </span>{educational_requirements}</p>
                        <p className="text-[#757575] mb-2"><span className="text-[#1A1919] font-bold">Experiences: </span>{experiences}</p>
                    </div>
                    <div>
                        <div className="p-8 bg-[rgba(126,_144,_254,_0.10)] rounded-lg">
                            <div className="mb-4">
                                <h5 className="text-xl font-semibold border-b pb-2 mb-2">Job Details</h5>
                                <p className="flex items-center font-semibold mb-2"><AiOutlineDollarCircle className="text-xl mr-2 text-[#757575]" />Salary: <span className="text-[#474747]">{salary}</span></p>
                                <p className="flex items-center font-semibold mb-2"><AiOutlineCalendar className="text-xl mr-2 text-[#757575]" />Job Title: <span className="text-[#474747]">{job_title}</span></p>
                            </div>
                            <div className="mb-4">
                                <h5 className="text-xl font-semibold border-b pb-2 mb-2">Contact Information</h5>
                                <p className="flex items-center font-semibold mb-2"><BsTelephone className="text-xl mr-2 text-[#757575]" />Phone: <span className="text-[#474747]">{contact_information?.phone}</span></p>
                                <p className="flex items-center font-semibold mb-2"><HiOutlineMail className="text-xl mr-2 text-[#757575]" />Email: <span className="text-[#474747]">{contact_information?.email}</span></p>
                                <p className="flex items-center font-semibold mb-2"><HiOutlineLocationMarker className="text-xl mr-2 text-[#757575]" />Location: <span className="text-[#474747]">{contact_information?.address}</span></p>
                            </div>
                        </div>
                        <button onClick={handleAppli} className="btn w-full mt-4">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;