import React from 'react'
import { createBrowserRouter } from 'react-router'
import { toast } from 'react-toastify'
import Layouts from '../outlets/Layouts'
import Home from '../pages/Home'
import ErrorPage from '../components/ErrorPage'


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])

export default Routes