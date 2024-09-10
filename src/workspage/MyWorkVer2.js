import './myworkver2css.css';
// import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function WorkPageVer2() {
    return (
        <div className="works-basics">
            <div className="gridforworks">
            <h1 className="workTitle"> Projects </h1>
            <text className="currenttxt"> Current </text>

            <div className="currentContent">
                <div className="RoombeeBasics">
                <div className="secondRectBackground"></div>
                <div className="WorksCardRight">
                    <div className="CardTitle"> Roombee </div>
                    <div>
                    <a href="https://www.roombeeapp.com" target="_blank" rel="noopener noreferrer" className="CardLink">
                        roombeeapp.com
                        {/* <FontAwesomeIcon icon={faExternalLinkAlt} className="RoombeeLink" /> */}
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> AWS Lambda </div>
                        <div className="skillTags"> Firebase </div>
                        <div className="skillTags"> Swift </div>
                    </div>
                    <div className="CardText"> CTO of Roombee, a startup based in Northwestern University's Garage. Roombee is developing an IOS app for roommate management.</div>
                </div>


                </div> {/*roombeeBasics */}
                <div className="CampusKitchensBasics">
                    <div className="secondRectBackground"></div>
                    <div className="WorksCardRight">
                    <div className="CardTitle"> Campus Kitchens </div>
                    <div>
                    <a href="https://northwestern.campuslabs.com/engage/organization/campuskitchens" target="_blank" rel="noopener noreferrer" className="CardLink">
                        CampusKitchensNorthwestern.com
                        {/* <FontAwesomeIcon icon={faExternalLinkAlt} className="RoombeeLink" /> */}
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> High-Fidelity Prototyping </div>
                        <div className="skillTags"> Interface Needfinding </div>
                        <div className="skillTags"> React.js </div>
                    </div>
                    <div className="CardText"> Creating a Volunteer portal for Campus Kithcens, a not for profit student organization that redistributes unused food from college cafeterias.</div>
                </div>

                </div>

            </div> {/* currentContent */}

            <text className="pasttxt"> Past </text>

            <div className="pastContent">
                <div className="MoodGenieBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardRight">
                    <div className="CardTitle"> Mood Genie </div>
                    <div>
                    <a href="https://github.com/ZiyeW-zz" target="_blank" rel="noopener noreferrer" className="CardLink">
                        githubrepo.com
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Flask </div>
                        <div className="skillTags"> SpotifyAPI </div>
                        <div className="skillTags"> Xcode </div>
                    </div>
                    <div className="CardText"> Ios App designed for the 2024 Wildhacks. Won Best Technology. </div>
                </div>
                </div>

                <div className="CovEdBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardRight">
                    <div className="CardTitle"> Mentor-Mentee Dashboard </div>
                    <div>
                    <a href="https://www.coved.org/" target="_blank" rel="noopener noreferrer" className="CardLink">
                        githubrepo.com
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
                    <div className="CardText"> Mini-game developed on Playdate SDK and programed with Lua </div>
                </div>
                </div>


                <div className="DrizzleBasics">
                {/* <div className="secondRectBackground"></div> */}
                <div className="WorksCardRight">
                    <div className="CardTitle"> Drizzle </div>
                    <div>
                    <a href="https://github.com/ZiyeW-zz" target="_blank" rel="noopener noreferrer" className="CardLink">
                        githubrepo.com
                        </a>
                    </div>
                    <div className="skillTagsContainer">
                        <div className="skillTags"> Storyboard </div>
                        <div className="skillTags"> Swift </div>
                    </div>
                    <div className="CardText"> Ios App demoed for the 2023 Wildhacks. </div>
                </div>
                </div>
            </div>
    



            </div> 

        </div> //works-basics

    );
}

export default WorkPageVer2;