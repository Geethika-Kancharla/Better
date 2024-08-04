"use client";
import React, { useState } from 'react';
import Footer from "./components/Footer";

import Navbar from './components/Navbar'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Footer />
    </div>
  );
}