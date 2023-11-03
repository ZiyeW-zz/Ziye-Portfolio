import logo from './logo.svg';
import './App.css';
import HomePage from './homepage/HomePage';
import AboutPage from './aboutpage/AboutPage';
import Typewriter from './typewriter/Typewriter';


function App() {
  return (
    
    <div className="App">
      <HomePage />
      <h1><Typewriter text="weelcome to..." /></h1>
      <h1><Typewriter text="Ziiye Wang's" /></h1>
      <h1><Typewriter text="p  o r t f o l i o" /></h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AboutPage />
    </div>
  );
}

export default App;
