import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import CheckOut from "../components/Courses/CheckOut";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PasswordReset from "../components/Login/PasswordReset";
import SignUp from "../components/SignUp/SignUp";
import UserProfile from "../components/UserProfile/UserProfile";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('https://b610-learning-platform-server-side-delta.vercel.app/category/02')
            },
            {
                path: '/home', element: <Home />,
                loader: () => fetch('https://b610-learning-platform-server-side-delta.vercel.app/category/02')
            },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/courses', element:
                    <Courses />,
                loader: () => fetch('https://b610-learning-platform-server-side-delta.vercel.app/courses')
            },
            { path: '/faq', element: <Faq /> },
            { path: '/blog', element: <Blog /> },
            {
                path: '/category/:id', element:
                    <Category />,
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-delta.vercel.app/category/${params.id}`)
            },
            {
                path: '/course-details/:id', element:
                    <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-delta.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id', element: <PrivateRoute>
                    <CheckOut />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-delta.vercel.app/courses/${params.id}`)
            },
            {
                path: '/password-reset', element: <PasswordReset />
            },
            {
                path: '/profile', element: <UserProfile />
            }
        ]
    }
])

export default routes;