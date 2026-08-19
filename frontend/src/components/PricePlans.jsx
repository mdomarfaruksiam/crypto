import React from 'react'
import ImgPlaceholder from '../../public/ImgPlaceholder.png'
import { TiTick } from 'react-icons/ti'

export default function PricePlans() {

    const plans = [
        {
            name: 'Startups',
            price: '$12.99',
        },
        {
            name: 'Business',
            price: '$29.99',
        },
        {
            name: 'Enterprise',
            price: '$49.99',
        }
    ]

    const features = [
        {
            title: 'Mobile App',
            description:
                'Aliquam bibendum mi egestas mi tempus hendrerit lorem ipsum dolor'
        },
        {
            title: 'Free Marketing Plan',
            description:
                'Praesent ultrices tellus sed sapien imperdiet, vel aliquam orci pharetra'
        },
        {
            title: '24/7 Support',
            description:
                'Praesent ultrices tellus sed sapien imperdiet, vel aliquam orci pharetra'
        }
    ]

    return (
        <div className="bg-[#F5F5FF] py-8 md:py-12">
            <h1 className="font-bold text-[28px] md:text-[34px] text-center mb-8">
                Prices Plans
            </h1>
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-stretch justify-center">

                {plans.map((plan, index) => (

                    <div
                        key={index}
                        className="
                            w-full md:w-1/3
                            flex flex-col
                            items-center
                            gap-4
                            p-4
                            bg-white
                            rounded-lg
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-3
                            hover:shadow-2xl
                            hover:scale-[1.02]
                        "
                    >
                        <img
                            className="w-full max-w-60 h-auto"
                            src={ImgPlaceholder}
                            alt={`${plan.name} plan`}
                        />
                        <div className="flex flex-col justify-center items-center gap-2 p-4">

                            <h2 className="font-bold text-xl">
                                {plan.name}
                            </h2>

                            <p className="font-bold text-[28px] md:text-[34px] text-[#FF5851]">
                                {plan.price}
                                <span className="text-base text-[#727272]">
                                    {' '} /mo
                                </span>
                            </p>

                        </div>
                        <div className="w-full flex flex-col p-4">

                            {features.map((feature, featureIndex) => (

                                <div
                                    key={featureIndex}
                                    className="flex flex-col items-center text-center gap-2"
                                >

                                    <TiTick
                                        size={28}
                                        className="text-[#FF5851]"
                                    />

                                    <h3 className="font-bold">
                                        {feature.title}
                                    </h3>

                                    <p className='font-["lato"] text-[#727272] leading-6'>
                                        {feature.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>
            <div className='container mx-auto p-4'>
                <div className='bg-[#7b60c6] w-30 h-1 mx-auto my-8 rounded-4xl' />
                <p className='font-["lato"] text-[#727272] text-center md:w-[50%] mx-auto'>Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros. Aenean mattis nisl sit amet vestibulum in erat et dapibus. Morbi tortor elit, rhoncus</p>
            </div>
        </div>
    )
}