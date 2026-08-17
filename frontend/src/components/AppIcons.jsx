import React from 'react'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

import ImgPlaceholder2 from '../../public/ImgPlaceholder2.png'

export default function HeroShowcase() {
    return (
        <section className='w-full overflow-hidden'>
            <div className='mx-auto max-w-7xl flex items-center justify-center'>
                <div className='relative h-160 w-full max-w-6xl'>

                    {/* Outer dashed ring */}
                    <div className='absolute left-1/2 top-1/2 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/30' />

                    {/* Inner ring */}
                    <div className='absolute left-1/2 top-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20' />

                    {/* Center phone image */}
                    <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
                        <img
                            src={ImgPlaceholder2}
                            alt='App screens'
                            className='h-140 w-auto drop-shadow-2xl'
                        />
                    </div>

                    {/* Left large card */}
                    <div className='absolute left-0 top-30 z-20 w-96 rounded-3xl border border-violet-500/40 bg-white p-6 shadow-2xl'>
                        <div className='mb-4 flex items-start justify-between'>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900'>
                                    Bitcoin (BTC)
                                </h3>
                                <p className='text-sm text-gray-500'>
                                    Market online
                                </p>
                            </div>

                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white'>
                                <FaBitcoin className='text-xl' />
                            </div>
                        </div>

                        <div className='mb-5 flex gap-2 text-xs'>
                            <span className='rounded-full bg-violet-100 px-3 py-1 text-violet-700'>
                                CoinDune
                            </span>
                            <span className='rounded-full bg-violet-100 px-3 py-1 text-violet-700'>
                                BitNet
                            </span>
                            <span className='rounded-full bg-violet-100 px-3 py-1 text-violet-700'>
                                Coin Market
                            </span>
                        </div>

                        <div className='mb-5 border-t border-gray-200 pt-5'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-sm text-gray-500'>
                                        Height
                                    </p>
                                    <p className='mt-1 text-2xl font-bold text-gray-900'>
                                        793968
                                    </p>
                                </div>

                                <div>
                                    <p className='text-sm text-gray-500'>
                                        Availability
                                    </p>
                                    <p className='mt-1 text-2xl font-bold text-gray-900'>
                                        99.3%
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <button className='flex-1 rounded-full border border-violet-500 px-4 py-3 font-semibold text-violet-600 hover:bg-violet-50'>
                                More info
                            </button>

                            <button className='flex-1 rounded-full bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-700'>
                                Get access app
                            </button>
                        </div>
                    </div>

                    {/* Top right image card */}
                    <div className='absolute right-10 top-10 z-20 h-44 w-44 rounded-3xl border border-violet-500/40 bg-white p-4 shadow-2xl'>
                        <div className='h-full w-full rounded-2xl bg-gray-100 flex items-center justify-center'>
                            <div className='h-20 w-20 rounded-full bg-gray-200' />
                        </div>
                    </div>

                    {/* Bottom left image card */}
                    <div className='absolute bottom-10 left-10 z-20 h-40 w-40 rounded-3xl border border-violet-500/40 bg-white p-4 shadow-2xl'>
                        <div className='h-full w-full rounded-2xl bg-gray-100 flex items-center justify-center'>
                            <div className='h-16 w-16 rounded-full bg-gray-200' />
                        </div>
                    </div>

                    {/* Floating upload button */}
                    <div className='absolute right-64 top-1/2 z-30 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-3xl bg-violet-500 text-white shadow-2xl'>
                        <FiArrowUp className='text-3xl' />
                    </div>

                    {/* Bottom right Ethereum card */}
                    <div className='absolute bottom-24 right-0 z-20 w-72 rounded-3xl border border-violet-500/40 bg-white p-5 shadow-2xl'>
                        <div className='mb-4 flex items-start justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900'>
                                    Ethereum (ETH)
                                </h3>
                                <p className='text-xs text-gray-500'>
                                    Market online
                                </p>
                            </div>

                            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white'>
                                <FaEthereum />
                            </div>
                        </div>

                        <div className='mb-4 flex gap-1 text-[10px]'>
                            <span className='rounded-full bg-violet-100 px-2 py-1 text-violet-700'>
                                CoinDune
                            </span>
                            <span className='rounded-full bg-violet-100 px-2 py-1 text-violet-700'>
                                BitNet
                            </span>
                            <span className='rounded-full bg-violet-100 px-2 py-1 text-violet-700'>
                                Coin Market
                            </span>
                        </div>

                        <div className='mb-4 flex justify-between text-sm'>
                            <div>
                                <p className='text-gray-500'>
                                    Height
                                </p>
                                <p className='font-bold text-gray-900'>
                                    1233968
                                </p>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Availability
                                </p>
                                <p className='font-bold text-gray-900'>
                                    97.6%
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <button className='flex-1 rounded-full border border-violet-500 px-3 py-2 text-xs font-semibold text-violet-600'>
                                More info
                            </button>

                            <button className='flex-1 rounded-full bg-violet-600 px-3 py-2 text-xs font-semibold text-white'>
                                Get access app
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}