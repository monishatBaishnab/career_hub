import { useEffect, useState } from "react";
import PageTitile from "../../Components/PageTitile";
import { getStoreJobs } from "../../assets/Functions";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const storedJobsIds = getStoreJobs();

    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id));

    return (
        <section>
            <PageTitile pageTitle='Applied Jobs' />
            <div className="c_container">
                {
                   jobApplied.map((appliedJob, idx) => <AppliedJob key={idx} storedJob={appliedJob} />)
                }
            </div>
        </section>
    );
};

export default AppliedJobs;