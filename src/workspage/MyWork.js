import './myworkcss.css';
import projectsheader from './projectsheader.png';
import RectangleForWork from './shape';
import covedpic from './covedpic.png'
import roombeepic from './roombee.png'
import nbnpic from './nbnpic.png'
import drizpic from './drizzlepic.png'

function WorkPage() {
    return (
        <div className="workbasics workgrid">
            <div className="image1">
                <img src={projectsheader} alt="my projects header" className="" style={{ width: '500px', height: '200px' }}/>
            </div>
            <p className="currentwork"> Current</p>
            
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
                <img src={roombeepic} alt="the visual aide for the roombee picture" className="picforrect" style={{ width: '400px', height: '400px' }}/>
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