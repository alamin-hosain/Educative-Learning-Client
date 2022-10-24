import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../layout/Main";



const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> }
        ]
    }
])

export default routes;