import { createBrowserRouter } from "react-router-dom";
import Root from "../../Routes/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "../../HomePage/Home";
import PropertyDetails from "../../HomePage/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/residential.json"),
        children: [
          {
            path: "/details/:id",
            element: <PropertyDetails></PropertyDetails>,
            loader: () => fetch("/residential.json"),
          },
        ],
      },
    ],
  },
]);
