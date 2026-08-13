import React from 'react'

import InfoWithCart from '../../public/InfowithChart.png'
import chartplaceholder from '../../public/chartplaceholder.png'
import MarketReporterApp from './MarketReporterApp'

export default function InfoCart() {
    return (
        <div className='bg-[#F2F2FF]'>
            <section
                className="bg-cover bg-center py-42 text-white"
                style={{ backgroundImage: `url(${InfoWithCart})` }}
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center p-2">
                        <img
                            src={chartplaceholder}
                            alt="Chart Overview"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-2">
                        <h1 className="font-bold text-[30px] md:text-[34px] leading-snug text-white">
                            Bitcoin trades is a profitable technological tour force
                        </h1>

                        <div className="flex flex-col gap-5 py-8">
                            <div className="flex justify-between items-center whitespace-nowrap gap-4 font-bold text-[12px] text-white">
                                <p className="w-28 shrink-0">Secure Paid</p>
                                <div className="bg-white/30 h-2.5 w-full rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#FF6F33] h-full rounded-full transition-all duration-500"
                                        style={{ width: '85%' }}
                                    />
                                </div>
                                <span className="w-12 text-right shrink-0">150k</span>
                            </div>

                            <div className="flex justify-between items-center whitespace-nowrap gap-4 font-bold text-[12px] text-white">
                                <p className="w-28 shrink-0">Crowdfunding</p>
                                <div className="bg-white/30 h-2.5 w-full rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#FF6F33] h-full rounded-full transition-all duration-500"
                                        style={{ width: '60%' }}
                                    />
                                </div>
                                <span className="w-12 text-right shrink-0">450k</span>
                            </div>

                            <div className="flex justify-between items-center whitespace-nowrap gap-4 font-bold text-[12px] text-white">
                                <p className="w-28 shrink-0">Verified ICOs</p>
                                <div className="bg-white/30 h-2.5 w-full rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#FF6F33] h-full rounded-full transition-all duration-500"
                                        style={{ width: '70%' }}
                                    />
                                </div>
                                <span className="w-12 text-right shrink-0">20k</span>
                            </div>
                        </div>

                        <button className="bg-[#FF6F33] hover:bg-[#e05b22] px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-colors duration-300 shadow-md">
                            Read More
                        </button>
                    </div>
                </div>
            </section>
            <MarketReporterApp />
        </div>
    )
}