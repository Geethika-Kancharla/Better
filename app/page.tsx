"use client";
import React, { useState } from 'react';
import Footer from "./components/Footer";
import { FaPhone } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

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
        <div className="fixed inset-0 h-screen bg-white flex justify-center items-center z-50">
          <div className="flex flex-col space-y-4 items-center">
            <button onClick={toggleMenu} className="text-black text-3xl">
              <IoMdClose />
            </button>
            <a href="#" className="text-black text-xl">Buy</a>
            <a href="#" className="text-black text-xl">Refinance</a>
            <a href="#" className="text-black text-xl">HELOC</a>
            <a href="#" className="text-black text-xl">Rates</a>
            <a href="#" className="text-black text-xl">Better+</a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}