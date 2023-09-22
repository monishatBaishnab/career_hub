import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blog from "../Pages/Blog/Blog";
import Root from "../Root/Root";
import JobDetails from "../Pages/JobDetails/JobDetails";

const Route = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appliedJobs',
                element: <AppliedJobs />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/details/:jobId',
                element: <JobDetails />
            }
        ]
    }
]);

export default Route;