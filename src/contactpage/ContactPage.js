import './contactpagecss.css';


function Linkedin() {
    const linkedInProfileURL = "https://www.linkedin.com/in/ziye-wang-150a50251/";
  
    return (
      <div>
        <p>LinkedIn:</p>
        <a href={linkedInProfileURL} className="linksettings" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </div>
    );
  }

function X() {
    const twitterInProfileURL = "https://twitter.com/ZiyeWang0430";
    return (
      <div>
        <p>Twitter:</p>
        <a href={twitterInProfileURL} className="linksettings" target="_blank" rel="noopener noreferrer">
          Twitter Profile
        </a>
      </div>
    );
  }

  function Git() {
    const GitInProfileURL = "https://github.com/ZiyeW-zz";
    return (
      <div>
        <p>Github:</p>
        <a href={GitInProfileURL} className="linksettings" target="_blank" rel="noopener noreferrer">
          Github Profile
        </a>
      </div>
    );
  }
  

function ContactPage() {
    return (
        <div className="contactbasics contactgrid">
            <p className="texttop">
                Contact Me
            </p>
            <p className="textunder">
                Open to internships and project collaborations
            </p>

            <div className="textbasicsettings linkedin">
                <Linkedin/>
                </div>
            <div className="textbasicsettings X">
                 <X/>
              </div>
            <div className="textbasicsettings github">
                 <Git/>
              </div>
            <p className="emailsettings">
              Email me at: ziyewang2026@u.northwestern.edu
             </p>

        </div>
    );
}

export default ContactPage;