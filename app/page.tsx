"use client";
import React, { useState } from 'react';
import Footer from "./components/Footer";
import Front from "./components/Front";
import Story from "./components/Story";


export default function Home() {

  return (
    <div className="flex flex-col">

      <Front />
      <Story />
      <Footer />
    </div>
  );
}