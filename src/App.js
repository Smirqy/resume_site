import React, { useEffect, useState } from 'react';
import MenuSelection from './components/MenuSelection';
import AboutSection from './components/AboutSectionComponent';
import AcademicsSection from './components/AcademicsSectionComponent';
import ProjectsSection from './components/ProjectsSectionComponent';
import ResumeSection from './components/ResumeSectionComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import CharacterModel from './components/3dCharacterComponent';
import { setIndexMethod } from './components/3dCharacterComponent';
import './App.css';

function App() {

 const [currSection, setCurrSection] = useState('about');

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
      <div className="header-container">
        <h3 className='clean-header font-weight-300'>NOAH CARLSON <span className="subHeader-text"> LEVEL 23
          <FontAwesomeIcon icon={faCaretDown} className='subheader-icon' size=''/>
        </span></h3>
        
        {/* <h5 className='clean-header opacity-50 font-weight-300'>Software Engineer</h5> */}
      </div>
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
          <div className="column column-right">
            <div className='text-container'>
              {getSection()}
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
