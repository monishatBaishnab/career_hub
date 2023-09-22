import { Link, NavLink } from "react-router-dom";
import { FaBarsProgress } from 'react-icons/fa6';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-white border-b">
            <div className="c_container relative py-3">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={() => setOpen(!open)} className="p-2 text-2xl mr-2 md:hidden"><FaBarsProgress /></button>
                        <Link to='/' className="text-2xl text-[#1A1919] font-bold md:text-3xl">CareerHub</Link>
                    </div>
                    <div className={`absolute left-5 bg-white border p-5 transition-all delay-100 ${open === true ? 'opacity-100 visible top-full' : 'opacity-0 invisible top-16'} md:static md:bg-none md:border-0 md:p-0 md:left-10 md:visible md:opacity-100`}>
                        <ul className="flex flex-col items-start gap-4 font-medium md:flex-row md:items-center">
                            <li onClick={() => setOpen(false)}><NavLink to='/'>Home</NavLink></li>
                            <li onClick={() => setOpen(false)}><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
                            <li onClick={() => setOpen(false)}><NavLink to='/blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn">Start Appling</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;