
import Banner from '../Banner/Banner';
import FeaturedJob from '../FeaturdJob/FeaturedJob';
import JobCategory from '../JobCategory/JobCategory';
const Home = () => {
    return (
        <div>
            {/* hero section */}
            <section>
                <Banner></Banner>
            </section>

            {/* job category section */}
            <section className='mb-14'>
                <JobCategory></JobCategory>
            </section>

            {/* Featured job section */}
            <section>
                <FeaturedJob></FeaturedJob>
            </section>
        </div>
    );
};

export default Home;