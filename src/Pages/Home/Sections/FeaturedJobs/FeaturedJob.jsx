import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';
const FeaturedJob = ({ featuredJob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = featuredJob;
    const navigate = useNavigate();
    return (
        <div className='p-10 border rounded-lg'>
            <div className='mb-5'>
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
                <button onClick={() => navigate(`/details/${id}`)} className='btn py-2'>View Details</button>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    featuredJob: PropTypes.object,
}

export default FeaturedJob;