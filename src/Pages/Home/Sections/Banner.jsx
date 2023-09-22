const Banner = () => {
    return (
        <section className="bg-[rgba(126,_144,_254,_0.05)]">
            <div className="c_container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="self-center">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6">One Step Closer To Your <span className="text-gredient">Dream Job</span></h1>
                        <p className="text-[#757575] mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="relative hidden w-full md:h-[400px] lg:h-[550px] md:inline-block">
                        <div className="absolute left-0 right-0 -bottom-5 md:-bottom-10 h-full">
                            <img className="h-full w-full object-contain" src="/images/user.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;