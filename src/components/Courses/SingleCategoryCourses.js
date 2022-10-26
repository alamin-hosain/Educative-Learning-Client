import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCategoryCourses = ({ course }) => {
    const { name, short_description, image, price, rating, id } = course;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link to={`/course-details/${id}`} aria-label="Article">
                <img
                    src={image}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                />
            </Link>
            <div className="py-5">
                <Link
                    to={`/course-details/${id}`}
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    <p className="text-2xl font-bold leading-8">{name}</p>
                </Link>
                <p className="mb-4 text-gray-700">
                    {short_description}
                </p>
                <div className="flex items-center justify-between">
                    <div className='flex items-center'>
                        <span className='flex text-[#FFDF00]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />

                        </span>
                        <a
                            href="/courses"
                            aria-label="Likes"
                            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group ml-4"
                        >
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="6 23 1 23 1 12 6 12"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">{rating}</p>
                        </a>
                    </div>
                    <span className='text-xl font-bold mr-4'>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCourses;