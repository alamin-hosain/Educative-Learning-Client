import React from 'react';

const Blog = () => {
    return (

        <>

            <div className='header-section flex justify-center items-center'>
                <h2 className='text-5xl text-white'>Blog</h2>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
                    <div
                        aria-label="View item"
                        title="View item"
                        className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                            <div className="pr-4">
                                <h6 className="mb-4 text-2xl  font-semibold leading-8">
                                    What is cors?
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        aria-label="View item"
                        title="View item"
                        className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                            <div className="pr-4">
                                <h6 className="mb-4 text-2xl  font-semibold leading-8">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </h6>
                                <p className="text-sm text-gray-900 mb-3">
                                    We are using firebase to Authentication to allow users to sign in to out app using one or more sign-in methods, including email address and password, also social signing and sign up options available.
                                    Other Options are :

                                </p>
                                <ul className='space-y-2'>
                                    <li>MongoDB</li>
                                    <li>Oracle Database.</li>
                                    <li>Amazon Redshift</li>
                                    <li>DataStax Enterprise.</li>
                                    <li>Redis Enterprise Cloud.</li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        aria-label="View item"
                        title="View item"
                        className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                            <div className="pr-4">
                                <h6 className="mb-4 text-2xl  font-semibold leading-8">
                                    How does the private route work?
                                </h6>
                                <p className="text-sm text-gray-900">
                                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        aria-label="View item"
                        title="View item"
                        className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                            <div className="pr-4 space-y-3">
                                <h6 className="mb-4 text-2xl  font-semibold leading-8">
                                    What is Node? How does Node work?
                                </h6>
                                <p className="text-sm text-gray-900">
                                    The Node.js run-time environment includes everything you need to execute a program written in JavaScrip. Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

                                </p>
                                <p>
                                    1. Node.js Architecture: Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops.
                                </p>
                                <p>
                                    2 Node.js Application: So now that, we have learned about the Node.js architecture, it’s time to learn how a Node.js application runs and this part includes the concept of Node.js being single-threaded and its non-blocking nature as well. So, first of all, what is a thread?
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blog;