import React from "react"; 
import app_name from './app_name.png'
import fullstackdevo from './fullstackdevo.png'
import './App.css';
import HomePage from './homepage/HomePage';
import AboutPage from './aboutpage/AboutPage';
import Typewriter from './typewriter/Typewriter';
import WorkPage from './workspage/MyWork';
import ContactPage from './contactpage/ContactPage';
import ResumePage from './resumepage/ResumePage';


function App() {


  return (
    
    <div className="App">
      {/* The Homepage location */}
      <div className="sticky-nav">
        <HomePage/>
      </div>
      <div id="top-section">
      </div>


      {/* images */}
      <div className="images_settings">
        <img src={app_name} alt="main big header" className="appnamemain" style={{ width: '1000px', height: '400px' }}/>
        <img src={fullstackdevo} alt="fullstack" className="fulldevo" style={{ width: '1100px', height: '200px' }}/>
      </div>



      {/* Container for Typewriter */}
      <div className="typewriter-container">
        <h1 className="left-align">
          <Typewriter text="Hii, I'm so glad you're here 👋 I'm a university student and aspiring developer."/>
        </h1>
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
