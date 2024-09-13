import './myworkver2css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


//Roombee images
import r1 from './RoombeeForPortfolio/1.png';
import r2 from './RoombeeForPortfolio/2.png';
import r3 from './RoombeeForPortfolio/3.png';
import r4 from './RoombeeForPortfolio/4.png';
import r5 from './RoombeeForPortfolio/5.png';
import r6 from './RoombeeForPortfolio/6.png';

//Campus Kitchens images
import ck1 from './CampusKitchensForPortfolio/LandingPage.png'
import ck2 from './CampusKitchensForPortfolio/SignUp.png'
import ck3 from './CampusKitchensForPortfolio/DashboardMyShifts.png'

//MoodGenie images
import mg1 from './MoodGenie/mg1.png';
import mg2 from './MoodGenie/mg2.png';
import mg3 from './MoodGenie/mg3.png';


//CovEd images
import c1 from './CovEdForPortfolio/MyProfile-Mentee.png'
import c2 from './CovEdForPortfolio/MentorOnboardingStep1.png'
import c3 from './CovEdForPortfolio/MentorOnboardingStep2.png'


//Breakout image
import breakoutImg from './Playdate.png';

//Drizzle images
import d1 from './drizzleForPortfolio/Drizzle1.png';
import d2 from './drizzleForPortfolio/Drizzle2.png';
import d3 from './drizzleForPortfolio/Drizzle3.png';
import d4 from './drizzleForPortfolio/Drizzle4.png';






import ImageSlider from './ImageSlider'; // Import the reusable slider component
import VerticalImageSlider from './VerticalImageSlider';




function WorkPageVer2() {
    const roombeeImages = [r1, r2, r3, r4, r5, r6]
    const campusKitchensImages = [ck1, ck2, ck3]
    const moodGenieImages = [mg1, mg2, mg3]
    const covedImages = [c1, c2, c3]
    const drizzleImages = [d1, d2, d3, d4]
    return (
        <div className="works-basics">
            <div className="gridforworks">
            <h1 className="workTitle"> Projects </h1>
            <text className="currenttxt"> Current </text>

            <div className="currentContent">
                <div className="RoombeeBasics">
                <div className="secondRectBackground"></div>

                <div className="WorksCardLeft">
                    <ImageSlider images={roombeeImages} />
                </div>


                <div className="WorksCardRight">
                    <div className="CardTitle"> Roombee </div>

                    <div>
                    <a href="https://www.roombeeapp.com" target="_blank" rel="noopener noreferrer" className="CardLink">
                        roombeeapp.com
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
                        </a>                      
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> AWS Lambda </div>
                        <div className="skillTags"> Firebase </div>
                        <div className="skillTags"> Swift </div>
                    </div>
                    <div className="CardText"> CTO of Roombee, a startup based in Northwestern University's Garage. Roombee is developing an iOS app for roommate management.</div>
                </div>


                </div> {/*roombeeBasics */}
                <div className="CampusKitchensBasics">
                    <div className="secondRectBackground"></div>

                    <div className="WorksCardLeft">
                    <VerticalImageSlider images={campusKitchensImages} />
                </div>

                    
                    <div className="WorksCardRight">
                    <div className="CardTitle"> Campus Kitchens </div>
                    <div>
                    <a href="https://www.figma.com/proto/YfZxfsFc6AJm1TYBthwveu/High-Fidelity-Prototype?node-id=2198-3991&t=Ibzuk77pKJ8UQTzx-1" target="_blank" rel="noopener noreferrer" className="CardLink">
                        High Fidelity Prototype
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
                     </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> High-Fidelity Prototyping </div>
                        <div className="skillTags"> Interface Needfinding </div>
                        <div className="skillTags"> React.js </div>
                    </div>
                    <div className="CardText"> Creating a volunteer portal for Campus Kitchens, a not-for-profit organization that redistributes unused food from college cafeterias.</div>
                </div>

                </div>

            </div> {/* currentContent */}

            <text className="pasttxt"> Past Projects </text>

            <div className="pastContent">
                <div className="MoodGenieBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardLeft">
                    <ImageSlider images={moodGenieImages} />
                </div>

                <div className="WorksCardRight">
                    <div className="CardTitle"> PerSonify </div>
                    <div>
                    <a href="https://github.com/ZiyeW-zz/Wildhacks2024" target="_blank" rel="noopener noreferrer" className="CardLink">
                        GitHub Repo for Project
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Flask </div>
                        <div className="skillTags"> SpotifyAPI </div>
                        <div className="skillTags"> Xcode </div>
                    </div>
                    <div className="CardText"> iOS App designed for the 2024 Wildhacks hackathon. PerSonify analyzes users' Spotify listening data and desired mood to create personalized playlists. Won the Best Technology Award. </div>
                </div>
                </div>

                <div className="CovEdBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardLeft">
                    <VerticalImageSlider images={covedImages} />
                </div>
                <div className="WorksCardRight">
                    <div className="CardTitle"> Mentor-Mentee Dashboard </div>
                    <div>
                    <a href="https://www.coved.org/" target="_blank" rel="noopener noreferrer" className="CardLink">
                        CovEd.com
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Web Development </div>
                        <div className="skillTags"> Typescript </div>
                        <div className="skillTags"> Mantine </div>
                    </div>
                    <div className="CardText"> Account dashboard for students and mentors under CovEducation, a organization dedicated to helping underprivileged students and school districts. </div>
                </div>
                </div>


                <div className="PlaydateBasics">
                {/* <div className="secondRectBackground"></div> */}

                <div className="WorksCardLeft">
                    <img src={breakoutImg} alt="Breakout Game using Playdate SDK" className="BreakoutImg"/>
                </div>

                <div className="WorksCardRight">
                    <div className="CardTitle"> Breakout Game </div>
                    {/* <div>
                    <a href="https://www.roombeeapp.com" target="_blank" rel="noopener noreferrer" className="CardLink">
                        githubrepo.com
                        </a>
                    </div> */}
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Lua Language </div>
                        <div className="skillTags"> Playdate SDK </div>
                    </div>
                    <div className="CardText"> Mini-game developed on Playdate SDK and programed with Lua. </div>
                </div>
                </div>


                <div className="DrizzleBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardLeft">
                    <ImageSlider images={drizzleImages} />
                </div>
                <div className="WorksCardRight">
                    <div className="CardTitle"> Drizzle </div>
                    <div>
                    <a href="https://github.com/ZiyeW-zz" target="_blank" rel="noopener noreferrer" className="CardLink">
                        GitHub Repo for Project
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Storyboard </div>
                        <div className="skillTags"> Swift </div>
                    </div>
                    <div className="CardText"> iOS App demoed for the 2023 Northwestern Wildhacks hackathon. Drizzle is an environment-friendly app that encourages users to save water.</div>
                </div>
                </div>
            </div>
    



            </div> 

        </div> //works-basics

    );
}

export default WorkPageVer2;