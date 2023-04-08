import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { productsAndCartData } from './Loaders/getCart&ProductsData'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { 
        path: '/', 
        element: <Home></Home> 
      },
      { 
        path: 'shop', 
        element: <Shop />
       },
      { 
        path: 'cart', 
        element: <Cart /> 
      },
      { 
        path: 'about', 
        element: <About></About>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)