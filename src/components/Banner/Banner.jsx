
import user from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div>
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
        </div>
    );
};

export default Banner;