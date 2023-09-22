import { useEffect, useState } from "react";
import Category from "./Category";
import SectionTitle from "../../../../Components/SectionTitle";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const secTitle = 'Job Category List';
    const secDescription = 'Explore thousands of job opportunities with all the information you need. Its your future';
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div className="c_container">
            <SectionTitle title={secTitle} description={secDescription} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {
                    categories.map((category, idx) => <Category key={idx} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;