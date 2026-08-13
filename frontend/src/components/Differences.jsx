import React from 'react'
import { TiTick } from "react-icons/ti";

import About from '../../public/About.png'
import ImgPlaceholder2 from '../../public/ImgPlaceholder2.png'

export default function Differences() {
    return (
        <section
            className='bg-cover bg-center py-20'
            style={{ backgroundImage: `url(${About})` }}>
            <div className='container mx-auto  flex flex-wrap md:flex-nowrap items-center'>
                <div className='w-full'>
                    <img src={`${ImgPlaceholder2}`} alt="" />
                </div>
                <div className='w-full flex flex-col gap-12 p-4'>
                    <h1 className='font-bold text-[34px] text-black text-center'>Enjoy The Difference</h1>
                    <p className='text-[16px] text-[#727272] text-center'>Maecenas sed elementum ligula, non posuere metus. Aliquam bibendum mi egestas mi tempus hendrerit vehicula pretium sem, porta suscipit erat maximum faucibus vel</p>
                    <div className='flex gap-2 text-nowrap'>
                        <div className='flex flex-col items-center border-r-2 border-[#727272] w-full'>
                            <span className='font-bold text-[24px] text-[#FF5851]'>200M+</span>
                            <span className='font-bold text-[12px] text-[#3E3D3D]'>Token Launches</span>
                        </div>
                        <div className='flex flex-col items-center border-r-2 border-[#727272] w-full'>
                            <span className='font-bold text-[24px] text-[#FF5851]'>100%</span>
                            <span className='font-bold text-[12px] text-[#3E3D3D]'>Instant Buy-In</span>
                        </div>
                        <div className='flex flex-col items-center w-full'>
                            <span className='font-bold text-[24px] text-[#FF5851]'>24/7</span>
                            <span className='font-bold text-[12px] text-[#3E3D3D]'>Market Places</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[16px] font-bold text-black flex items-center gap-2'>
                                <TiTick className='text-[#5F5FFF] text-[24px]' />
                                <span>Solid variety of altcoin choices:</span>
                            </h1>
                            <p className='font-["lato"] text-[16px] text-[#727272]'>Aliquam bibendum mi egestas mi tempus hendrerit lorem ipsum dolor </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[16px] font-bold text-black flex items-center gap-2'>
                                <TiTick className='text-[#5F5FFF] text-[24px]' />
                                <span>Extremely simple user interface:</span>
                            </h1>
                            <p className='font-["lato"] text-[16px] text-[#727272]'>Elementum ligula, non posuere metus. Aliquam bibendum mi egestas mi tempus hendrerit</p>
                        </div>
                    </div>
                    <button className='bg-[#FF6F33] p-4 px-8 rounded-4xl font-semibold text-sm text-white max-w-50'>
                        Read More
                    </button>
                </div>
            </div>
        </section>
    )
}
