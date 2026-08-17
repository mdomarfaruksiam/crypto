import React from 'react'

export default function Subscription() {
    return (
        <section className='bg-[#F2F2FF]'>
            <div className='container m-auto flex flex-col gap-6 py-20'>
                <h1 className='font-bold text-[20px] text-[#1920E0] text-center'>Get crypto analysis, news and updates</h1>
                <p className='font-bold text-[28px] text-center'>Sign up here so you don't miss a single newsletter</p>
                <div className='rounded m-2 flex justify-center items-center'>
                    <input type="email" placeholder='Your Email' className='p-2 px-4 rounded-l-2xl border border-r-0 border-[#AEADAD]' />
                    <button className='rounded-r-2xl border border-l-0 border-[#AEADAD] bg-[#FF357D] p-2 text-[#FFFFFF] font-bold'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}
