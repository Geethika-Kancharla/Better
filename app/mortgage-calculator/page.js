"use client"
import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';
import Footer from "../components/Footer";
import { Slider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [sliderValue, setSliderValue] = useState(30);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    // Calculate the values for the buttons based on the slider value
    const button1Value = `$ ${sliderValue * 1000}`;
    const button2Value = `$ ${(sliderValue * 29.4).toFixed(2)}/mo`;

    return (
        <div className='flex flex-col'>
            <div className="fixed top-0 w-screen z-50 bg-white">
                <nav className="flex justify-between p-2">
                    <div className="flex space-x-3 p-2">
                        <p align="justify" className="text-3xl text-black">Better</p>
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
                        <p align="justify" className="hidden lg:flex lg:py-2 lg:pr-10 text-black">Sign in</p>
                        <button onClick={toggleMenu} className="p-2 lg:hidden text-3xl text-black">
                            {menuOpen ? <IoMdClose /> : <LuAlignJustify />}
                        </button>
                    </div>
                </nav>

                {menuOpen && (
                    <div className="lg:hidden">
                        <div className="flex items-center justify-center space-x-2 w-full bg-green-200 rounded-3xl p-2 text-black">
                            <FaPhoneAlt className="text-xl" />
                            <button className="text-center">Call us anytime at (415) 523 8837</button>
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
                                <p align="justify" >Get started</p>
                                <p align="justify" >3min | No credit impact</p>
                            </div>

                            <div className="flex flex-col items-center justify-center space-x-2 w-full rounded-3xl p-2 text-black border border-green-200">
                                <p align="justify" >Sign in</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>



            <div className="flex justify-center items-center mt-20 bg-blue-100 lg:p-28">
                <div className="bg-blue-100 p-8 text-white max-w-lg w-full lg:max-w-none lg:w-2/3">
                    <div className="lg:flex lg:flex-col lg:items-start">
                        <h1 className="text-2xl mb-4 text-center lg:text-left text-black lg:text-7xl lg:mb-10">Mortgage calculator</h1>
                        <p align="justify" className="mb-4 text-center lg:text-left text-slate-600 lg:text-xl lg:mb-10">
                            Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage payments if you will be required to have private mortgage insurance (PMI). Also learn why
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4 mb-4">
                            <button className="bg-white rounded-lg px-4 py-2 text-black">{button1Value}</button>
                            <button className="px-4 py-2 rounded text-black">{button2Value}</button>
                            <button className="bg-[#004733] px-7 py-2 rounded">Get pre-approved</button>
                        </div>
                        <div className="mb-4">
                            <Slider
                                className="text-black w-96"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                aria-labelledby="continuous-slider"
                            />
                        </div>



                        <div className="hidden lg:flex lg:space-x-4">
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">ZIP code</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="562130" readOnly />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Down payment</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="$ 10,000" readOnly />
                                <hr className="absolute left-2 right-0 bottom-0 border-gray-300" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Interest rate</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="6.500" readOnly />
                            </div>
                            <div className="relative w-44">
                                <label className="absolute left-2 top-1 text-gray-500 ">Length of loan</label>
                                <select className="border p-2 pt-6 w-full text-black">
                                    <option>30 years</option>
                                    <option>20 years</option>
                                    <option>15 years</option>
                                </select>
                            </div>

                        </div>






                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
                        <div className="flex justify-end mb-4">
                            <IconButton onClick={() => setShowModal(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">ZIP code</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="562130" readOnly />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Down payment</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="$ 10,000" readOnly />
                                <hr className="absolute left-2 right-0 bottom-0 border-gray-300" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Interest rate</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="6.500" readOnly />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Length of loan</label>
                                <select className="border p-2 pt-6 w-full text-black">
                                    <option>30 years</option>
                                    <option>20 years</option>
                                    <option>15 years</option>
                                </select>
                            </div>
                            <button className="bg-[#004733] px-7 py-2 rounded mb-4">See results</button>
                        </div>
                    </div>
                )}
            </div>

            <div className='bg-white text-black p-24'>


                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">How much monthly mortgage payment can I afford?</h1>
                        <p align="justify" className="text-slate-600 mt-2">Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.

                            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It is most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center py-8 p-7">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold  m-10">How does a mortgage calculator help me?</h1>
                        <p align="justify" className="text-slate-600 mt-2 m-7">When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.

                        </p>



                        <Image
                            src="/images/calc1.jpg"
                            alt="Sample Image"
                            className='w-3/5 text-center'
                            width={800} // Specify the width of the image
                            height={600} // Specify the height of the image
                            priority
                        />


                        <p align="justify" className="text-slate-600 mt-2 m-7">
                            Here is an example of what calculating your DTI might look like:
                        </p>


                        <Image
                            src="/images/calc2.jpg"
                            alt="Sample Image"
                            className='w-3/5 text-center'
                            width={800} // Specify the width of the image
                            height={600} // Specify the height of the image
                            priority
                        />


                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7 flex flex-col justify-center items-center space-y-4">
                        <h1 className="text-2xl font-bold  m-10">How to calculate monthly mortgage payments?</h1>
                        <p align="justify" className="text-slate-600 mt-2">Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so its a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>

                        <h1 className="text-2xl font-bold  m-24">Formula for calculating monthly mortgage payments</h1>
                        <p align="justify" className="text-slate-600 mt-2">The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here's the formula for calculating principal and interest yourself:</p>



                        <Image
                            src="/images/calc3.jpg"
                            alt="Sample Image"
                            className='w-3/5 text-center'
                            width={800} // Specify the width of the image
                            height={600} // Specify the height of the image
                            priority
                        />

                        <p align="justify" className="text-slate-600 mt-2">Where:

                            M is monthly mortgage payments

                            P is the principal loan amount (the amount you borrow)

                            r is the monthly interest rate
                            (annual interest rate divided by 12 and expressed as a decimal)
                            For example:
                            if the annual interest rate is 5%,
                            the monthly rate would be 0.05/12 = .00417, or .417%

                            n is the total number of payments in months
                            For example:
                            for a 30-year loan, n = 30*12 = 360 months

                            Here is a simple example:</p>




                        <Image
                            src="/images/calc5.jpg"
                            alt="Sample Image"
                            className='w-3/5 text-center'
                            width={800} // Specify the width of the image
                            height={600} // Specify the height of the image
                            priority
                        />


                    </div>

                </div>




                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">How much home can I afford?</h1>
                        <p align="justify" className="text-slate-600 mt-2">Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>




                <div className="flex flex-col items-center justify-center py-8">

                    <div className="text-center py-4 p-7">



                        <p align="justify" className="text-slate-600 mt-24 text-sm">

                            The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey (PMMS) 30-year fixed-rate mortgage product with Better Mortgage own offered rate for a comparable mortgage product between Jan 20 - Dec 20. </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>




            </div>


            <Footer />
        </div>

    )
}

export default Page;
