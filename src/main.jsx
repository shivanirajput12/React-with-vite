import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from "./Components/About";
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Body from './Components/Body.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={appRouter}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
  
)
