import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
    const title = 'Featured Jobs';
    const desctiption = 'Explore thousands of job opportunities with all the information you need. Its your future';
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showLength, setShowLength] = useState(4);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, [])
    // console.log(featuredJobs);
    return (
        <section>
            <div className="c_container">
                <SectionTitle title={title} description={desctiption} />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {
                        featuredJobs.slice(0, showLength).map((featuredJob, idx) => <FeaturedJob key={idx} featuredJob={featuredJob} />)
                    }
                </div>
                <div className={`justify-center mt-5 ${showLength === 6 ? 'hidden' : 'flex'}`}>
                    <button onClick={() => setShowLength(6)} className="btn px-5">Show All</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedJobs;