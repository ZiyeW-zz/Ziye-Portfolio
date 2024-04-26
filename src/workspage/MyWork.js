import './myworkcss.css';
import projectsheader from './projectsheader.png';
import RectangleForWork from './shape';
import covedpic from './covedpic.png'
import roombeepic1 from './RoombeeHome.png'
import roombeepic2 from './RoombeeSplash.png'
import nbnpic from './nbnpic.png'
import drizpic from './drizzlepic.png'
import MG1 from './PerSONifyLogin.png'
import MG2 from './PerSONifyHome.png'
import MG3 from './PerSONifyNext.png'

function WorkPage() {
    return (
        <div className="workbasics workgrid">
            <div className="image1">
                <img src={projectsheader} alt="my projects header" className="" style={{ width: '500px', height: '200px' }}/>
            </div>
            <p className="currentwork"> Current</p>

            <div className="MoodGeniebasics">
                <div className="rectforwork">
                <div className = "sidebysidepics"> 
                    <img src={MG1} alt="the visual aide for the MoodGenie picture"  style={{ width: '185px', height: '400px' }}/>
                    <img src={MG2} alt="the visual aide for the MoodGenie picture"  style={{ width: '185px', height: '400px' }}/>
                    <img src={MG3} alt="the visual aide for the MoodGenie picture"  style={{ width: '185px', height: '400px' }}/>

                </div>                    
                <p className="titleforrect">Mood Genie</p>
                    <p className="roleforrect" style={{}}> Role: fullstack app developer</p>
                    <p className="descforrect" style={{marginTop: '-10px' }}> Mood Genie is an XCode project created during the Northwestern University hosted Wilhacks, a MLH hackathon. This app utilizes Spotify API to generate 'personas' for the users and allows fiends to connect through music. 
                    
                    This project won 'Best Technology at Wildhacks </p>

                    <p className="descforrect" style={{ marginTop: '160px'}}> My primary role for this project was to develop the frontend using SwiftUI. I also learned Flask to generate a small-scale user database and connect the backend to the frontend.</p>

                </div>
            </div>
            
            <div className="Covedbasics">
                <div className="rectforwork">
                    <img src={covedpic} alt="the visual aide for the coved picture" className="picforrect" style={{ width: '550px', height: '400px' }}/>
                    <p className="titleforrect">CovEd Mentor-Mentee Matching and Web Development</p>
                    <p className="roleforrect" style={{ marginTop: '70px' }}> Role: fullstack web developer</p>
                    <p className="descforrect" style={{ marginTop: '70px' }}>  Students from MIT Coding for Good and I worked together to develop an mentor-mentee algorithm and incorporate that into CovEd's website.</p>
                </div>
            </div>

            <div className="Roombeebasics">
            <div className="rectforwork">
                <div className = "sidebysidepics"> 
                    <img src={roombeepic2} alt="the visual aide for the roombee picture"  style={{ width: '185px', height: '400px' }}/>
                    <img src={roombeepic1} alt="the visual aide for the roombee picture"  style={{ width: '185px', height: '400px' }}/>
                </div>
                
                <div style={{ marginLeft: '-50px' }}>
                    <p className="titleforrect">Roombee.</p>
                    <p className="roleforrect"> Role: front-end app developer</p>
                    <p className="descforrect" style={{ marginTop: '40px' }}>  Roombee is the first place winner of a hackathon turned into a startup. This app is designed to be roommate manager, with features to calculate shared budgets and organize schedules. I work on the front-end, to develop an intuitive and engaging app design. </p>
                </div> 
                </div> 

            </div>
{/* 
            <div className="Nbnbasics">
                <div className="rectforwork">
                    <img src={nbnpic} alt="the visual aide for the nbn picture" className="picforrect" style={{ width: '500px', height: '400px' }}/>

                    <p className="titleforrect">NorthByNorthwestern</p>
                </div>
            </div>
             */}
            
            <p className="pastwork"> Previous</p>

            <div className="Drizzlebasics">
                <div className="rectforwork">
                    <img src={drizpic} alt="the visual aide for the drizzle picture" className="picforrect" style={{ width: '400px', height: '400px' }}/>

                    <p className="titleforrect">drizzle</p>
                    <p className="roleforrect"> Role: front-end app developer</p>
                    <p className="descforrect">  Drizzle is a app submitted to the 2023 Wildhacks competition. The app features include a timer page to track water usage, and an algorithm to analyze your water usage during showers in an effort to reduce resource and energy waste. </p>
                </div>
            </div>
    
        </div>

    );
}

export default WorkPage;