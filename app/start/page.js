import React from 'react'
import Image from 'next/image';
import Footer from '../components/Footer';
import { FaPhoneAlt } from "react-icons/fa";

const page = () => {
    return (
        <div className='h-screen bg-white text-black'>
            <div >
                <div className='flex justify-between p-4 '>
                    <div className='flex flex-col'>
                        <div className='text-black text-3xl font-bold lg:pl-36 lg:pt-5'> Better</div>
                        <div className='text-slate-800 lg:pl-36 lg:text-2xl'> Mortage</div>
                    </div>
                    <div className='lg:pr-36 lg:pt-10'>
                        <div className='p-4 flex items-center justify-center w-12 h-12 rounded-full border border-black bg-blue-100'>
                            <FaPhoneAlt />
                        </div>
                    </div>
                </div>


                <div className="relative flex items-center justify-center py-5 w-full">
                    {/* Horizontal Line */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <hr className="border-t-8 border-gray-300 w-3/4" />
                    </div>

                    {/* Rounded Image */}



                    <Image
                        src="/images/Profile.jpg"
                        alt="Sample Image"
                        className="relative z-10 w-12 h-12 rounded-full border-4 border-white bg-gray-200"
                        width={800} // Specify the width of the image
                        height={600} // Specify the height of the image
                        priority
                    />
                </div>

            </div>

            <div className='flex flex-col space-y-14 justify-center items-center '>
                <div>
                    <h1 className='text-black font-bold text-2xl text-center'>Hi, I'm Betty!</h1>
                    <h1 className='text-black font-bold text-2xl text-center'>What can I help you with?</h1>
                </div>
                <div className='flex flex-col justify-center items-center space-y-6'>
                    <button className='text-black p-6 font-bold border border-black w-80 rounded-lg  hover:border-green-800 lg:w-96 hover:border-8'>Buying a home</button>
                    <button className='text-black p-6 font-bold border border-black w-80 rounded-lg hover:border-green-800 lg:w-96 hover:border-8'>Refinance my mortgage</button>
                    <button className='text-black p-6 font-bold border border-black w-80 rounded-lg  hover:border-green-800 lg:w-96 hover:border-8'>Get cash from my home</button>
                </div>
                <div className='flex space-x-4 pl-16 lg:pl-10'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl text-center'>$100B</h1>
                        <p className='text-sm text-slate-700 text-center'>home loans funded entirely online</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl text-center'>400K</h1>
                        <p className='text-sm text-slate-700'>Customers who chose a Better Mortgage</p>
                    </div>
                </div>

                <div className='bg-blue-100 h-60 flex flex-col w-3/4 lg:w-1/4 '>
                    <p className='text-slate-500 text-md p-6'>After a few questions, you'll unlock:</p>
                    <p className='text-slate-700 text-md p-4'>Custom mortgage rates</p>

                    <p className='text-slate-700 text-md p-4'>Exclusive offers</p>

                    <p className='text-slate-700 text-md p-4'>A personalized dashboard</p>


                </div>

            </div>

            <Footer />


        </div>
    )
}

export default page