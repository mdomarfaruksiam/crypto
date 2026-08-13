import React from 'react'
import { RouterProvider } from 'react-router'

import Routes from './routes/Routes'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return <>
    <RouterProvider router={Routes} />
    <ToastContainer />
  </>
}
