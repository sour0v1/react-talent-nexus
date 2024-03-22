import icon1 from '../../assets/icons/accounts.png'
import icon2 from '../../assets/icons/creative.png'
import icon3 from '../../assets/icons/marketing.png'
import icon4 from '../../assets/icons/chip.png'

const JobCategory = () => {
    return (
        <div>
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
        </div>
    );
};

export default JobCategory;