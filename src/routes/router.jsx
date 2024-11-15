import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
        {
          path: "",
          element: <Navigate to="/category/01"></Navigate>
        }
    ]
  },
  {
    path: "news",
    element: <h1>news</h1>,
  },
  {
    path: "auth",
    element: <h1>auth</h1>,
  },
]);

export default router;
