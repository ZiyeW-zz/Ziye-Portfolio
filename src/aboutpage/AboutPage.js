import './aboutpagecss.css';
import ziye_profile_pic from './ziye_profile_pic.png';
// import aboutme from './aboutme.png';
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
            {/* <div className="rectOutline"></div> */}
            <h1 className="aboutmetxt"> About Me </h1>
            {/* <img src={aboutme} alt="aboutmetextaaa" className="aboutmetxt" style={{ width: '500px', height: '200px' }}/> */}
            <div className="secondrow">

                <img src={ziye_profile_pic} alt="my realistic self" className="profile_pic" />
                <div className="MidRect"></div>


                {/* <img src={abouttextpaper} alt="the background to about text" className="paper" style={{ width: '600px', height: '700px' }}/> */}
                <p className="papertext">I’m something of a dreamer. My favorite fictional character is Paul Atreides. My favorite real person is my sister. When I was young I wished there was a career that let me draw, paint, play games, read stories, listen to music, and play volleyball with my friends. I like rompers rather than dresses
                    and knee-length shorts rather than skirts. The thing that motivates me is a combination of food, family, and God. </p>
                {/* <p className="papertext2">Outside of coding, I'm into volleyball, gouache painting, and recently, rock climbing. I also blend my love for technology with creativity by contributing as a photographer and web developer for our college newspaper. This harmony between my technical and personal passions enriches my journey in computer science, driving me to explore and innovate further.</p> */}
                <div className="LightRect"></div>

            </div> 
        </div>
    );
}

export default AboutPage;