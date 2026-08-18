import React from 'react'
export default function PagePath({ path }) {
    return (
        <div className='bg-[linear-gradient(to_right,#141778_0%,#550096_50%,#550096_100%)] py-12 space-y-5'>
            <h1 className='text-center text-white text-[34px] font-bold'>{path}</h1>
            <p className='text-center text-white font-["lato"] space-x-1'>
                <span>Home</span>
                <span>{`>`}</span>
                <span className='text-[#C9B5E5]'>{path}</span>
            </p>
        </div>
    )
}
