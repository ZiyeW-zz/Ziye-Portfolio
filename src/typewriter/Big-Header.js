import './bigheadercss.css';

function BigHeader() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="homepage_basics">
            <img src={portfolio_upper} className="name_upper" alt="Name logo that goes on upper left" style={{ width: '400px', height: '250px' }}/>
            <button onClick={scrollToAbout}>About</button>
            <div id="about-section"></div>
            
        </div>
    );
}

export default BigHeader;