import React from 'react'
import { createBrowserRouter } from 'react-router'
import { toast } from 'react-toastify'
import Layouts from '../outlets/Layouts'
import Home from '../pages/Home'


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
                element: <div>404 Not Found</div>
            }
        ]
    }
])

export default Routes