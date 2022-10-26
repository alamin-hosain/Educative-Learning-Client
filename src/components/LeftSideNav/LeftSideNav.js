import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='lefside mt-24'>
            <h3 className='text-3xl mb-4'>Subjects</h3>
            <div className='lg:space-y-3 under-order-list text-xl'>
                {categories.map((category) => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)}
            </div>
        </div>
    );
};

export default LeftSideNav;