import './aboutpagecss.css';
import ziye_profile_pic from './ziye_profile_pic.jpg';
import aboutme from './aboutme.png';
import abouttextpaper from './abouttextpaper.png';
import React, { useRef, useEffect } from "react";

function AboutPage({scrollToAbout}) {
    const aboutto = useRef(null);

    useEffect(()=> {
        if (scrollToAbout) {
            aboutto.current.scrollIntoView({behavior: "smooth" });
        }
      }, [scrollToAbout]);
    return (
        <div ref={aboutto} className="about_basics gridforabout">
            <img src={aboutme} alt="aboutmetextaaa" className="aboutmetxt" style={{ width: '500px', height: '200px' }}/>
            <div className="secondrow">
                <img src={ziye_profile_pic} alt="my realistic self" className="profile_pic" style={{ width: '430.5px', height: '472.125px' }}/>
                <img src={abouttextpaper} alt="the background to about text" className="paper" style={{ width: '600px', height: '700px' }}/>
                <p className="papertext">Hi visitor! I'm Ziye (pronounced zee-ay). My name might not be intuitive, but the projects I want to create are. I'm currently a second-year student at Northwestern University
                pursuing a bachelor's in computer science and a certificate in Human-Computer-Interactions. I'm passionate about computer programming, especially game development, user-interface, and computer graphics. </p>
                <p className="papertext2">From crafting art and stories to building with Legos, my childhood brimmed with creativity. When I came to college, I feared adulthood might dampen this spirit. It wasn’t until a computer science class, where my first Python-created animations came to life with tkinter, that I discovered I'm able to design and innovate through code.</p>
            </div> 
        </div>
    );
}

export default AboutPage;