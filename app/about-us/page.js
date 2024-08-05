"use client"
import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

const Page = () => {
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
                            <FaPhoneAlt className="text-2xl text-black" />
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


            <div className='flex flex-col justify-center items-center overflow-x-hidden'>

                <div className='p-52 bg-white '>
                    <h4 className='text-green-800 font-bold text-center w-screen text-2xl lg:text-3xl'>Our mission</h4>
                    <p className='text-3xl font-bold text-slate-700 text-center lg:text-center lg:text-7xl p-11'>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>

                </div>

                <div className='flex flex-col bg-white justify-center p-7 lg:flex lg:flex-row lg:text-left'>
                    <Image src="/images/video.jpg"
                        width={800}  // Specify the width of the image
                        height={600}

                        alt="Video" className='lg:order-2 lg:h-2/3 lg:w-2/5 lg:pr-32 lg:mt-52' />
                    <div className='flex flex-col lg:order-1 lg:p-32'>
                        <h3 className='text-black text-xl font-semibold p-14  lg:text-3xl '>
                            The status quo is broken</h3>
                        <p className='text-black '>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                        <button className='text-white bg-[#004733] p-6 rounded-3xl m-3 lg:w-fit lg:m-2'>Read Vishal&apos;s story</button>
                    </div>
                </div>


                <div className="flex flex-col bg-[#004733] items-center w-screen h-fit p-7">
                    <h3 className='text-white text-2xl p-8 font-bold lg:text-4xl'>How we’re changing things</h3>
                    <p className='p-3 text-sm lg:mx-28 lg:text-md'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                    <p className='p-3 text-sm lg:p-7 lg:mx-24 lg:text-md'>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>




                <div className="flex flex-col bg-white items-center w-screen h-auto relative">
                    <h3 className='text-slate-800 p-8 lg:text-3xl'>Company Timeline</h3>

                    <div className="relative flex flex-col items-center w-full h-auto">
                        {/* Central Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 h-full" />

                        {/* Timeline Entries */}
                        <div className="flex flex-col space-y-10 w-full px-4">

                            <div className="w-1/2 flex justify-center">
                                {/* Spacer for alignment */}
                                <div className="w-1/2" />
                            </div>

                            {/* Timeline Entry 1 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2014</button>
                                </div>


                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg mr-7 shadow-md mt-52 w-1/2 ">
                                        <p className='text-sm text-black '>Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that homebuying process is  broken. </p>
                                    </div>
                                </div>
                            </div>




                            {/* Timeline Entry 2 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2015</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-end lg:mr-80">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg shadow-md mt-80 mr-20 w-1/2">
                                        <p className='text-sm text-black'>Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                                    </div>
                                </div>
                            </div>



                            {/* Timeline Entry 3 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2016</button>
                                </div>


                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg mr-7 shadow-md mt-80 w-1/2 ">
                                        <p className='text-sm text-black'>Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
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
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2017</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-end lg:mr-80">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg  shadow-md mt-80 mr-20 w-1/2">
                                        <p className='text-sm text-black'>Better expands into the real estate market with Better Real Estate.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Entry 5 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2018</button>
                                </div>


                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg mr-7 shadow-md mt-52 w-1/2">
                                        <p className='text-sm text-black'>Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-1/2 flex justify-center">
                                {/* Spacer for alignment */}
                                <div className="w-1/2" />
                            </div>


                            {/* Timeline Entry 6*/}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2019</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-end lg:mr-80">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg shadow-md mt-80 mr-20 w-1/2">
                                        <p className='text-sm text-black'>Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
                                    </div>
                                </div>
                            </div>


                            {/* Timeline Entry 5 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2021</button>
                                </div>


                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg mr-7 shadow-md mt-52 w-1/2">
                                        <p className='text-sm text-black'>Better acquires Trussle — The UK’s most innovative online mortgage broker.</p>
                                    </div>
                                </div>
                            </div>


                            {/* Timeline Entry 8*/}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2022</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-end lg:mr-80">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg shadow-md mt-80 mr-20 w-1/2">
                                        <p className='text-sm text-black'>Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Entry 5 */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">2023</button>
                                </div>


                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg mr-7 shadow-md mt-52 w-1/2">
                                        <p className='text-sm text-black'>Better Mortgage launches One Day Verified Approval Letter.</p>
                                    </div>
                                </div>
                            </div>


                            {/* Timeline Entry 8*/}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12">
                                    <button className="bg-[#004733] text-white px-4 py-2 rounded-full shadow-md">Today</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    {/* Spacer for alignment */}
                                    <div className="w-1/2" />
                                </div>
                                <div className="w-1/2 flex justify-end lg:mr-80">
                                    <div className="bg-slate-300 text-white p-4 rounded-lg shadow-md mt-80 mr-20 w-1/2 lg:space-y-3">
                                        <p className='text-sm text-black'>You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
                                        <button className='bg-[#004733] text-white p-3 rounded-lg'>Get Started</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Page