import React from 'react'

import { FaSearch } from "react-icons/fa";


import ImgPlaceholder from '../../public/ImgPlaceholder2.png'
import Input from '../utils/Input';
import Button from '../utils/Button';
import PreSaleTimer from '../components/PreSaleTimer';

export default function BlogSearch() {
    return (

        <div className='md:sticky md:top-10 md:self-start w-[80%] md:w-auto mx-auto overflow-y-auto md:order-2 order-1'>
            <div className='flex bg-[#F5F5FF] border-2 border-[#dbdbe5] rounded-4xl'>
                <Input
                    type='text'
                    placeholder={'Search for'}
                    className='border-transparent' />
                <Button
                    label={<FaSearch />}
                    className='bg-transparent text-[#1920E0]' />
            </div>
            <div className='space-y-6 pt-10 md:flex hidden'>
                <h1 className='font-bold'>Recent Posts:</h1>
                <div className='flex items-center gap-4 border-b-2 border-[#E9E9E9] py-4'>
                    <img className='w-20 h-auto' src={ImgPlaceholder} alt="" />
                    <div className='space-y-2'>
                        <h2 className='font-bold'>Coinbase Dogecoin Sweepstakes: What to Know About the $1.2M DOGE Giveaway</h2>
                        <div className='font-bold font-["lato"] text-[14px] flex gap-4'>
                            <div className='flex gap-2'>
                                <span>By</span>
                                <span className='text-[#1920E0]'> R. Brandon</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[#727272]'>Published on:</span>
                                <span>June 8, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5FF] rounded-2xl mt-4'>
                <img className='max-w-100 w-full m-auto' src={ImgPlaceholder} alt="" />
                <PreSaleTimer />
            </div>
        </div>
    )
}
