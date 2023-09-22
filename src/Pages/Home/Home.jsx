import Banner from "./Sections/Banner";
import Categories from "./Sections/Categories/Categories";
import FeaturedJobs from "./Sections/FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <main>
            <Banner />
            <Categories />
            <FeaturedJobs />
        </main>
    );
};

export default Home;