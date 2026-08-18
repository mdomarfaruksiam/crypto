import React from 'react'
import { useNavigate } from 'react-router'
import ImgPlaceholder from '../../public/ImgPlaceholder.png'
import PreSaleTimer from './PreSaleTimer'


export default function HeaderMain() {

    const navigate = useNavigate()
    return (
        <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between p-2 sm:py-40'>
            <div className='w-full flex flex-col gap-8 p-4'>
                <h2 className='font-["montserrat"] font-bold text-[16px] text-[white]'>90% Cryptocurrency Transactions made faster</h2>
                <h1 className='font-["montserrat"] font-bold text-[58px] text-[white]'>The finest digital currency around</h1>
                <p className='font-["lato"] font-regular text-[16px] text-[white]'>Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed lacinia tempor</p>
                <div className='bg-[#5F5FFF]'>
                    <PreSaleTimer />
                </div>
                <div className='flex gap-4 text-nowrap'>
                    <button onClick={() => { navigate('more') }} className='bg-[#FF6F33] p-4 px-8 rounded-4xl font-semibold text-sm text-white'>
                        Read More
                    </button>
                    <button className='border border-white p-4 px-8 rounded-4xl text-sm text-white'>Get Pre-Sale List</button>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full' src={ImgPlaceholder} alt="Placeholder Image" />
            </div>
        </div>
    )
}
