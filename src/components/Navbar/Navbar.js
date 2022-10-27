import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const [toggle, setToggle] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(() => { toast.success(' Log Out Success') })
            .catch(e => console.error(e))
    }

    const handleMouseOver = (e) => {
        setToggle(!toggle);
    }

    const handleMouseLeave = () => {
        setToggle(false)
    }

    const handleClick = () => {
        navigate('/profile')
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center mr-8"
                    >
                        <img className='logo' src={logo} alt="" />
                        <span className="ml-2 lg:mr-6 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Edumy
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/home"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"

                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className='flex'>
                            <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">

                                <span className="relative">
                                    <input id="Toggle2" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#098b99]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-[#098b99]"></div>
                                </span>

                            </label>
                        </li>
                    </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex photoURL">
                    {
                        user && user.uid ? <>
                            <li onClick={handleLogOut} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">Log Out</li>

                            {toggle ? <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">{user.displayName}</li> : ''}
                            <img onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className='w-1/12 rounded-full cursor-pointer' src={user.photoURL} alt="" onClick={handleClick} />
                        </> :

                            <>
                                <li>
                                    <NavLink
                                        to="/login"
                                        aria-label="Sign in"
                                        title="Sign in"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Sign in
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/signup"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide border border-teal-400 text-gray-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-[#00515a] hover:text-white"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                            </>
                    }
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-50">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <NavLink
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img className='logo' src={logo} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Edumy
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/home"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/courses"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Courses
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/faq"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/blog"
                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className='flex'>
                                            <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">

                                                <span className="relative">
                                                    <input id="Toggle2" type="checkbox" className="hidden peer" />
                                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#098b99]"></div>
                                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-[#098b99]"></div>
                                                </span>

                                            </label>
                                        </li>

                                        {user?.uid ? <>

                                            <img onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className='w-1/12 rounded-full cursor-pointer' src={user.photoURL} alt="" />
                                            {toggle ? <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">{user.displayName}</li> : ''}
                                            <li onClick={handleLogOut} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">Log Out</li>

                                        </> :

                                            <>
                                                <li>
                                                    <NavLink
                                                        to="/login"
                                                        aria-label="Sign in"
                                                        title="Sign in"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Sign in
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/signup"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 focus:shadow-outline focus:outline-none bg-teal-200 text-gray-900 hover:bg-teal-500 hover:text-white"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Sign up
                                                    </NavLink>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;