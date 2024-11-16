import * as ReactDOM from "react-dom/client";
import React from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./Pages/ProductsPage/Products.jsx";
import Root from "./Layout/Root.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);