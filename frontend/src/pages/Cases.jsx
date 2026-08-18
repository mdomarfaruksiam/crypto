import React from 'react'
import Suggestions from '../components/Suggestions'
import CryptoExchange from '../components/CryptoExchange'
import PagePath from '../components/PagePath'
import RecenterProjects from '../components/RecenterProjects'

export default function Cases() {
    return (
        <main className=''>
            <PagePath path={'Our Cases'} />
            <CryptoExchange />
            <RecenterProjects />
            <div className='bg-[#F2F2FF] py-10'>
                <Suggestions />
            </div>
        </main>
    )
}
