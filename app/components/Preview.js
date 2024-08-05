"use client";
import React from 'react';
import Image from 'next/image';

const Preview = () => {
    const handleButtonClick = (name) => {
        // Implement button click handling logic here
        console.log(`Button clicked: ${name}`);
    };

    return (
        <div className='bg-white h-screen'>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 lg:text-5xl lg:text-left lg:flex-start">
                    Got questions? We have got answers
                </h1>

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
                        Guides & FAQ&apos;s
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-0 p-4">
                {/* First Div */}
                <div className='lg:flex lg:space-x-10'>
                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">
                        <h1 className="text-2xl font-bold text-gray-800">Buying your first home with better</h1>
                        <Image
                            src="/images/home.webp"
                            alt="Descriptive Alt Text"
                            width={288} // Set the width value
                            height={256} // Set the height value
                            className="w-16 h-16 lg:w-72 lg:h-64 object-cover rounded-md"
                        />
                    </div>

                    {/* Second Div */}
                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">
                        <div className='lg:flex lg:flex-col lg:space-y-6'>
                            <h1 className="text-2xl font-bold text-gray-800">One Day Mortgage</h1>
                            <p className='text-sm text-slate-700'>
                                One Day Mortgage offers you more certainty and kicks your home loan into hyperdrive: go from locked rate to Commitment Letter in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.
                            </p>
                        </div>
                        <Image
                            src="/images/one-.webp"
                            alt="Descriptive Alt Text"
                            width={288} // Set the width value
                            height={256} // Set the height value
                            className="w-16 h-16 object-cover rounded-md lg:w-80 lg:h-64"
                        />
                    </div>
                </div>

                <div className='lg:flex lg:space-x-10'>
                    {/* Third Div */}
                    <div className="flex items-center space-x-4 bg-blue-100 p-4 m-2 rounded-lg">
                        <div className='lg:flex lg:flex-col lg:space-y-6'>
                            <h1 className="text-2xl font-bold text-gray-800">Better HELOC</h1>
                            <p className='text-sm text-slate-700'>
                                Introducing One Day HELOC your express lane to accessing cash from your home with our Home Equity Line of Credit. Once you complete your application tasks, you get an approval decision in 24 hours, and your cash in 7 days.
                            </p>
                        </div>
                        <Image
                            src="/images/heloc.webp"
                            alt="Descriptive Alt Text"
                            width={288} // Set the width value
                            height={256} // Set the height value
                            className="w-16 h-16 object-cover rounded-md lg:w-80 lg:h-64 lg:order-1"
                        />
                    </div>

                    {/* Fourth Div */}
                    <div className="flex items-center space-x-2 bg-blue-100 p-4 m-2 rounded-lg lg:flex lg:flex-col">
                        <h1 className="text-2xl font-bold text-gray-800">Insurance</h1>
                        <Image
                            src="/images/insurance.webp"
                            alt="Descriptive Alt Text"
                            width={288} // Set the width value
                            height={256} // Set the height value
                            className="w-16 h-16 lg:w-80 lg:h-64 object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
