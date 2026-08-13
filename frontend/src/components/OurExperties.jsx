import React from 'react'
import { FaDatabase } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { VscTerminalSecure } from "react-icons/vsc";



export default function OurExperties() {
    return (
        <section className='flex flex-col items-center gap-4 p-2 py-20 container mx-auto'>
            <h1 className='font bold text-[34px] text-black'>Digital currency is our expertise</h1>
            <p className='font-["lato"] text-[16px] text-[#727272] text-center'>Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros</p>
            <div className='p-4 flex justify-between flex-wrap md:flex-nowrap gap-4'>
                <div className='group rounded-lg shadow-[0_0_8px_#aaaaaa] p-6 flex flex-col gap-6 items-center justify-between hover:bg-[linear-gradient(180deg,#7C00D9_0%,#4600B1_50%,#141778_100%)]'>
                    <div className='relative text-[#4545e6] group-hover:text-white text-[20px]'>
                        <FaDatabase />
                        <FaDatabase className='absolute top-2 right-2' />
                    </div>
                    <h2 className='font-bold text-[20px] text-black group-hover:text-white text-center'>Converts well, receive more</h2>
                    <p className='font-["lato"] text-[#727272] group-hover:text-white text-[16px] text-center'>Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend</p>
                    <span className='border-3 border-[#4545e6] group-hover:border-white rounded-4xl w-[25%] mx-auto' />
                </div>
                <div className='group rounded-lg shadow-[0_0_8px_#aaaaaa] p-6 flex flex-col gap-6 items-center justify-between hover:bg-[linear-gradient(180deg,#7C00D9_0%,#4600B1_50%,#141778_100%)]'>
                    <div className='relative text-[#4545e6] group-hover:text-white text-[30px]'>
                        <RiLightbulbFlashLine />
                    </div>
                    <h2 className='font-bold text-[20px] text-black group-hover:text-white text-center'>Transactions made easy with app use</h2>
                    <p className='font-["lato"] text-[#727272] group-hover:text-white text-[16px] text-center'>Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend</p>
                    <span className='border-3 border-[#4545e6] group-hover:border-white rounded-4xl w-[25%] mx-auto' />
                </div>
                <div className='group rounded-lg shadow-[0_0_8px_#aaaaaa] p-6 flex flex-col gap-6 items-center justify-between hover:bg-[linear-gradient(180deg,#7C00D9_0%,#4600B1_50%,#141778_100%)]'>
                    <div className='relative text-[#4545e6] group-hover:text-white text-[30px]'>
                        <VscTerminalSecure />
                    </div>
                    <h2 className='font-bold text-[20px] text-black group-hover:text-white text-center'>The most secured currency ever</h2>
                    <p className='font-["lato"] text-[#727272] group-hover:text-white text-[16px] text-center'>Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend</p>
                    <span className='border-3 border-[#4545e6] group-hover:border-white rounded-4xl w-[25%] mx-auto' />
                </div>
            </div>
        </section>
    )
}
