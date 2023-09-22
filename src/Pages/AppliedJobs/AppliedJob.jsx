import PropTypes from 'prop-types';
import { CiDollar, CiLocationOn } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
const AppliedJob = ({ storedJob = {} }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = storedJob;
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5 mb-5'>
            <div className='w-[240px] h-[240px] rounded-md bg-[#F4F4F4] flex items-center justify-center p-10'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h4 className='text-2xl text-[#474747] font-bold mb-2'>{job_title}</h4>
                <span className='text-lg text-[#757575] font-medium mb-4 inline-block'>{company_name}</span>
                <div className='flex items-center gap-3 mb-4'>
                    <span className='text-[#7E90FE] px-4 py-2 border border-[#7E90FE] rounded-md font-semibold'>{remote_or_onsite}</span>
                    <span className='text-[#7E90FE] px-4 py-2 border border-[#7E90FE] rounded-md font-semibold'>{job_type}</span>
                </div>
                <div className='flex items-center gap-4 text-[#757575] mb-4'>
                    <span className='flex items-center gap-2'><CiLocationOn className='text-2xl' />{location}</span>
                    <span className='flex items-center gap-2'><CiDollar className='text-2xl' />{salary}</span>
                </div>
            </div>
            <div>
                <button onClick={() => navigate(`/details/${id}`)} className='btn py-2'>View Details</button>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    storedJob: PropTypes.object,
}

export default AppliedJob;