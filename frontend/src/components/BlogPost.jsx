import React from 'react'

import { FaArrowRight, FaSearch } from "react-icons/fa"


import ImgPlaceholder from '../../public/ImgPlaceholder2.png'
import Button from '../utils/Button';

export default function BlogPost() {
    return (
        <div className='p-4 flex flex-col items-center justify-center max-w-120'>
            <img className='bg-[#bdbaba] rounded-lg w-full' src={ImgPlaceholder} alt="" />
            <div className='p-2 space-y-4'>
                <div className='font-bold font-["lato"] text-[14px] flex justify-between'>
                    <div className='flex gap-2'>
                        <span>By</span>
                        <span className='text-[#1920E0]'> R. Brandon</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='text-[#727272]'>Published on:</span>
                        <span>June 8, 2021</span>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-[16px] md:text-[28px]'>What Will the Stock Market Do Today? 3 Big Stories to Watch</h2>
                    <p className='text-[#727272] font-["lato"]'>Aliquam a ultrices massa, in ornare velit. Nam posuere auctor leo, ac feugiat sem. Proin efficitur, sapien nec cursus gravida, massa dui elementum mi, vitae lacinia tortor urna vel eros. Maecenas ornare mi ut facilisis lacinia</p>
                </div>
                <button className='flex items-center gap-2 text-[#1920E0] font-bold font-["lato"]'>Read More <FaArrowRight /></button>
            </div>
        </div>
    )
}
