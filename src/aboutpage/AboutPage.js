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
        <div ref={aboutto} className="about_basics">
            <div className="gridforabout">
                {/* <div className="rectOutline"></div> */}
                <div className="rectOutline"></div>
                <h1 className="aboutmetxt"> ABOUT </h1>
                <img src={ziye_profile_pic} alt="my realistic self" className="profile_pic" />
                <div className="codeBox"> 
                    
                    {/* <p className="codePre"> >></p>
                    <p className="codePre"> >></p> */}
                    <p className="codeText"> >> print(Hello World!)
                    </p>
                    <p className="codeText"> >> myName = "Ziye" #pronounced zee-yay
                    </p>

                    <p className="codeText"> >> Ziye.Hometown = “Manlius, New York”</p>

                    <p className="codeText"> >> Ziye.FavoriteFood = “Basidigua”</p>

                    <p className="codeText"> >> Ziye.currently Watching = [“The Bear”] </p>
                        {/* <p className="codeText"> “The Boys”]</p> */}


                </div> 

                <div className="aboutContentText">
                    <div style={{padding: 20}}>
                    <p>I began my coding journey as a hobby and to help out at a nonprofit called CovEducation. I loved teaching students Python and creating animated characters with Tkinter. These experiences ignited my passion for programming. Coming to Northwestern University to study computer science has been one of the best decisions of my life since then, opening up a world of opportunities and deepening my love for the field.</p>

                    <p>My favorite part about coding is the collaborative nature of projects and the blend of creativity with problem-solving. I find joy in turning complex challenges into elegant solutions and bringing ideas to life through code. Whether I'm building a new feature or debugging an existing one, I thrive in environments where teamwork and innovation come together to create something extraordinary.</p>

                    <p>Outside of coding, I'm an eclectic mix of interests and passions. When I was young, I dreamed of a career that would allow me to draw, paint, play games, read stories, listen to music, and play volleyball with my friends. The things that motivate me most are a combination of food, family, and God, which ground me and inspire me to pursue my dreams with passion and purpose.</p>
                    </div>
                </div>

                {/* Background Shapes */}
                <div className="MidRect"></div>
                <div className="LightRect"></div>
                <div className="LightCirc"></div>

            {/* <img src={aboutme} alt="aboutmetextaaa" className="aboutmetxt" style={{ width: '500px', height: '200px' }}/> */}

            


                {/* <img src={abouttextpaper} alt="the background to about text" className="paper" style={{ width: '600px', height: '700px' }}/> */}
                {/* <p className="papertext"></p> */}
                {/* <p className="papertext2">Outside of coding, I'm into volleyball, gouache painting, and recently, rock climbing. I also blend my love for technology with creativity by contributing as a photographer and web developer for our college newspaper. This harmony between my technical and personal passions enriches my journey in computer science, driving me to explore and innovate further.</p> */}
                
            </div>
        </div>
    );
}

export default AboutPage;