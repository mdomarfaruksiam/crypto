import React from 'react'
import PagePath from '../components/PagePath'
import BlockChainSolutions from '../components/BlockChainSolutions'
import MarketingPlan from '../components/MarketingPlan'
import PricePlans from '../components/PricePlans'
import CustomresFeedBack from '../components/CustomresFeedBack'

export default function Prices() {
    return (
        <main>
            <PagePath path={'Prices and Solutions'} />
            <div className='container mx-auto p-4'>
                <h1 className='font-bold text-[34px] text-center'>
                    Blockchain solutions
                </h1>

                <p className='font-["lato"] text-[#727272] text-center'>
                    Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus,
                    sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus
                    metus id, dignissim malesuada eros. Aenean mattis nisl sit amet. vestibulum
                    in erat et dapibus
                </p>
                <BlockChainSolutions />
            </div>
            <div className='container mx-auto p-2 py-20 flex flex-col justify-between gap-8 items-center relative'>
                <MarketingPlan />
            </div>
            <PricePlans />
            <CustomresFeedBack />
        </main>
    )
}