import React from 'react'
import { createBrowserRouter } from 'react-router'
import { toast } from 'react-toastify'
import Layouts from '../outlets/Layouts'


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: '*',
                element: <div>404 Not Found</div>
            }
        ]
    }
])

export default Routes