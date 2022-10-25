import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4 header">
            <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
                <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">Log in to your account</h1>
                <form className="mb-8 space-y-4">
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Full Name</span>
                        <input className="form-input" type="text" placeholder="Enter Your Full Name" />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Photo URL</span>
                        <input className="form-input" type="text" placeholder="Enter Photo URL" />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                        <input className="form-input" type="email" placeholder="Ex. james@bond.com" required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                        <input className="form-input" type="password" placeholder="••••••••" required />
                    </label>
                    <input type="submit" className="w-full text-white text-lg cursor-pointer py-3 mt-1 bg-[#6cc17e] hover:bg-[#6dcd82] transition-all" value="Login Now" />
                </form>
                <div className="space-y-8">
                    <div className="text-center border-b border-gray-200">
                        <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="#" className="py-3 btn btn-icon btn-google flex ">
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                    <path
                                        d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                                    />
                                </svg>
                                <span className="sr-only">Continue with</span> Google
                            </div>
                        </Link>
                        <Link href="#" className="py-3 btn btn-icon btn-dark">
                            <div className='flex'>
                                <span className='text-white mr-2'><FaGithub /></span>
                                <span className="sr-only">Continue with</span> Github
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <p className="mb-4 text-xs text-center text-gray-400 text-xl space-x-2">
                <Link to="/login" className="text-purple-200 underline hover:text-white">Log In to Your Account</Link>
                ·
                <Link href="#" className="text-purple-200 underline hover:text-white">Forgot password</Link>
                ·
                <Link to="/courses" className="text-purple-200 underline hover:text-white">Check Courses</Link>
            </p>


        </div>
    );
};

export default SignUp;