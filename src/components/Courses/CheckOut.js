import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, id } = course;
    return (
        <div className='checkout space-y-4 p-6'>
            <p>Check Out Page</p>
            <h2 className='text-4xl font-bold'>Course: {name}</h2>
            <p className='bg-yellow-400 px-6 py-2 text-black rounded-sm shadow-sm'>Course Id : {id}</p>
        </div>
    );
};

export default CheckOut;