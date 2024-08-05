"use client"
import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';

const page = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex flex-col'>
            <div className="fixed top-0 w-screen z-50 bg-white">
                <nav className="flex justify-between p-2">
                    <div className="flex space-x-3 p-2">
                        <p className="text-3xl text-black">Better</p>
                        <div className="hidden lg:flex space-x-3">
                            {/* Main Navigation Links */}
                            <div className="relative lg:pt-2">
                                <div className="hidden lg:flex space-x-3">
                                    <div className="relative group">
                                        <a
                                            href=""
                                            className="lg:p-4 rounded-3xl hover:bg-gray-100 hover:text-green-900 lg:text-xl text-black"
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
                                            className="lg:p-4 rounded-3xl hover:bg-gray-100 hover:text-green-900 lg:text-xl text-black"
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
                                            className="lg:p-4 rounded-3xl hover:bg-gray-100 hover:text-green-900 lg:text-xl text-black"
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
                                            className="lg:p-4 rounded-3xl hover:bg-gray-100 hover:text-green-900 lg:text-xl text-black"
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
                                            className="lg:p-4 rounded-3xl hover:bg-gray-100 hover:text-green-900 lg:text-xl text-black"
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

                        </div>
                    </div>
                    <div className="flex p-2 space-x-3 lg:space-x-10">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black">
                            <FaPhone className="text-2xl text-black" />
                        </div>
                        <p className="hidden lg:flex lg:py-2 lg:pr-10 text-black">Sign in</p>
                        <button onClick={toggleMenu} className="p-2 lg:hidden text-3xl text-black">
                            {menuOpen ? <IoMdClose /> : <LuAlignJustify />}
                        </button>
                    </div>
                </nav>

                {menuOpen && (
                    <div className="fixed h-screen inset-0 bg-white flex flex-col">
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


            <div className='flex flex-col justify-center items-center'>

                <div className='p-52 bg-white '>
                    <h4 className='text-green-800 font-bold text-center w-screen text-2xl'>Our mission</h4>
                    <p className='text-3xl font-bold text-slate-700 text-center p-4'>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>

                </div>

                <div className='flex flex-col bg-white justify-center items-center p-7'>
                    <img src="/images/video.jpg" />
                    <h3 className='text-black text-xl font-semibold p-14'>
                        The status quo is broken</h3>
                    <p className='text-black'>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                    <button className='text-white bg-green-900 p-6 rounded-3xl m-3'>Read Vishal's story</button>

                </div>


                <div className="flex flex-col bg-green-900 items-center w-screen h-fit p-7">
                    <h3 className='text-white text-2xl p-8 font-bold'>How we’re changing things</h3>
                    <p className='p-3 text-sm'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                    <p className='p-3 text-sm'>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>

                <div className="flex flex-col bg-white items-center w-screen h-auto relative">
                    <h3 className='text-slate-800 p-8'>Company Timeline</h3>

                    <div className="relative flex flex-col items-center w-full h-auto">
                        {/* Central Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 h-full" />

                        {/* Timeline Entries */}
                        <div className="flex flex-col space-y-10 w-full px-4">
                            {/* Timeline Entry 1 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">Button 1</button>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mt-52 w-1/2">
                                        <p>Milestone 1</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                            </div>

                            {/* Timeline Entry 2 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">Button 2</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-start ml-4 pr-9 pt-32">
                                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-1/2">
                                        <p>Milestone 2</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Entry 3 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">Button 3</button>
                                </div>
                                <div className="w-1/2 flex justify-end pr-8">
                                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mt-52 w-1/2">
                                        <p>Milestone 3</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                            </div>

                            {/* Timeline Entry 4 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">Button 4</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-start ml-4 pr-9 pt-32">
                                    <div className="bg-blue-500 text-white p-2 rounded-lg shadow-md w-1/2">
                                        <p>Milestone 4</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Entry 5 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">Button 5</button>
                                </div>
                                <div className="w-1/2 flex justify-end pr-8">
                                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mt-52 w-1/2">
                                        <p>Milestone 5</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>





        </div>
    )
}

export default page