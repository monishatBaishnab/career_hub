const getStoreJobs = () => {
    const stredJobs = localStorage.getItem('job-applications');
    if(stredJobs){
        return JSON.parse(stredJobs);
    }
    return [];
}

const setJobApplications = (id) => {
    const storedJobs = getStoreJobs();
    const exist = storedJobs.find(jobId => jobId == id);
    if(!exist){
        storedJobs.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobs));
    }
}

export {setJobApplications, getStoreJobs};