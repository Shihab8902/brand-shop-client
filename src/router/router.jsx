import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductsDetails from "../pages/BrandProducts/ProductsDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

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
                element: <PrivateRoute>
                    <AddProduct />
                </PrivateRoute>
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
            },
            {
                path: "/brand/:name",
                element: <BrandProducts />,
                loader: () => fetch("https://bytesync-server.vercel.app/products")
            },
            {
                path: "/product/:id",
                element: <PrivateRoute>
                    <ProductsDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://bytesync-server.vercel.app/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute>
                    <UpdateProduct />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://bytesync-server.vercel.app/product/${params.id}`)
            }
        ]
    }
])