"use client";
import React, { useState } from 'react';
import Footer from "./components/Footer";
import Front from "./components/Front";


export default function Home() {

  return (
    <div className="flex flex-col">

      <Front />
      <Footer />
    </div>
  );
}