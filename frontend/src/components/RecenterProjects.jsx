import React from 'react'
import ImgPlaceholder from '../../public/ImgPlaceholder2.png'
export default function RecenterProjects() {
    return (
        <div className='container mx-auto p-2 space-y-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='font-bold text-[34px] text-center'>Recent Projects</h1>
                <p className='font-["lato"] text-[#727272] text-center md:w-[50%]'>Phasellus sodales est id sapien condimentum sagittis. Vivamus eget lorem augue. Nunc ut diam tellus. Fusce mattis luctus sem, sollicitudin tincidunt ante ullamcorper</p>
            </div>
            <div className='flex flex-wrap items-center py-4'>
                <div className='p-2 space-y-4 sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4'>
                    <img className='bg-[#c2bfbf] rounded-xl' src={ImgPlaceholder} alt="" />
                    <div className='p-2'>
                        <p className='font-["lato"] text-[#727272]'>Blockchain IoT/Firmware</p>
                        <h2 className='font-bold'>Build trust IoT data  for Mobile Crypto Wallet App</h2>
                    </div>
                </div>
                <div className='p-2 space-y-4 sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4'>
                    <img className='bg-[#c2bfbf] rounded-xl' src={ImgPlaceholder} alt="" />
                    <div className='p-2'>
                        <p className='font-["lato"] text-[#727272]'>Blockchain IoT/Firmware</p>
                        <h2 className='font-bold'>Build trust IoT data  for Mobile Crypto Wallet App</h2>
                    </div>
                </div>
                <div className='p-2 space-y-4 sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4'>
                    <img className='bg-[#c2bfbf] rounded-xl' src={ImgPlaceholder} alt="" />
                    <div className='p-2'>
                        <p className='font-["lato"] text-[#727272]'>Blockchain IoT/Firmware</p>
                        <h2 className='font-bold'>Build trust IoT data  for Mobile Crypto Wallet App</h2>
                    </div>
                </div>
                <div className='p-2 space-y-4 sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4'>
                    <img className='bg-[#c2bfbf] rounded-xl' src={ImgPlaceholder} alt="" />
                    <div className='p-2'>
                        <p className='font-["lato"] text-[#727272]'>Blockchain IoT/Firmware</p>
                        <h2 className='font-bold'>Build trust IoT data  for Mobile Crypto Wallet App</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
