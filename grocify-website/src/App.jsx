import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Fruit from "./components/Fruits/Fruit";
import Dairy from "./components/Dairy/Dairy";
import SeaFoods from "./components/SeaFoods/SeaFoods";
import AllProducts from "./components/AllProducts/AllProducts";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    { path: "/signin", element: <SignIn /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "fruit", element: <Fruit /> },
        { path: "dairy", element: <Dairy /> },
        { path: "seafoods", element: <SeaFoods /> },
        { path: "allproducts", element: <AllProducts /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
