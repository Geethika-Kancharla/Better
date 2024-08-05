"use client";
import React from 'react';
import Footer from "./components/Footer";
import Front from "./components/Front";
import Story from "./components/Story";
import Image from './components/Image';


export default function Home() {

  return (
    <div className="flex flex-col">



      <Front />
      <Story />
      <Image />
      <Footer />
    </div>
  );
}