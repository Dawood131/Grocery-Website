import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruit from './components/Fruits/Fruit'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/fruit",
      element: <Fruit />
    },
    {
      path: "/",
      element: <Home />
    },

  ])
  return <RouterProvider router={router} />
}

export default App