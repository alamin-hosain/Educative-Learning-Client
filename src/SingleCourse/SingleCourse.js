
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {

    const { name, image, reviews, id } = course;

    return (
        <div className='border p-2 relative'>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                    className="absolute object-cover w-full h-full rounded"
                    src={image}
                    alt="Person"
                />
            </div>
            <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">{name}</p>
                <p className="mb-10 text-md mt-2 text-gray-800">{reviews}</p>
                <div className="flex  justify-center mt-6 w-full">
                    <div className='absolute bottom-0'>
                        <Link to={`/course-details/${id}`} className=' py-2 px-4 text-white bg-[#098b99] rounded-lg hover:bg-[#f0bf79] hover:text-black w-full block'>Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleCourse;