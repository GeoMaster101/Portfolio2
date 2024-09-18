import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./pages/About.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Contact from "./pages/Contact.jsx"
import Resume from "./pages/Resume.jsx"


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },

      
      {
        path: "/Contact",
        element: <Contact />

      },
      {
        path: "/Resume",
        element: <Resume />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
