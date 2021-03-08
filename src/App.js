import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Main/Hero';
import SlidersSection from './components/Main/SlidersSection';
import VideoSection from './components/Main/VideoSection';
import Corporation from './components/Main/Corporation';
import Footer from './components/Footer';
import GoTop from './components/GoTop';

import data from './components/data/data.json'

function App() {
  return (
    <div className="App">
      <GoTop />
      <Loader
        className="z-50 fixed bg-primary-light w-screen h-screen flex justify-center items-center"
        type="Rings"
        color="#FF398D"
        height={100}
        width={100}
        timeout={500} 
      />
      <Header menuTitles={data.menuTitles} />
      <Hero />
      <SlidersSection topicsData={data.topicsData} />
      <VideoSection topicsVideo={data.topicsVideo} />
      <Corporation />
      <Footer />
    </div>
  );
}

export default App;
