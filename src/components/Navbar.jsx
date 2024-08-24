"use client";
import { LuUser2 } from "react-icons/lu";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const links = [
        { name: 'Home', path: '/' },
        { name: 'How Hilink Work ?', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/' },
        { name: 'Contact Us', path: '/' },
    ];

    return (
        <div className="navbar relative z-10  max-w-[1320px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className={activeLink === link.name ? 'active' : ''}
                                    onClick={() => setActiveLink(link.name)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl"><span>Hi</span><span className="-ml-2 text-[#30AF5B]">link.</span></a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.path}
                                className={activeLink === link.name ? 'active' : ''}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">

                <button className=" btn px-8 btn-lg bg-black text-white text-xl rounded-full">
                <LuUser2 />
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
