import React from 'react'
import ImgPlaceholder from '../../public/ImgPlaceholder.png'
import SubscribeMail from './SubscribeMail'
export default function Suggestions() {
    return (
        <div className='container mx-auto p-2 py-20 flex justify-center items-center'>
            <div className='flex flex-col gap-10'>
                <h1 className='font-bold text-[20px] md:text-[42px]'>Maximize your blockchain <br className='hidden md:block' /> investment</h1>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-["lato"] font-bold text-[#1920E0] flex gap-4'>
                            <span>{'>'}</span>
                            <span>Build blockchaine solutions independently</span>
                        </h1>
                        <p className='font-["lato"] text-[#727272]'>Integer posuere fermentum pretium. Proin malesuada </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-["lato"] font-bold text-[#1920E0] flex gap-4'>
                            <span>{'>'}</span>
                            <span>Build blockchaine solutions independently</span>
                        </h1>
                        <p className='font-["lato"] text-[#727272]'>Integer posuere fermentum pretium. Proin malesuada </p>
                    </div>
                </div>
                <SubscribeMail />
            </div>
            <img className='hidden md:block w-1/3' src={ImgPlaceholder} alt="" />
        </div>

    )
}
