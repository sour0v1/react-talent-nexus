import user from '../../assets/images/user.png';
import icon1 from '../../assets/icons/accounts.png'
import icon2 from '../../assets/icons/creative.png'
import icon3 from '../../assets/icons/marketing.png'
import icon4 from '../../assets/icons/chip.png'
const Home = () => {
    return (
        <div>
            {/* hero section */}
            <section>
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={user} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='space-y-3'>
                            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className=''>Dream Job</span></h1>
                            <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. <br />Come find it. Manage all your job application from start to finish.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* job category section */}
            <section className='mb-14'>
                <div className='text-center space-y-3 mb-9'>
                    <h1 className='text-2xl mx-auto font-bold'>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-9'>
                    <div className='bg-purple-50 p-5 rounded'>
                        <img src={icon1} alt="" />
                        <h5>Accounting and Finance</h5>
                        <p>310 jobs available</p>
                    </div>
                    <div className='bg-purple-50 p-5 rounded'>
                        <img src={icon2} alt="" />
                        <h5>Creative Design</h5>
                        <p>100+ jobs available</p>
                    </div>
                    <div className='bg-purple-50 p-5 rounded'>
                        <img src={icon3} alt="" />
                        <h5>Marketing and Sales</h5>
                        <p>160 jobs available</p>
                    </div>
                    <div className='bg-purple-50 p-5 rounded'>
                        <img src={icon4} alt="" />
                        <h5>Engineering jobs</h5>
                        <p>224 jobs available</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;