import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('http://localhost:5000/category/computer-science')
            },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/courses', element: <PrivateRoute>
                    <Courses />
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            { path: '/faq', element: <Faq /> },
            { path: '/blog', element: <Blog /> },
            {
                path: '/category/:id', element: <PrivateRoute>
                    <Category />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course-details/:id', element: <PrivateRoute>
                    <CourseDetails></CourseDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])

export default routes;