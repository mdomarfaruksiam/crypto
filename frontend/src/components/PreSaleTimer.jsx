import React from 'react'

export default function PreSaleTimer() {
    return (
        <div className='text-white rounded-md flex flex-col gap-4 p-4'>
            <p className='text-5 text-center text-[#C9B5E5] font-bold'>Pre-Sale ICO starts in</p>
            <div className='flex justify-around'>
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>46</span>
                    <span className='text-[#C9B5E5] font-bold text-xs'>Days</span>
                </div>:
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>12</span>
                    <span className='text-[#C9B5E5] font-bold text-xs'>Hours</span>
                </div>:
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>05</span>
                    <span className='text-[#C9B5E5] font-bold text-xs'>Min</span>
                </div>:
                <div className='flex flex-col items-center'>
                    <span className='text-[#FF5851] font-bold text-2xl'>56</span>
                    <span className='text-[#C9B5E5] font-bold text-xs'>Sec</span>
                </div>
            </div>
        </div>
    )
}
