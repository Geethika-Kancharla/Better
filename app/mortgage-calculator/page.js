"use client"
import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';
import Footer from "../components/Footer";
import { Slider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
                            <FaPhone className="text-2xl text-black" />
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
                            <FaPhone className="text-xl" />
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
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="562130" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Down payment</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="$ 10,000" />
                                <hr className="absolute left-2 right-0 bottom-0 border-gray-300" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Interest rate</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="6.500" />
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
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="562130" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Down payment</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="$ 10,000" />
                                <hr className="absolute left-2 right-0 bottom-0 border-gray-300" />
                            </div>
                            <div className="relative">
                                <label className="absolute left-2 top-1 text-gray-500">Interest rate</label>
                                <input className="border p-2 pt-6 w-full text-black" placeholder=" " value="6.500" />
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

                            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
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
                        <img src="/images/calc1.jpg" className='w-3/5 text-center' />
                        <p align="justify" className="text-slate-600 mt-2 m-7">
                            Here’s an example of what calculating your DTI might look like:
                        </p>
                        <img src="/images/calc2.jpg" className='w-3/5 text-center' />


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
                        <p align="justify" className="text-slate-600 mt-2">Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>

                        <h1 className="text-2xl font-bold  m-24">Formula for calculating monthly mortgage payments</h1>
                        <p align="justify" className="text-slate-600 mt-2">The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>

                        <img src="/images/calc3.jpg" className='w-3/5 text-center' />
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
                            for a 30-year loan, n = 30×12 = 360 months

                            Here’s a simple example:</p>


                        <img src="/images/calc5.jpg" className='w-3/5 text-center' />

                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">How to use this mortgage calculator?</h1>
                        <p align="justify" className="text-slate-600 mt-2">Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.

                            Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.

                            The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.

                            Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>


                        <h1 className="text-2xl font-bold m-10">Do you know your property tax rate?</h1>
                        <p align="justify" className="text-slate-600 mt-2">While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>


                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">How is Better’s mortgage calculator different?</h1>
                        <h1 className="text-2xl font-bold m-10">This mortgage calculator shows your payments with taxes and insurance</h1>
                        <p align="justify" className="text-slate-600 mt-2">The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.

                            Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.

                            Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>


                        <h1 className="text-2xl font-bold m-10">This mortgage calculator shows your mortgage costs with PMI</h1>

                        <p align="justify" className="text-slate-600 mt-2">PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.

                            Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.

                            PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>

                        <h1 className="text-2xl font-bold m-10">This mortgage calculator includes HOA fees</h1>

                        <p align="justify" className="text-slate-600 mt-2">Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.

                            Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>



                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">How to reduce your monthly mortgage payments?</h1>
                        <p align="justify" className="text-slate-600 mt-2">The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>

                        <h1 className="text-2xl font-bold m-10">Extend the length of your mortgage</h1>
                        <p align="justify" className="text-slate-600 mt-2">The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>


                        <h1 className="text-2xl font-bold m-10">Increase your down payment</h1>
                        <p align="justify" className="text-slate-600 mt-2">The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>



                        <h1 className="text-2xl font-bold m-10">Get a lower interest rate</h1>
                        <p align="justify" className="text-slate-600 mt-2">Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).

                            Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.

                            If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.

                            If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>



                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
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
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">Next steps to buying a house</h1>
                        <p align="justify" className="text-slate-600 mt-2">There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).

                            The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.

                            If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                </div>





                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full flex justify-center">
                        <hr className="border-t-2 border-gray-300 w-1/2" />
                    </div>
                    <div className="text-center py-4 p-7">
                        <h1 className="text-2xl font-bold m-10">More resources</h1>


                        <div className='flex flex-col lg:flex lg:flex-row lg:space-x-7 space-y-8'>


                            <div className="p-6 bg-white rounded-lg border border-green-950">

                                <p className="text-slate-600 mb-4">Get pre-approved to see how much you can borrow</p>
                                <div className="flex items-center text-green-600">
                                    <h2 className="text-lg font-semibold mr-2">Get Started</h2>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>


                            <div className="p-6 bg-white rounded-lg border border-green-950">

                                <p className="text-slate-600 mb-4">See today’s rates in your area</p>
                                <div className="flex items-center text-green-600">
                                    <h2 className="text-lg font-semibold mr-2">See Rates</h2>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>



                            <div className="p-6 bg-white rounded-lg border border-green-950">

                                <p className="text-slate-600 mb-4">Find out your max homebuying budget</p>
                                <div className="flex items-center text-green-600">
                                    <h2 className="text-lg font-semibold mr-2">Try out mortgage calculator</h2>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>




                        </div>











                        <p align="justify" className="text-slate-600 mt-24 text-sm">*See Better Real Estate discount terms and conditions.

                            **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>
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
