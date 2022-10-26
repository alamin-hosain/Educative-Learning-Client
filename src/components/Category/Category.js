import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryCourses from '../Courses/SingleCategoryCourses';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const singleCategoryCourse = useLoaderData();

    return (
        <div className='courses px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <>
                <LeftSideNav
                />
            </>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {
                        singleCategoryCourse.map(course => <SingleCategoryCourses key={course.id} course={course} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Category;