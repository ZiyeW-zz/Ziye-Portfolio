import React from "react";
import './homepagecss.css';

function HomePage() {
    const goToHome = () => {
        const TopSection = document.getElementById("top-section");
        TopSection.scrollIntoView({ behavior: "smooth" });};
 
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });};

    const scrollToWork = () => {
        const aboutSection = document.getElementById("work-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });};

    const scrollToResume = () => {
        const aboutSection = document.getElementById("resume-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });};

    const scrollToContact = () => {
        const aboutSection = document.getElementById("contact-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });};
    return (
        <div className="homepage_basics">
            <div className={"gridsidebyside"}>
                <div className="responsive-image">
                    <button onClick={goToHome} className="buttonsettings item1">ZiyeWang</button>
                </div>
            <div className="gridsidebyside2">
                <button onClick={scrollToAbout} className="buttonsettings item2">About</button>
                <button onClick={scrollToWork} className="buttonsettings item3">My Work</button>
                <button onClick={scrollToResume} className="buttonsettings item4">Resume</button>
                <button onClick={scrollToContact} className="buttonsettings item5">Contact</button>
            </div>
        </div>
    </div>
);
}


export default HomePage;


