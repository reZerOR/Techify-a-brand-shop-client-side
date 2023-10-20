import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import ProductDetais from "../Pages/ProductDetails/ProductDetais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brandproduct/:name",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.name}`),
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetais></ProductDetais>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productdetails/${params.id}`),
      },
    ],
  },
]);

export default router;
