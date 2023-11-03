import './resumepagecss.css';
import resumeheader from './resumeheader.png';
import pdf from './Resume.pdf'
import res from './Resume.png'


function ResumePage() {
    return (
        <div className="resumebasics resumegrid">
            <img src={resumeheader} alt="white and black colored" className="resumeimage" style={{ width: '375px', height: '150px' }}/>
            <img src={res} alt="An image copy of my resume, placeholder until I find more time to hardcode it in" className="actualresume" />
            <a href={pdf} className="downloadresume" download="Ziye_Wang_Resume.pdf">Download</a>


        </div>
    );
}

export default ResumePage;