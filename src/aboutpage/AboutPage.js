import './aboutpagecss.css';
import ziye_profile_pic from './ziye_profile_pic.jpg';

function AboutPage() {
    return (
        <div className="about_basics">
             <img src={ziye_profile_pic} alt="Name logo that goes on upper left" style={{ width: '430.5px', height: '472.125px' }}/>

            
        </div>
    );
}

export default AboutPage;