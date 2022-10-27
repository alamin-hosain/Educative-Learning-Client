import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './CourseDetails.css';

const CourseDetails = () => {

    const coursesDetails = useLoaderData();
    const { name, category, details, image, rating, reviews, price, short_description, id } = coursesDetails;


    const inputRef = useRef(null);
    const exportPDF = useReactToPrint({
        content: () => inputRef.current,
    });


    return (
        <>
            <div className='header-area flex items-center justify-center text-white flex-col space-y-4'>
                <p>{category}</p>
                <h3 className='text-4xl font-bold' >{name}</h3>

            </div>
            <button onClick={exportPDF} className='mt-10 bg-yellow-500 text-lg font-bold py-4 px-10 cursor-pointer hover:bg-yellow-200 mx-auto block'>Download Course Details In PDF </button>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" ref={inputRef} id="divToPrint">

                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                {category}
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                {name}
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            {short_description}
                        </p>

                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">

                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src={image}
                            alt=""
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                        {details}
                    </p>
                    <div className='flex justify-center items-center space-x-6 mb-6 text-lg'>
                        <span>Price: ${price}</span>
                        <span>{reviews}</span>
                        <span>Rating: {rating}</span>
                    </div>
                    <Link
                        to={`/checkout/${id}`}
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 bg-yellow-500 py-4 px-10 text-xl"
                    >
                        Get Premium Access
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;