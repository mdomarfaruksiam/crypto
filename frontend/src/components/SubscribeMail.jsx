import React from 'react'

export default function SubscribeMail() {
    return (
        <div className='rounded m-2 flex justify-center items-center'>
            <input type="email" placeholder='Your Email' className='p-2 px-4 rounded-l-2xl border border-r-0 border-[#AEADAD]' />
            <button className='rounded-r-2xl border border-l-0 border-[#AEADAD] bg-[#FF357D] p-2 text-[#FFFFFF] font-bold'>Subscribe</button>
        </div>
    )
}
