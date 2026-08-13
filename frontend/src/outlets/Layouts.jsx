import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layouts() {
    return (
        <div className='flex flex-col justify-between min-h-dvh'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}
