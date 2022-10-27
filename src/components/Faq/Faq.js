import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">

            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                            </span>
                            FAQ Check Out this FAQ questions to Know your desired answer
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            This section for the user who wants to know more about our courses or about our service. Feel free to check you the questions to get your answer.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="How do I take a Edumy course?">
                        Udemy courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                        After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Udemy account). You can also begin the course by logging in and navigating to your My learning page.
                    </Item>
                    <Item title="Is there any way to preview a course?">
                        Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search Udemy’s ever-growing library, and find courses you’re interested in taking.
                    </Item>
                    <Item title="How can I pay for a course?">
                        Udemy supports several different payment methods, depending on your account country and location.
                        Learn more about our payment methods.

                    </Item>
                    <Item title="What if I don’t like a course I purchased?">
                        We want you to be satisfied, so all eligible courses purchased on Udemy can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                    </Item>
                    <Item title="Where can I go for help?">
                        We want you to be satisfied, so all eligible courses purchased on Udemy can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Faq;