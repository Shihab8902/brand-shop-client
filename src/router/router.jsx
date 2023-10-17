import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addProduct",
                element: <AddProduct />
            },
            {
                path: "/cart",
                element: <MyCart />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])