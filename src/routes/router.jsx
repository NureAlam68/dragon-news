import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>
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
