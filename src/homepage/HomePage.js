import AboutPage from '../aboutpage/AboutPage';

import portfolio_upper from './portfolio_upper.png';
import './homepagecss.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function buttons() {
    return (
        <Router>
            <div>
                <Route path="/ home" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        </Router>
    )
}

function Navigation() {
    return (
        <div>
            <Link to="/ home">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

function HomePage() {
    const goToHome = () => {
        const homeSection = document.getElementById("home-section");
        homeSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="homepage_basics">
            <div className={"gridsidebyside"} style={{ width: '1000px', height: '70px' }}>
                <img src={portfolio_upper} alt="Name logo that goes on upper left" style={{ width: '400px', height: '70px' }}/>
                <button onClick={goToHome} className="buttonsettings">Home</button>
                <div id="home-section"></div>
                <button onClick={scrollToAbout} className="buttonsettings">About</button>
                <div id="about-section"></div>
            </div>
        </div>
    );
}

export default HomePage;