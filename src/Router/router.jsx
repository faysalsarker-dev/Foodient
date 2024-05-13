import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Page/register/Register";
import Login from "../Page/login/Login";
import Home from "../Page/Home/Home";
import AddFood from "../Page/addfood/AddFood";
import RouterProtector from "../component/RouterProtector";
import AvailableFood from "../Page/available/AvailableFood";
import SingleFood from "../Page/singleFood/SingleFood";
import FoodReq from "../Page/foodReq/FoodReq";
import ManageFood from "../Page/manageFood/ManageFood";
import NotFoundPage from "../Page/notFound/NotFound";
import UpdatePage from "../Page/update/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availablefoods",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/food/:id",
        element: (
          <RouterProtector>
            <SingleFood></SingleFood>
          </RouterProtector>
        ),
      },
      {
        path: "/Manage-My-Foods",
        element: (
          <RouterProtector>
            <ManageFood></ManageFood>
          </RouterProtector>
        ),
      },
      {
        path: "/update-Food/:id",
        element: (
          <RouterProtector>
            <UpdatePage></UpdatePage>
          </RouterProtector>
        ),
      },
      {
        path: "/Food-Request",
        element: (
          <RouterProtector>
            <FoodReq></FoodReq>
          </RouterProtector>
        ),
      },
      {
        path: "/addfood",
        element: (
          <RouterProtector>
            <AddFood></AddFood>
          </RouterProtector>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
