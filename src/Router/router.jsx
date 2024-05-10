import {

    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Page/register/Register";
import Login from "../Page/login/Login";
import Home from "../Page/Home/Home";
import AddFood from "../Page/addfood/AddFood";
import RouterProtector from "../component/RouterProtector";
import AvailableFood from "../Page/available/AvailableFood";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/allfood')
            },
            {
                path:'/availablefoods',
                element:<AvailableFood></AvailableFood>
            },
            {
                path:'/addfood',
                element:<RouterProtector><AddFood></AddFood></RouterProtector>
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