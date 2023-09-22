import { Link } from "react-router-dom";
import {FaFacebookF} from 'react-icons/fa6'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="bg-[#1A1919]">
            <div className="c_container">
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
                    <div className="col-span-1 sm:col-span-1">
                        <div className="mb-3">
                            <h2 className="text-white text-3xl font-bold mb-3">CareerHub</h2>
                            <p className="text-white/70 mb-2">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <div className="flex items-center gap-2">
                                <span className="p-2 rounded-full w-10 h-10 text-xl text-[#337FFF] bg-white flex items-center justify-center"><FaFacebookF /></span>
                                <span className="p-2 rounded-full w-10 h-10 text-xl text-[#33CCFF] bg-white flex items-center justify-center"><BsTwitter /></span>
                                <span className="p-2 rounded-full w-10 h-10 text-xl text-[#ee2a7b] bg-white flex items-center justify-center"><AiOutlineInstagram /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 lg:col-span-3">
                        <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
                            <div>
                                <h3 className="text-xl text-white mb-3 font-semibold">Company</h3>
                                <ul className="space-y-2 mb-3">
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>About</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Work</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Latest News</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Careers</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl text-white mb-3 font-semibold">Product</h3>
                                <ul className="space-y-2 mb-3">
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Prototype</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Plans & Pricing</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Customers</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Integrations</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl text-white mb-3 font-semibold">Support</h3>
                                <ul className="space-y-2 mb-3">
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Help Desk</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Sales</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Become a Partner</Link></li>
                                    <li><Link className="text-white/70 hover:text-[#9873FF]" to='/'>Developers</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl text-white mb-3 font-semibold">Contact</h3>
                                <ul className="space-y-2 mb-3">
                                    <li><span className="text-white/70">524 Broadway , NYC</span></li>
                                    <li><span className="text-white/70">+1 777 - 978 - 5570</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-5 mt-5 text-white border-t border-t-[rgba(152,_115,_255,_0.20)]">
                    <span>&copy; 2023 CareerHub. All Rights Reserved</span>
                    <span>Powered by CareerHub</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;