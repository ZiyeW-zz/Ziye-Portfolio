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
                    <p className="roleforrect"> Role: fullstack web developer</p>
                    <p className="descforrect"> Me and students from MIT Coding for Good worked together to develop an mentor-mentee algorithm and incorporate that into CovEd's website.</p>
                </div>
            </div>

            <div className="Roombeebasics">
            <div className="rectforwork">
                <img src={roombeepic} alt="the visual aide for the roombee picture" className="picforrect" style={{ width: '400px', height: '400px' }}/>

                    <p className="titleforrect">Roombee.</p>
                </div>
            </div>

            <div className="Nbnbasics">
                <div className="rectforwork">
                    <img src={nbnpic} alt="the visual aide for the nbn picture" className="picforrect" style={{ width: '500px', height: '400px' }}/>

                    <p className="titleforrect">NorthByNorthwestern</p>
                </div>
            </div>
            
            
            <p className="pastwork"> Previous</p>

            <div className="Drizzlebasics">
                <div className="rectforwork">
                    <img src={drizpic} alt="the visual aide for the drizzle picture" className="picforrect" style={{ width: '400px', height: '400px' }}/>

                    <p className="titleforrect">drizzle</p>
                </div>
            </div>
    
        </div>

    );
}

export default WorkPage;