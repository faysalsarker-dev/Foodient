import {

    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Page/register/Register";
import Login from "../Page/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
]);

export default router