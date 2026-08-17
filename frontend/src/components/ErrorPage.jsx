import React from 'react'
import { useLocation, useNavigate } from 'react-router'



import ImgPlaceholder from '../../public/ImgPlaceholder.png'
import bg8 from '../../public/bg8.png'
import Content from '../../public/Content.png'
import _404wings from '../../public/404wings.png'

export default function ErrorPage() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <section className='relative container m-auto p-4 text-[50%] sm:text-[100%] -z-10'>
            <img className='m-auto' src={bg8} alt="" />
            <div className='absolute top-0 w-full h-full'>
                <div className='relative flex items-center justify-center h-full w-full'>
                    <img className='w-[50%] absolute top-0 left-1/2 -translate-x-1/2 z-0' src={ImgPlaceholder} alt="" />
                    <div
                        className='ml-[40%] flex items-center relative z-10 max-h-100 h-full max-w-100 w-full'>
                        <div className='flex flex-col items-center gap-4 relative z-10 m-auto'>
                            <h1 className='font-bold text-[60px] md:text-[120px] text-[#5F5FFF]'>404</h1>
                            <p className='font-bold'>Sorry, {location.pathname} page not Found</p>
                            <button
                                onClick={() => { navigate('/') }}
                                className='text-white font-semibold bg-linear-to-r from-[#5F5FFF] to-[#4600B1] p-4 px-8 rounded-2xl'>Back to Home Page</button>
                        </div>
                        <img className='absolute top-0 z-0 h-full w-full' src={Content} alt="" />
                        <img className='absolute -left-50 translate-x-1/2 top-1/2 bottom-0 z-0 h-1/4 -rotate-25' src={_404wings} alt="" />
                        <img className='absolute h-1/8 top-20 z-0' src={_404wings} alt="" />
                        <img className='absolute h-1/6 top-25 right-20 z-0' src={_404wings} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
