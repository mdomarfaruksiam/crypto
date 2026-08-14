import React from 'react'

import TimeLine from '../../public/Timeline.png'
import { FaDatabase, FaUser } from 'react-icons/fa'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import AppIcons from './AppIcons'

export default function MarketReporterApp() {
    return (
        <section className='container mx-auto p-2 py-20 flex flex-col items-center gap-20'>
            <div className=' flex flex-col items-center gap-10'>
                <h1 className='font-bold text-[34px] text-black text-center'>Market Reporter App</h1>
                <p className='font-["lato"] text-center text-[#727272]'>Phasellus sodales est id sapien condimentum sagittis. Vivamus eget lorem augue. Nunc ut diam tellus. Fusce mattis luctus sem, sollicitudin tincidunt ante ullamcorper non. Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus</p>
                <div className='flex flex-row sm:flex-col gap-8 sm:gap-4 min-h-120 sm:min-h-auto px-10'>
                    <div className='flex flex-col sm:flex-row justify-between items-center sm:px-15'>
                        <div className='relative text-[#ffffff] group-hover:text-white text-[15px] p-2 bg-[#f2aeac] rounded-[50%] w-14 h-14 flex justify-center items-center'>
                            <div className='bg-[#FF5851] p-2 rounded-[50%] relative w-10 h-10'>
                                <FaDatabase className='absolute bottom-2 left-2' />
                                <FaDatabase className='absolute top-2 right-2' />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center h-full sm:w-full m-2'>
                            <span className='w-2 h-2 bg-[#979797] rounded-[50%]' />
                            <span className='border-2 border-[#979797] h-full sm:w-full' />
                            <span className='w-2 h-2 bg-[#979797] rounded-[50%]' />
                        </div>
                        <div className='relative text-[#ffffff] group-hover:text-white text-[40px] p-2 bg-[#f2aeac] rounded-[50%] w-14'>
                            <RiLightbulbFlashLine className='bg-[#FF5851] p-2 rounded-[50%]' />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center h-full sm:w-full m-2'>
                            <span className='w-2 h-2 bg-[#979797] rounded-[50%]' />
                            <span className='border-2 border-[#979797] h-full sm:w-full' />
                            <span className='w-2 h-2 bg-[#979797] rounded-[50%]' />
                        </div>
                        <div className='relative text-[#ffffff] group-hover:text-white text-[40px] p-2 bg-[#f2aeac] rounded-[50%] w-14'>
                            <FaUser className='bg-[#FF5851] p-2 rounded-[50%]' />
                        </div>
                    </div>
                    <div className='font-bold text-[16px] py-3 sm:p-0 flex flex-col sm:flex-row justify-between gap-10 sm:text-center'>
                        <p>Get App & Register for an ICO</p>
                        <p>The minimal amount that you can invest</p>
                        <p>Trade on the spot market</p>
                    </div>
                </div>
            </div>
            <AppIcons />
            <div className='flex flex-col text-center items-center justify-between gap-4 md:w-[50%]'>
                <h1 className='text-[20px] font-bold text-black'>Pre-sale has already started</h1>
                <p>Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus </p>
                <button className='bg-[#FF6F33] p-4 px-8 rounded-4xl font-semibold text-sm text-white'>
                    Get Free Trial App
                </button>
            </div>
        </section>
    )
}
