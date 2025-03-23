import React, { useEffect, useState } from 'react';
import MenuSelection from './components/MenuSelection';
import AboutSection from './components/AboutSectionComponent';
import AcademicsSection from './components/AcademicsSectionComponent';
import ProjectsSection from './components/ProjectsSectionComponent';
import ResumeSection from './components/ResumeSectionComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import CharacterModel from './components/3dCharacterComponent';
import { setIndexMethod } from './components/3dCharacterComponent';
import './App.css';
import PlatformerGame from "./components/PlatformerComponent";


export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
}

function App() {

  

  const [currSection, setCurrSection] = useState('about');
  const [isShiftedDown, setIsShiftedDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const setScreenHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    setScreenHeight();
  
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);

  useEffect(() => {
    setMenuOpen(false)
  }, [currSection]);
  const getSection = () => {
    
    if(currSection === 'about') {
      return ( 
        <AboutSection />
      );
    }
    else if(currSection === 'academics') {
      return (
        <AcademicsSection />
      );
    }
    else if(currSection === 'projects') {
      return (
        <ProjectsSection />
      );
    }
    else if(currSection === 'resume') {
      return (
        <ResumeSection />
      );
    }
  }

  return (
    <div className="App">
    {windowWidth > 768 ? (
      <div className="header-container">
        <h3 className='clean-header font-weight-300'>NOAH CARLSON <span className="subHeader-text"> LEVEL 24
          <FontAwesomeIcon icon={faCaretDown} className='subheader-icon' size=''/>
        </span></h3>
        {/* <h5 className='clean-header opacity-50 font-weight-300'>Software Engineer</h5> */}
      </div>):
      (
        <div className="header-container">
          <h3 className='clean-header font-weight-300'>NOAH CARLSON <span className="subHeader-text"> LEVEL 24
            <FontAwesomeIcon icon={faCaretDown} className='subheader-icon' size=''/>
          </span></h3>
          {/* <h5 className='clean-header opacity-50 font-weight-300'>Software Engineer</h5> */}
          <div className='menu-button-wrapper' onClick={() => setMenuOpen(prev => !prev)}>
            <FontAwesomeIcon icon={faBars} className='menu-button'/>
          </div>
        </div>
      )}
      {windowWidth > 768 ? (
      <div className="screen-container">
        <div className='model-selection' onClick={() => {Math.random() > 0.5 ? setIndexMethod(7): setIndexMethod(5)}}/> 
        <div className="model-container">
          <CharacterModel />
        </div>
        <div className="column-container">
          <div className="column column-left">
            <div className="menu-container">
              <MenuSelection icon="user" title="ABOUT" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="academics" title="ACADEMICS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="projects" title="PROJECTS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="resume" title="RESUME" setSection={setCurrSection} currSection={currSection}/>
            </div>
          
          </div>
          <div className="column column-middle">
            {/* <img className="character" src={process.env.PUBLIC_URL + '/brute_breathing.gif'} alt="Character" /> */}
            {/* <img className="shadow" src={process.env.PUBLIC_URL + '/shadow2.png'} alt="Shadow" /> */}
          </div>
          <div className='column column-right-wrapper'>
            <div className="column-right">
            {/* <PlatformerGame /> */}
              <div className='text-container'>
                {getSection()}
              </div>
            </div>
          </div>
        </div>
      </div>) :
      // MOBILE
      (<>
        <div className="screen-container">
        <div className="column-container">
          <div className={`column column-right-wrapper ${isShiftedDown ? 'shifted' : ''}`}>
              <div className="column-right">
              {/* <PlatformerGame /> */}
                <div className='text-container'>
                  {getSection()}
                </div>
              </div>
            </div>
        </div>
        {!isShiftedDown ? (<></>):(<div className='model-selection' onClick={() => {Math.random() > 0.5 ? setIndexMethod(7): setIndexMethod(5)}}/> )}
        <div className='down-arrow-button-container' onClick={() => setIsShiftedDown(!isShiftedDown)}>
          <FontAwesomeIcon icon={faArrowDown} className={`down-arrow-button ${isShiftedDown ? 'flipped' : ''}`} />
        </div>
        <div className="model-container">
          <CharacterModel />
        </div>
        </div>
        {menuOpen && (<div className="menu-overlay" onClick={() => setMenuOpen(false)} />)}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu-content">
              <MenuSelection icon="user" title="ABOUT" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="academics" title="ACADEMICS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="projects" title="PROJECTS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="resume" title="RESUME" setSection={setCurrSection} currSection={currSection}/>
          </div>
        </div>
      </>
      )}
      
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
