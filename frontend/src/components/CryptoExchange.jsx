import React from 'react'
import { TiTick } from "react-icons/ti";
import { FaLink } from "react-icons/fa";
import { MdCurrencyBitcoin } from "react-icons/md";


import macImg from '../../public/macImg.png'

export default function CryptoExchange() {
    return (
        <div className='container mx-auto flex justify-between gap-4 py-8 flex-wrap md:flex-nowrap md:py-20'>
            <div className='w-full'>
                <div className='border-b black pb-8 p-2'>
                    <h1 className='font-bold text-[34px]'>Crypto Exchange Platform</h1>
                    <p className='font-bold text-[#1920E0]'>from June 2019</p>
                </div>
                <div>
                    <div className='space-y-4 py-8 p-2'>
                        <h1 className='font-bold text-[24px]'>Goal and Tasks:</h1>
                        <p className='font-["lato"] text-[#727272]'>Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque sed enim non, ullamcorper consequat sem. Pellentesque non erat massa</p>
                    </div>
                    <div className='flex flex-col py-4 p-2 gap-4 border-b-2'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='flex gap-2 items-center'>
                                <TiTick className='text-[#5F5FFF]' />
                                <span>Token and Wallet Creation/Development</span>
                            </h1>
                            <p className='font-["lato"] text-[#727272]'>Aliquam bibendum mi egestas mi tempus hendrerit lorem ipsum dolor </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='flex gap-2 items-center'>
                                <TiTick className='text-[#5F5FFF]' />
                                <span>Token and Wallet Creation/Development</span>
                            </h1>
                            <p className='font-["lato"] text-[#727272]'>Aliquam bibendum mi egestas mi tempus hendrerit lorem ipsum dolor </p>
                        </div>
                    </div>
                    <div className='space-y-4 py-8 p-2'>
                        <h1 className='font-bold text-[24px]'>Solutions and Results We get     </h1>
                        <p className='font-["lato"] text-[#727272]'>Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque sed enim non, ullamcorper consequat sem. Pellentesque non erat massa</p>
                        <span className='flex gap-2'><FaLink /><a className='text-[#1920E0] font-["lato"] font-bold' href="#">www.websiteexchange.com</a></span>
                    </div>
                </div>
            </div>
            <div className='w-full p-2 relative'>
                <div className='md:max-w-100 p-2 md:absolute bottom-30 left-10'>
                    <div className='bg-white p-4 shadow-[#aeabab] shadow-2xl rounded-lg space-y-4'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='font-bold'>Binance Smart Chain (BSC)</h1>
                                <p className='text-[#727272] font-["lato"] font-bold'>Market Online</p>
                            </div>
                            <div className='bg-amber-500 p-2 rounded-[50%] text-white'>
                                <MdCurrencyBitcoin />
                            </div>
                        </div>
                        <div className='text-[#5F5FFF] font-["lato"] font-bold border-b-2 py-2 flex gap-4 justify-center items-center'>
                            <span className='rounded-4xl bg-[#f1ebfa] p-2 block'>CoinDune</span>
                            <span className='rounded-4xl bg-[#f1ebfa] p-2 block'>CoinDune</span>
                            <span className='rounded-4xl bg-[#f1ebfa] p-2 block'>CoinDune</span>
                        </div>
                        <div className='flex gap-8 justify-center '>
                            <div>
                                <h3 className='font-["lato"] font-bold text-[#727272]'>Height</h3>
                                <p className='font-bold'>313968</p>
                            </div>
                            <div>
                                <h3 className='font-["lato"] font-bold text-[#727272]'>Availability</h3>
                                <p className='font-bold'>99.8%</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <button className='font-semibold text-[#4600B1] rounded-4xl border border-[#4600B1] w-full py-2'>More Info</button>
                            <button className='font-semibold text-[white] bg-[#4600B1] rounded-4xl border border-[#4600B1] w-full py-2'>Get Access App</button>
                        </div>
                    </div>
                </div>
                <img className='absolute top-0 -z-1 w-full hidden md:flex' src={macImg} alt="" />
            </div>
        </div>
    )
}
