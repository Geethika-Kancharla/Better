"use client";
import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';
import { FaPhoneAlt } from "react-icons/fa";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 w-screen z-50 ${scrolled ? 'bg-white' : 'bg-[#004733]'} transition-colors duration-300`}>
            <nav className="flex justify-between p-2">
                <div className="flex space-x-3 p-2">
                    <p className={`text-3xl ${scrolled ? 'text-black' : 'text-white'}`}>Better</p>
                    <div className="hidden lg:flex space-x-3">
                        {/* Main Navigation Links */}
                        <div className="relative lg:pt-2">
                            <div className="hidden lg:flex space-x-3">
                                <div className="relative group">
                                    <a
                                        href=""
                                        className={`lg:p-4 rounded-3xl hover:bg-white hover:text-green-900 lg:text-xl ${scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Buy
                                    </a>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-6 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-80 space-y-3">
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Purchase Rates</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Affordability calculator</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Mortgage calculator</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Rent vs buy calculator</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Find an agent</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">VA loans</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Learning center</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:pt-2">
                            {/* Main Navigation Links */}
                            <div className="hidden lg:flex space-x-3">
                                <div className="relative group">
                                    <a
                                        href=""
                                        className={`lg:p-4 rounded-3xl hover:bg-white hover:text-green-900 lg:text-xl ${scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Refinance

                                    </a>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-6 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-80 space-y-3">
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Refinance Rates</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Cash-out refinance calculator</a>

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Learning center</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="relative lg:pt-2">
                            {/* Main Navigation Links */}
                            <div className="hidden lg:flex space-x-3">
                                <div className="relative group">
                                    <a
                                        href=""
                                        className={`lg:p-4 rounded-3xl hover:bg-white hover:text-green-900 lg:text-xl ${scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        HELOC

                                    </a>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-6 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-80 space-y-3">
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Calculate your Cash</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">HELOC vs. Cash-out-Refinance</a>

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Learning center</a>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="relative lg:pt-2">
                            {/* Main Navigation Links */}
                            <div className="hidden lg:flex space-x-3">
                                <div className="relative group">
                                    <a
                                        href=""
                                        className={`lg:p-4 rounded-3xl hover:bg-white hover:text-green-900 lg:text-xl ${scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Rates

                                    </a>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-6 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-80 space-y-3">

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Purchase Mortage Rates</a>

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Refinance rates</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Refinance cash-out-rates</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">HELOC rates</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Purchase VA rates</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="relative lg:pt-2">
                            {/* Main Navigation Links */}
                            <div className="hidden lg:flex space-x-3">
                                <div className="relative group">
                                    <a
                                        href=""
                                        className={`lg:p-4 rounded-3xl hover:bg-white hover:text-green-900 lg:text-xl ${scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Better+

                                    </a>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-6 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-80 space-y-3">

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Get Insurance</a>

                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Title and Closing</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Better Attorney Match</a>
                                        <a href="" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
                                        <div className='flex space-x-3'>
                                            <a href="" className="block px-4 py-2 hover:bg-gray-100">Better Agent Match</a>
                                            <button className='bg-yellow-500 rounded-3xl px-3 text-sm'>For Agents</button>
                                        </div>
                                        <div className='flex space-x-3 pb-4'>
                                            <a href="" className="block px-4 py-2 hover:bg-gray-100">Better Duo</a>
                                            <button className='bg-yellow-500 rounded-3xl px-3 text-sm'>For Agents</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* More links with similar structure */}
                    </div>
                </div>
                <div className="flex p-2 space-x-3 lg:space-x-10">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border ${scrolled ? 'border-black' : 'border-white'}`}>
                        <FaPhoneAlt className={`text-2xl ${scrolled ? 'text-black' : 'text-white'}`} />
                    </div>
                    <p className={`hidden lg:flex lg:py-2 lg:pr-10 ${scrolled ? 'text-black' : 'text-white'}`}>Sign in</p>
                    <button onClick={toggleMenu} className={`p-2 lg:hidden text-3xl ${scrolled ? 'text-black' : 'text-white'}`}>
                        {menuOpen ? <IoMdClose /> : <LuAlignJustify />}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="fixed h-screen inset-0  bg-white flex flex-col">
                    <div className="flex justify-between items-center p-4">
                        <div className="text-black text-3xl font-bold">Better</div>
                        <button onClick={toggleMenu} className="text-black text-3xl mb-4">
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="flex flex-col p-4 flex-grow space-y-4">

                        <div className="flex justify-between items-center py-2">
                            <a href="" className="text-black text-xl">Buy</a>
                            <BiChevronDown className="text-black text-xl" />
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <a href="" className="text-black text-xl">Refinance</a>
                            <BiChevronDown className="text-black text-xl" />
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <a href="" className="text-black text-xl">HELOC</a>
                            <BiChevronDown className="text-black text-xl" />
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <a href="" className="text-black text-xl">Rates</a>
                            <BiChevronDown className="text-black text-xl" />
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <a href="" className="text-black text-xl">Better+</a>
                            <BiChevronDown className="text-black text-xl" />
                        </div>
                        <div className="flex items-center justify-center space-x-2 w-full bg-green-100 rounded-3xl p-2 text-black">
                            <FaPhone className="text-xl" />
                            <button className="text-center">Call us anytime at (415) 523 8837</button>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 space-y-2">

                        <div className="flex flex-col items-center justify-center space-x-2 w-full bg-green-300 rounded-3xl p-2 text-black">
                            <p>Get started</p>
                            <p>3min | No credit impact</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-x-2 w-full rounded-3xl p-2 text-black border border-green-200">
                            <p>Sign in</p>

                        </div>


                    </div>
                </div>
            )}
        </div>

    )
}