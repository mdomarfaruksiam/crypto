import React from 'react'
import SubscribeMail from './SubscribeMail'

export default function Subscription() {
    return (
        <section className='bg-[#F2F2FF]'>
            <div className='container m-auto flex flex-col gap-6 py-20'>
                <h1 className='font-bold text-[20px] text-[#1920E0] text-center'>Get crypto analysis, news and updates</h1>
                <p className='font-bold text-[28px] text-center'>Sign up here so you don't miss a single newsletter</p>
                <SubscribeMail />
            </div>
        </section>
    )
}
