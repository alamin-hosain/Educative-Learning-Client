import { useLoaderData } from 'react-router-dom';
import header from '../../assets/header.png';
import SingleCourse from '../../SingleCourse/SingleCourse';

import './Home.css';

const Home = () => {
    const popularCourse = useLoaderData();


    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 header">
                <div className="flex flex-col justify-around items-center lg:flex-row">
                    <div className="px-2 pt-6 pb-5 text-center rounded lg:w-2/5">
                        <img className='border border-l-8' src={header} alt="" />
                    </div>

                    <div className="mb-12 lg:max-w-lg  lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 mt-4 lg:mt-0 text-4xl lg:text-5xl font-bold tracking-tight text-white sm:leading-none">
                                Edumy - Improve Your Online Learning Experience Better Instantly
                            </h2>
                            <p className="text-base text-white md:text-lg">
                                We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.
                            </p>

                        </div>
                        <hr className="mb-6 border-gray-300" />
                        <div className="flex justify-between items-center ">
                            <a href="/" className="mr-3 text-lg lg:text-2xl bg-[#f0bf79] py-3 px-4 rounded-sm hover:text-white hover:bg-[#6cc17e]">
                                View Courses
                            </a>
                            <div className="flex text-lg">
                                <p className='text-white font-bold'>500K+ People already trusted us.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Discover Our Popular Courses
                    </p>
                    <h2 className="text-4xl text-gray-700 md:text-4xl">
                        Expand Your Career Opportunity With Our Courses
                    </h2>
                </div>
                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">

                    {popularCourse.map(course =>
                        <SingleCourse key={course.id} course={course} />
                    )}

                </div>
            </div>
        </>
    );
};

export default Home;