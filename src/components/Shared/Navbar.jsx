import Link from 'next/link';
import React from 'react';
import { LuUser2 } from "react-icons/lu";


const Navbar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Link', path: '/' },
        { title: 'Service', path: '/' },
        { title: 'Pricing', path: '/' },
        { title: 'Contact', path: '/' }
    ]
    return (
        <div className='relative max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navLinks.map((nav) => (
                                    <li key={nav.title}>
                                        <Link href={nav.path} passHref>
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl"><span className='text-[#292C27]'>Hi</span> <span className='text-[#30AF5B] -ml-2'>Link</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks.map((nav) => (
                                <li key={nav.title}>
                                    <Link href={nav.path} passHref>
                                        {nav.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className=" flex items-center gap-2 rounded-full !bg-black p-4 px-8 text-white ">
                        <LuUser2 className='text-2xl '></LuUser2>
                        <span className='text-xl font-bold'>Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
};



export default Navbar;