"use client";
import React, { useState } from 'react';
import Footer from "./components/Footer";
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown } from 'react-icons/bi';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex justify-between p-2 bg-[#004733]">
        <div className="flex space-x-3 p-2">
          <p className="text-white text-3xl">Better</p>
          <div className="hidden lg:flex space-x-3">
            <a href="#" className="text-white lg:px-3 lg:py-2 rounded-3xl hover:bg-white hover:text-green-900">Buy</a>
            <a href="#" className="text-white lg:px-3 lg:py-2 rounded-3xl hover:bg-white hover:text-green-900">Refinance</a>
            <a href="#" className="text-white lg:px-3 lg:py-2 rounded-3xl hover:bg-white hover:text-green-900">HELOC</a>
            <a href="#" className="text-white lg:px-3 lg:py-2 rounded-3xl hover:bg-white hover:text-green-900">Rates</a>
            <a href="#" className="text-white lg:px-3 lg:py-2 rounded-3xl hover:bg-white hover:text-green-900">Better+</a>
          </div>
        </div>
        <div className="flex p-2 space-x-3 lg:space-x-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white">
            <FaPhone className="text-white text-2xl" />
          </div>
          <p className='hidden lg:flex lg:py-2'>Sign in</p>
          <button onClick={toggleMenu} className="p-2 lg:hidden text-white text-3xl">
            {menuOpen ? <IoMdClose /> : <LuAlignJustify />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed h-screen inset-0  bg-white flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="text-black text-3xl font-bold">Better</div>
            <button onClick={toggleMenu} className="text-black text-3xl mb-4">
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col p-4 flex-grow space-y-4">

            <div className="flex justify-between items-center py-2">
              <a href="#" className="text-black text-xl">Buy</a>
              <BiChevronDown className="text-black text-xl" />
            </div>
            <div className="flex justify-between items-center py-2">
              <a href="#" className="text-black text-xl">Refinance</a>
              <BiChevronDown className="text-black text-xl" />
            </div>
            <div className="flex justify-between items-center py-2">
              <a href="#" className="text-black text-xl">HELOC</a>
              <BiChevronDown className="text-black text-xl" />
            </div>
            <div className="flex justify-between items-center py-2">
              <a href="#" className="text-black text-xl">Rates</a>
              <BiChevronDown className="text-black text-xl" />
            </div>
            <div className="flex justify-between items-center py-2">
              <a href="#" className="text-black text-xl">Better+</a>
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

      <Footer />
    </div>
  );
}