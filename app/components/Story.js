import React from 'react'

const Story = () => {
    return (
        <div className="bg-white p-12">
            {/* Container for Layout */}
            <div className="flex flex-col">

                <div className="flex flex-col space-y-4">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">
                        Heading
                    </h1>

                    <button className="bg-green-400 px-6 py-3 text-black rounded-lg">
                        Call to Action
                    </button>
                    <p className="text-white text-md">
                        This is a paragraph of text that provides more information about the content or the image.
                    </p>
                    <div className="flex space-x-2">
                        <a href="" className="bg-white border w-fit border-green-950 px-6 py-2 text-black rounded-lg ">
                            Arian
                        </a>
                        <a href="" className="bg-white border w-fit border-green-950 px-6 py-2 text-black rounded-lg">
                            Amanda
                        </a>
                        <a href="" className="bg-white border w-fit border-green-950 px-6 py-2 text-black rounded-lg">
                            Paul
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center sm:w-1/2 mt-6 sm:mt-0">
                    <img
                        src="/images/Arian.webp"
                        alt="Sample Image"
                        className="object-cover w-full h-auto max-w-xs sm:max-w-md rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Story