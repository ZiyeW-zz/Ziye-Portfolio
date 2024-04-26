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
                <p className="papertext">Hi visitor! I'm Ziye (pronounced zee-ay). I'm currently a second-year student at Northwestern University
                pursuing a bachelor's in computer science and a certificate in Human-Computer-Interactions. I'm passionate about computer programming, especially game development, user-interface, and computer graphics. My dream is to develop immersive games and apps, leveraging VR and AR technologies to push the boundaries of human-computer interaction, focusing on creating unique, interactive experiences that blend the physical and digital worlds seamlessly.</p>

                <p className="papertext2">Outside of coding, I'm into volleyball, gouache painting, and recently, rock climbing. I also blend my love for technology with creativity by contributing as a photographer and web developer for our college newspaper. This harmony between my technical and personal passions enriches my journey in computer science, driving me to explore and innovate further.</p>
            </div> 
        </div>
    );
}

export default AboutPage;