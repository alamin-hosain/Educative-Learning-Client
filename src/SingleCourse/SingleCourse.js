import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const SingleCourse = ({ course }) => {

    const { category, name, id, short_description, image, price, rating, reviews } = course;

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
                    <a href="" className=' py-2 px-4 text-white bg-[#098b99] rounded-lg hover:bg-[#f0bf79] hover:text-black'>Enroll Now</a>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;