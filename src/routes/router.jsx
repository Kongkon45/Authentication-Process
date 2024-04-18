import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : "*",
                element : <Error/>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
])


export default router;