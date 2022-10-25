import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";



const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('http://localhost:5000/category/computer-science')
            },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/courses', element: <Courses /> },
            { path: '/faq', element: <Faq /> },
            { path: '/blog', element: <Blog /> },
        ]
    }
])

export default routes;