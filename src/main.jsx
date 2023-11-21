import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - configurando router
import {createBrowserRouter,Navigate,RouterProvider} from'react-router-dom'
import Register from './routes/Register.jsx'
import Login from './routes/Login.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/register",
//     element: <Register />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/home",
//     element: <Home />
//   },
//   {
//     path: "",
//     element: <Page />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - página de erro 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/",
        element: <Home />
      },
      // possíveis rotas alternativas para o login
      {
        path: "logar",
        element: <Navigate to="/login" />
      },
      {
        path: "entrar",
        element: <Navigate to="/login" />
      },
      //possíveis rotas alternativas para register
      {
        path: "registrar",
        element: <Navigate to="/register" />
      },
      {
        path: "registro",
        element: <Navigate to="/register" />
      },
      {
        path: "cadastrar",
        element: <Navigate to="/register" />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
