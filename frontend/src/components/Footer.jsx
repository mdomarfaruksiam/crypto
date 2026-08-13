import React, { useState } from 'react'
import { IoCall, IoLocation, IoMail } from "react-icons/io5";


import logo from '../../public/Logo.png'
import { Link } from 'react-router';


export default function Footer() {
    const [links, setLinks] = useState([
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/about-us' },
        { text: 'Services', href: '/services' },
        { text: 'Pages', href: '/pages' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact Us', href: '/contact-us' }
    ])
    return (
        <footer className='py-10 text-white bg-[#550096]'>
            <div className='container mx-auto flex justify-evenly flex-wrap md:flex-nowrap item-center gap-10'>
                <div className="flex flex-col gap-4 p-2 w-full">
                    <img className='max-w-30' src={logo} alt="logo neer" />
                    <div className='flex flex-col justify-between gap-4 p-2'>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 text-sm'>
                                <IoMail className='text-[#FF5851]' />
                                <span>m.omarfaruksiam@gmail.com</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <IoCall className='text-[#FF5851]' />
                                <span>+880 1970 608472</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <IoLocation className='text-[#FF5851]' />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://maps.app.goo.gl/bgiKpnkkSdkxQGxR8'>Ranabhola, Road-03, Uttara, Turag, Dhaka-1711</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full'>
                    <h1 className='font-bold text-[24px]'>Company</h1>
                    <div className='p-2'>
                        <ul className='flex flex-col gap-4 font-["lato"] font-bold text-[16px]'>
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer text-left`}
                                >
                                    <Link to={link.href}>{link.text}</Link>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full'>
                    <h1 className='text-white font-bold text-[24px]'>Recent News</h1>
                    <div className='border-b border-[#AEADAD] flex flex-col gap-2 p-2'>
                        <p className='font-bold text-[16px]'>Crypto PR: The good, the bad and the shoddy</p>
                        <div className='font-["lato"] text-[14px] text-[#AEADAD]'>
                            <span>Published on: </span>
                            <span>June 10, 2016</span>
                        </div>
                    </div>
                    <div className='border-b border-[#AEADAD] flex flex-col gap-2 p-2'>
                        <p className='font-bold text-[16px]'>How to build an exemplary crypto exchange…</p>
                        <div className='font-["lato"] text-[14px] text-[#AEADAD]'>
                            <span>Published on: </span>
                            <span>June 8, 2016</span>
                        </div>
                    </div>
                    <div className='border-b border-[#AEADAD] flex flex-col gap-2 p-2'>
                        <p className='font-bold text-[16px]'>Ethereum’s Ist Hard Fork, Important Updates…</p>
                        <div className='font-["lato"] text-[14px] text-[#AEADAD]'>
                            <span>Published on: </span>
                            <span>June 7, 2016</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
