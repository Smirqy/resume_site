import logo from './logo.svg';
import MenuSelection from './components/MenuSelection';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h3 className='clean-header'>Noah Carlson</h3>
        <h5 className='clean-header opacity-50'>Software Engineer</h5>
      </div>
      <div className="screen-container">
        <div className="column-container">
          <div className="column column-left">
            <div className="menu-container">
              <MenuSelection icon="user" title="ABOUT" />
              <MenuSelection icon="academics" title="ACADEMICS" />
              <MenuSelection icon="projects" title="PROJECTS" />
              <MenuSelection icon="resume" title="RESUME" />
            </div>
          </div>
          <div className="column column-right">
            <h3 className="left clean-header display-header">ABOUT</h3>
            <div className='text-container'>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header">
      

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
          NOOOO
        </a>
        
      </header> */}
