import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import Navbar from './Navbar';

const Front = () => {
    return (

        <div className="relative h-screen w-screen bg-[#004733]">
            {/* Navbar Component */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col h-full lg:flex-row lg:items-center">
                <div className="flex flex-col items-center lg:w-1/2 lg:items-start lg:pl-10 mt-16 lg:mt-0">
                    <h1 className="text-green-300 text-5xl text-center lg:text-left font-bold">
                        Mortgages made simple
                    </h1>

                    <div className="flex flex-col mt-7 space-y-4 text-center lg:text-left">
                        <button className="bg-green-400 px-24 py-5 text-black rounded-3xl">
                            Start my approval
                        </button>
                        <p className="text-md text-white">3 min | No credit impact</p>
                    </div>
                </div>

                <div className="relative mt-10 bg-[#004733] h-screen flex items-center justify-center lg:mt-0 lg:w-1/2">
                    <img
                        src="/images/mobile.webp"
                        alt="Centered Image"
                        className="object-cover h-[95%] w-[90%]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                        <div className="bg-green-950 w-2/5 text-center">
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