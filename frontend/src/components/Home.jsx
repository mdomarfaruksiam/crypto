import React from 'react'

import HeaderMain from './HeaderMain'
import header from '../../public/Header.png'
import OurExperties from './OurExperties'

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
        </main>
    )
}