// import React from "react"; 
import React, { useState, useEffect } from "react"; 

import app_name from './app_name.png'
import fullstackdevo from './fullstackdevo.png'
import './App.css';
import HomePage from './homepage/HomePage';
import AboutPage from './aboutpage/AboutPage';
import Typewriter from './typewriter/Typewriter';
import WorkPage from './workspage/MyWork';
import ContactPage from './contactpage/ContactPage';
import ResumePage from './resumepage/ResumePage';

import ziyeArt from './PortfolioVer2Assets/ProfileArt.png';
import heartArt from './PortfolioVer2Assets/heartFlowers.png';


function App() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.mainContainer');
      const mainContainerBottom = mainContainer.getBoundingClientRect().bottom;

      //check if mainContainer has been scrolled past
      if (mainContainerBottom <= 0) {
        setShowStickyNav(true);
      }
      else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    //
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="App">
      {/* The Homepage location */}
      <div className={`sticky-nav ${showStickyNav ? 'visible' : ''}`}>
        <HomePage />
      </div>
      
      <div id="top-section"></div>




  <div className="mainContainer">
    <HomePage/>

      <div className="artContainer">
        
        <div className="rectangleMidTone"> </div>
        
        <div className="rectangleLightTone"> </div>
        <img src={heartArt} alt="sketch of heart flowers" className="heartFlower1" />

        <img src={ziyeArt} alt="sketch of self portrait" className="selfPortrait" />
        <img src={heartArt} alt="sketch of heart flowers" className="heartFlower2" tyle={{ width: '100%', height: '100%' }}/>

        <div className="titleWordsContainer" style={{marginTop: '50px'}}>
          <h2 className="subheadWords"> 
            {/* <Typewriter text ="Hii, my name is" highlightLastNine={false}/> */}
            Hello, my name is
          </h2>
          <div className="titleWords" style={{marginTop: '-10px'}}>
            ZIYE
          </div>
          <h1 className="subheadWords2" style={{marginTop: '-10px'}}>
            <Typewriter text="I''m an aspiring developer" highlightLastNine={true}/>
          </h1>
          <div className="circleLightTone"></div>
        </div>

      </div>
      </div>




      {/* Container for AboutPage */}
      <div id="about-section" className="about-page-container">
        <AboutPage/>
      </div>

      {/* Container for WorkPage */}
      <div id="work-section">
        <WorkPage/>
      </div>

      {/* Container for ContactPage */}
      <div id="resume-section">
        <ResumePage/>
      </div>

      {/* Container for ContactPage */}
      <div id="contact-section">
        <ContactPage/>
      </div>

      
    </div>
  );
}

export default App;
