import React from 'react'
import { createBrowserRouter } from 'react-router'
import { toast } from 'react-toastify'



import Layouts from '../outlets/Layouts'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Cases from '../pages/Cases'
import Blog from '../pages/Blog'
import Prices from '../pages/Prices'


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
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'prices',
                element: <Prices />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])

export default Routes