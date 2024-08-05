import React from 'react';
import Footer from "./components/Footer";
import Front from "./components/Front";
import Story from "./components/Story";
import Preview from './components/Preview';


export default function Home() {

  return (
    <div className="flex flex-col">
      <Front />
      <Story />
      <Preview />
      <Footer />
    </div>
  );
}