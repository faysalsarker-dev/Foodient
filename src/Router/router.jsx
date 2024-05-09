import {

    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Page/register/Register";
import Login from "../Page/login/Login";
import Home from "../Page/Home/Home";
import AddFood from "../Page/addfood/AddFood";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addfood',
                element:<AddFood></AddFood>
            },
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