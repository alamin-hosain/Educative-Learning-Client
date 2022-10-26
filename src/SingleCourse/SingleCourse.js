
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {

    const { name, image, reviews } = course;

    return (
        <div className='border p-2'>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                    className="absolute object-cover w-full h-full rounded"
                    src={image}
                    alt="Person"
                />
            </div>
            <div className="flex flex-col sm:text-center ">
                <p className="text-lg font-bold">{name}</p>
                <p className="mb-5 text-xs text-gray-800">{reviews}</p>
                <div className="flex items-center justify-center">
                    <Link to="" className=' py-2 px-4 text-white bg-[#098b99] rounded-lg hover:bg-[#f0bf79] hover:text-black'>Enroll Now</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;