import React, { useState } from "react"
import { FaUser, FaBars, FaTimes } from "react-icons/fa"
import { useNavigate, useLocation } from "react-router"

import logo from "../../public/Logo.png"

export default function Nav() {
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about-us" },
        { text: "Services", href: "/services" },
        { text: "Pages", href: "/pages" },
        { text: "Blog", href: "/blog" },
        { text: "Cases", href: "/our-cases" },
        { text: "FAQ", href: "/faq" },
        { text: "Contact Us", href: "/contact-us" },
        { icon: FaUser, href: "/profile" },
    ]

    const handleNavigate = (href) => {
        navigate(href)
        setMenuOpen(false)
    }

    return (
        <header className="relative z-20">
            <nav className="bg-[#141778]">
                <div className="container mx-auto flex justify-between items-center p-4 relative">

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="neer logo"
                        className="h-10 cursor-pointer"
                        onClick={() => handleNavigate("/")}
                    />

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="text-white text-2xl md:hidden cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation */}
                    <ul
                        className={`
                            flex flex-col absolute top-full left-0 w-full
                            bg-[#757aad] text-nowrap

                            md:bg-transparent md:static md:flex-row md:w-auto
                            md:overflow-visible

                            transition-all duration-300 ease-in-out
                            overflow-hidden

                            items-center gap-4
                            text-[16px] font-bold

                            ${menuOpen
                                ? "max-h-150 opacity-100"
                                : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                            }
                        `}
                    >
                        {links.map((link, index) => {
                            const Icon = link.icon
                            const isActive = location.pathname === link.href

                            return (
                                <li
                                    key={index}
                                    onClick={() => handleNavigate(link.href)}
                                    className={`
                                        cursor-pointer
                                        w-full md:w-auto

                                        px-4 py-3 md:p-0

                                        text-left md:text-center

                                        transition-colors duration-200

                                        ${isActive
                                            ? "text-[#FFD700]"
                                            : "text-white hover:text-[#FFD700]"
                                        }
                                    `}
                                >
                                    {Icon ? (
                                        <div className="flex justify-start md:justify-center">
                                            <Icon
                                                className={`
                                                    text-lg
                                                    h-10 md:h-auto
                                                    w-auto
                                                    py-2 md:py-0
                                                `}
                                            />
                                        </div>
                                    ) : (
                                        link.text
                                    )}

                                    {isActive && (
                                        <div className="h-1 bg-[#FFD700] mt-1 rounded-full" />
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}