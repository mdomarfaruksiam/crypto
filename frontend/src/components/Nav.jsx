import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";

import logo from "../../public/Logo.png";

export default function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about-us" },
        { text: "Services", href: "/services" },
        { text: "Pages", href: "/pages" },
        { text: "Blog", href: "/blog" },
        { text: "FAQ", href: "/faq" },
        { text: "Contact Us", href: "/contact-us" },
        { icon: FaUser, href: "/profile" },
    ];

    const handleNavigate = (href) => {
        navigate(href);
        setMenuOpen(false);
    };

    return (
        <header className="relative z-20">
            <nav className="bg-[#141778]">
                <div className="container mx-auto flex justify-between items-center p-4 relative">
                    <img
                        src={logo}
                        alt="neer logo"
                        className="h-10 cursor-pointer"
                        onClick={() => handleNavigate("/")}
                    />

                    <button
                        className="text-white text-2xl sm:hidden cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <ul
                        className={`
                            flex flex-col absolute top-full left-0 w-full bg-[#757aad]
                            sm:bg-transparent sm:static sm:flex-row sm:w-auto
                            transition-all duration-300 ease-in-out overflow-hidden
                            sm:overflow-visible items-center gap-2 sm:gap-4
                            text-[16px] font-bold
                            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"}
                        `}
                    >
                        {links.map((link, index) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.href;

                            return (
                                <li
                                    key={index}
                                    onClick={() => handleNavigate(link.href)}
                                    className={`cursor-pointer w-full sm:w-auto text-center sm:text-left px-4 py-3 sm:p-0 transition-colors duration-200 ${isActive ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
                                        }`}
                                >
                                    {Icon ? (
                                        <Icon className="mx-auto sm:mx-0 text-lg" />
                                    ) : (
                                        link.text
                                    )}

                                    {isActive && (
                                        <div className="h-1 bg-[#FFD700] mt-1 rounded-full" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}