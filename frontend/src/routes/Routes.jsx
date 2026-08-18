import React from 'react'
import { createBrowserRouter } from 'react-router'
import { toast } from 'react-toastify'
import Layouts from '../outlets/Layouts'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Cases from '../pages/Cases'


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
                path: 'contact-us',
                element: <Contact />
            },
            {
                path: 'faq',
                element: <FAQ />
            },
            {
                path: 'our-cases',
                element: <Cases />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])

export default Routes