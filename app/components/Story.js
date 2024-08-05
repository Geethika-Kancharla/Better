import React, { useState } from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const Story = () => {
    // State to keep track of the selected image
    const [selectedImage, setSelectedImage] = useState("/images/Arian.webp");

    // Images mapping for easy management
    const images = {
        Arian: "/images/Arian.webp",
        Amanda: "/images/Amanda.webp",
        Paul: "/images/Paul.webp",
    };

    // Function to handle button clicks
    const handleButtonClick = (name) => {
        setSelectedImage(images[name]);
    };

    return (
        <div className="bg-white p-12">
            {/* Container for Layout */}
            <div className="flex flex-col items-center space-y-8 lg:flex lg:flex-row lg:space-x-5">

                {/* Heading and Button */}
                <div className="text-center pt-40 lg:order-2 lg:flex lg:flex-col lg:justify-center lg:items-left lg:space-y-7 lg:pt-0">
                    <h1 align="left" className="text-black text-3xl sm:text-4xl font-bold mb-4 lg:text-7xl">
                        Find out why we’re better.
                    </h1>
                    <button align="left" className="bg-[#004733] text-white rounded-xl mb-4 p-5 w-fit">
                        See all our stories
                    </button>
                    <p align="left" className="text-black text-md mb-4">
                        <div className='flex space-x-4'>
                            <TiStarFullOutline className='text-green-400 text-3xl' />
                            <p align="left" > Trustpilot  Excellent 4.3 out of 5</p>
                        </div>
                    </p>
                </div>

                {/* Links Section */}
                <div className='lg:order-1 lg:flex lg:flex-col lg:p-44'>

                    <div className="flex space-x-2 mb-6 lg:order-2 lg:mt-5  ">
                        <button
                            onClick={() => handleButtonClick("Arian")}
                            className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 focus:border-4 focus:border-[#004733]"
                        >
                            Arian
                        </button>
                        <button
                            onClick={() => handleButtonClick("Amanda")}
                            className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 hover:border-4 hover:border-[#004733]"
                        >
                            Amanda
                        </button>
                        <button
                            onClick={() => handleButtonClick("Paul")}
                            className="bg-white border border-green-950 px-6 py-2 text-black rounded-lg transition-all duration-300 hover:border-4 hover:border-[#004733]"
                        >
                            Paul
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center lg:order-1 ">
                        <img
                            src={selectedImage}
                            alt="Sample Image"
                            className="object-cover lg:w-60 lg:h-5/6 rounded-md"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Story;
