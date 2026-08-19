import React from 'react'

import { FaChartArea, FaDatabase, FaRegLightbulb } from "react-icons/fa";
import { RiCertificate2Fill, RiLightbulbFlashLine } from "react-icons/ri";
import { VscTerminalSecure, VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineHealthAndSafety } from "react-icons/md";


export default function BlockChainSolutions() {

    const items = [
        {
            icon: FaDatabase,
            head: 'Blockchain Trade Finance Solutions',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
        {
            icon: VscWorkspaceTrusted,
            head: 'The most secured currency ever',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
        {
            icon: RiCertificate2Fill,
            head: 'Secure Blockchain Technology',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
        {
            icon: MdOutlineHealthAndSafety,
            head: 'The most secured currency ever',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
        {
            icon: FaRegLightbulb,
            head: 'Secure Blockchain Technology',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
        {
            icon: FaChartArea,
            head: 'The most secured currency ever',
            para: 'Aenean varius ultricies dapibus. Vivamus et tortor et libero cursus facilisis et a tortor. Etiam eleifend eleifend'
        },
    ]

    return (
        <div className='pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {items.map((item, index) => {
                const Icon = item.icon

                return (
                    <div
                        key={index}
                        className='group rounded-lg shadow-[0_0_8px_#aaaaaa] p-6 flex flex-col gap-6 items-center justify-between hover:bg-[linear-gradient(180deg,#7C00D9_0%,#4600B1_50%,#141778_100%)]'
                    >
                        <div className='relative text-[#4545e6] group-hover:text-white text-[30px]'>
                            <Icon />
                        </div>

                        <h2 className='font-bold text-[20px] text-black group-hover:text-white text-center'>
                            {item.head}
                        </h2>

                        <p className='font-["lato"] text-[#727272] group-hover:text-white text-[16px] text-center'>
                            {item.para}
                        </p>

                        <span className='border-3 border-[#4545e6] group-hover:border-white rounded-4xl w-[25%] mx-auto' />
                    </div>
                )
            })}
        </div>
    )
}
