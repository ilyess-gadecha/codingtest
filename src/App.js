import React, { useState } from 'react';
import Header from './components/Header/Headerr';
import FundFinder from './components/Afterheader/FundFinder';
import Filtrage from './components/ArrayFiltre/Filtrage';
import Arrayofdata from './components/ArrayFiltre/Arrayofdata';
import './App.css'; // Import your CSS file for styling
import ContactUs from './components/contact/Contact';

const App = () => {
  return (
    <>
    <div className="app-container">
      <Header />
      <FundFinder />
      <div className="grid-container">
        <div className="filtrage-container">
          <Filtrage />
        </div>
        <div className="arrayofdata-container">
          <Arrayofdata />
        </div>
      </div></div>
      <ContactUs />
     
</>
  );
};

export default App;
