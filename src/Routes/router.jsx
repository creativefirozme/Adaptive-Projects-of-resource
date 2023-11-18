import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Menu from '../Pages/Home/Menu/Menu';
import Login from '../UserEntry/Login/Login';
import Register from '../UserEntry/Register/Register';

const router = createBrowserRouter([



    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])

export default router;