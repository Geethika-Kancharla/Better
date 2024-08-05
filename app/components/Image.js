import React from 'react'

const Image = () => {
    return (
        <div className='bg-white h-screen'>


            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 p-4">

                <h1 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:text-5xl lg:text-left lg:flex-start">Got questions?
                    We've got answers</h1>


                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2">
                    <button
                        onClick={() => handleButtonClick("Arian")}
                        className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 hover:border-4 hover:border-[#004733]"
                    >
                        Our Products
                    </button>
                    <button
                        onClick={() => handleButtonClick("Amanda")}
                        className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 hover:border-4 hover:border-[#004733]"
                    >
                        Calculators
                    </button>
                    <button
                        onClick={() => handleButtonClick("Paul")}
                        className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 hover:border-4 hover:border-[#004733]"
                    >
                        Guides & FAQ's
                    </button>
                </div>
            </div>




            <div className="flex flex-col  space-y-4 lg:space-y-0 p-4">
                {/* First Div */}

                <div className='lg:flex lg:space-x-10'>

                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">

                        <h1 className="text-2xl font-bold text-gray-800">Buying your first home with better</h1>
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full border border-blue-200">
                            <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img
                            src="/images/home.webp"
                            alt="Descriptive Alt Text"
                            className="w-16 h-16 lg:w-72 lg:h-64 object-cover rounded-md"
                        />
                    </div>

                    {/* Second Div */}
                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">
                        <div className='lg:flex lg:flex-col lg:space-y-6'>
                            <h1 className="text-2xl font-bold text-gray-800">One Day Mortgage¹</h1>
                            <p className='text-sm text-slate-700'>One Day Mortgage™ offers you more certainty and kicks your home loan into hyperdrive: go from locked rate to Commitment Letter in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.²</p>

                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full border border-blue-200">
                                <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        <img
                            src="/images/one-.webp"
                            alt="Descriptive Alt Text"
                            className="w-16 h-16 object-cover rounded-md lg:w-80 lg:h-64 "
                        />
                    </div>

                </div>


                <div className='lg:flex lg:space-x-10'>




                    {/* Second Div */}
                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">
                        <div className='lg:flex lg:flex-col lg:space-y-6'>
                            <h1 className="text-2xl font-bold text-gray-800">Better HELOC</h1>
                            <p className='text-sm text-slate-700'>Introducing One Day HELOC™—your express lane to accessing cash from your home with our Home Equity Line of Credit. Once you complete your application tasks, you’ll get an approval decision in 24 hours, and your cash in 7 days.2</p>

                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full border border-blue-200">
                                <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        <img
                            src="/images/heloc.webp"
                            alt="Descriptive Alt Text"
                            className="w-16 h-16 object-cover rounded-md lg:w-80 lg:h-64 lg:order-1 "
                        />
                    </div>



                    <div className="flex items-center space-x-2 bg-blue-100 p-4 m-2 rounded-lg lg:flex lg:flex-col">

                        <h1 className="text-2xl font-bold text-gray-800">Insurance</h1>
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full border border-blue-200">
                            <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img
                            src="/images/insurance.webp"
                            alt="Descriptive Alt Text"
                            className="w-16 h-16 lg:w-80 lg:h-64 object-cover rounded-md"
                        />
                    </div>





                </div>
            </div>


        </div>


    )
}

export default Image