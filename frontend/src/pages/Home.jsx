import React from 'react'

import HeaderMain from '../components/HeaderMain'
import header from '../../public/Header.png'
import OurExperties from '../components/OurExperties'
import Differences from '../components/Differences'
import InfoCart from '../components/InfoCart'

export default function Home() {
    return (
        <main>
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${header})` }}
            >
                <HeaderMain />
            </div>
            <OurExperties />
            <Differences />
            <InfoCart />
        </main>
    )
}