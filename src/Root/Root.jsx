import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {
                navigation.state === 'loading' ? <Loader /> : <Outlet />
            }
            <Footer />
        </div>
    );
};

export default Root;