import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruit from './components/Fruits/Fruit'
import Dairy from './components/Dairy/Dairy'
import SeaFoods from './components/SeaFoods/SeaFoods'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/fruit",
          element: <Fruit />
        },
        {
          path: "/dairy",
          element: <Dairy />
        },
        {
          path: "/seafoods",
          element: <SeaFoods />
        },
        {
          path: "/allproducts",
          element: <AllProducts />
        },
      ]
    }


  ])
  return <RouterProvider router={router} />

}

export default App