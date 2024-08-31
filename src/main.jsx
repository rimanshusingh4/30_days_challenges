import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Layout from './Layout.jsx'
import Theme from './components/Theme.jsx'
import UserInput from './components/UserInput.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      
      {
        path: "counter",
        element: <Counter/>
      },
      {
        path: "theme",
        element: <Theme/>
      },
      {
        path: "user_input",
        element: <UserInput/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
