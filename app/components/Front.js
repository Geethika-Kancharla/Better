import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import Navbar from './Navbar';

const Front = () => {
    return (

        <div className="relative h-screen bg-[#004733]">
            {/* Navbar Component */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col h-full lg:flex-row lg:items-center">

                {/* Text and Button Section */}
                <div className="flex flex-col items-center lg:items-start lg:pl-32 mt-16 lg:mt-32 lg:pr-40">
                    {/* Heading for mobile */}
                    <h1 className="text-green-300 p-7 text-5xl text-center lg:hidden font-bold">
                        Mortgages made simple
                    </h1>

                    <div className="flex flex-col mt-7 space-y-4 text-center lg:text-left">
                        <button className="bg-green-400 px-24 py-5 text-black rounded-3xl lg:px-14 lg:w-full">
                            Start my approval
                        </button>
                        <p className="text-md text-white text-center">3 min | No credit impact</p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative bg-[#004733] h-full flex items-center justify-center lg:pr-36 lg:mt-24 lg:m-20">
                    <div className="relative w-full flex flex-col lg:w-3/4 lg:h-auto">
                        {/* Heading for large screens */}
                        <div className="hidden lg:flex flex-col items-center justify-center absolute top-12 left-1/2 transform -translate-x-1/2  text-center text-green-400 text-7xl lg:text-9xl font-bold">
                            <div className="mb-2">
                                Mortgages
                            </div>
                            <div className='flex items-center space-x-9 '>
                                <div>
                                    made
                                </div>
                                <div>
                                    simple
                                </div>
                            </div>
                        </div>
                        <img
                            src="/images/mobile.webp"
                            alt="Centered Image"
                            className="object-cover w-[90%] h-[95%] lg:w-full lg:h-auto lg:mt-24"
                        />
                    </div>

                    {/* Rating Section */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 lg:static lg:right-16 lg:bottom-16 lg:w-1/3 lg:pl-16">
                        <div className="bg-green-950 text-center lg:bg-[#004733] lg:w-52 lg:mt-20">
                            <div className="flex items-center text-5xl text-yellow-400 justify-center space-x-1 p-1">
                                <FcGoogle className="w-12 h-12" />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarHalfOutline />
                            </div>
                            <p className="text-sm text-white">4.6 Stars | 3177 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front



// <div className="relative h-screen bg-[#004733]">
// {/* Navbar Component */}
// <Navbar />

// {/* Main Content */}
// <div className="flex flex-col h-full lg:flex-row lg:items-center">

//     {/* Text and Button Section */}
//     <div className="flex flex-col items-center lg:items-start lg:pl-32 mt-16 lg:mt-32 lg:pr-40">
//         {/* Heading for mobile */}
//         <h1 className="text-green-300 p-7 text-5xl text-center lg:hidden font-bold">
//             Mortgages made simple
//         </h1>

//         <div className="flex flex-col mt-7 space-y-4 text-center lg:text-left">
//             <button className="bg-green-400 px-24 py-5 text-black rounded-3xl">
//                 Start my approval
//             </button>
//             <p className="text-md text-white text-center">3 min | No credit impact</p>
//         </div>
//     </div>

//     {/* Image Section */}
//     <div className="relative bg-[#004733] h-full flex items-center justify-center lg:pr-36 lg:mt-20 lg:m-20">
//         <div className="relative w-full flex items-center justify-center lg:w-3/4 lg:h-auto lg:mt-0">
//             {/* Heading for large screens */}
//             <h1 className="hidden lg:absolute lg:top-0 lg:w-44 text-center lg:text-green-500 text-5xl lg:text-8xl font-bold mt-4">
//                 Mortgages made simple
//             </h1>
//             <img
//                 src="/images/mobile.webp"
//                 alt="Centered Image"
//                 className="object-cover w-[90%] h-[95%] lg:w-full lg:h-auto"
//             />
//         </div>

//         {/* Rating Section */}
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 lg:static lg:right-16 lg:bottom-16 lg:w-1/3 lg:pl-16">
//             <div className="bg-green-950 text-center lg:bg-[#004733] lg:w-52 lg:mt-0">
//                 <div className="flex items-center text-5xl text-yellow-400 justify-center space-x-1 p-1">
//                     <FcGoogle className="w-12 h-12" />
//                     <TiStarFullOutline />
//                     <TiStarFullOutline />
//                     <TiStarFullOutline />
//                     <TiStarFullOutline />
//                     <TiStarHalfOutline />
//                 </div>
//                 <p className="text-sm text-white">4.6 Stars | 3177 reviews</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>