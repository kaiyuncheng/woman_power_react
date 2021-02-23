import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Header from './components/Header';
import Hero from './components/Hero';
import Sliders from './components/Sliders';
import VideoSection from './components/VideoSection';
import Banner from './components/Banner';
import Corporation from './components/Corporation';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Loader
        className="z-50 fixed bg-primary-light w-screen h-screen flex justify-center items-center"
        type="Oval"
        color="#FF398D"
        height={100}
        width={100}
        timeout={2000} //3 secs
      />

      <Header />
      <Hero />
      <Sliders />
      <VideoSection />
      <Banner />
      <Corporation />
      <Footer />

      
    </div>
  );
}

export default App;
