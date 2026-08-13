import React, { useState } from 'react'
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router'


import logo from '../../public/Logo.png'

export default function Nav() {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const [links, setLinks] = useState([
        { text: 'Home', href: '/', active: true },
        { text: 'About Us', href: '/about-us', active: false },
        { text: 'Services', href: '/services', active: false },
        { text: 'Pages', href: '/pages', active: false },
        { text: 'Blog', href: '/blog', active: false },
        { text: 'Contact Us', href: '/contact-us', active: false },
        { icon: FaUser, href: '/profile', active: false },
    ])

    const updateActiveLink = (e, index) => {
        e.preventDefault()

        const updatedLinks = links.map((l, i) => ({
            ...l,
            active: i === index,
        }))

        setLinks(updatedLinks)
        navigate(links[index].href)
        setMenuOpen(false)
    }

    return (
        <header>
            <nav className='bg-[#141778]'>
                <div className='container mx-auto flex justify-between items-center p-4 relative'>
                    <img src={logo} alt='neer logo' className='h-10' />

                    {/* Hamburger button (mobile only) */}
                    <button
                        className='text-white text-2xl sm:hidden cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation menu */}
                    <ul
                        className={`${menuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-[#141778] sm:flex sm:flex-row sm:static sm:w-auto sm:bg-transparent items-center sm:gap-4 text-white text-[16px] font-bold`}
                    >
                        {links.map((link, index) => {
                            const Icon = link.icon

                            return (
                                <li
                                    key={index}
                                    onClick={(e) => updateActiveLink(e, index)}
                                    className={`cursor-pointer w-full sm:w-auto text-center sm:text-left px-4 py-3 sm:p-0  ${link.active ? 'text-[#FFD700]' : 'text-white'} ${index % 2 === 0 ? 'bg-[#0f1260]  sm:bg-transparent' : ''} flex flex-col gap-1`}>
                                    {Icon ? <Icon className='mx-auto sm:mx-0' /> : link.text}
                                    <span className={`${link.active ? 'border border-[#FFD700]' : 'hidden'}`} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}