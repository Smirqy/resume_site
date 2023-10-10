import React, { useEffect, useState } from 'react';
import MenuSelection from './components/MenuSelection';
import AboutSection from './components/AboutSectionComponent';
import AcademicsSection from './components/AcademicsSectionComponent';
import ProjectsSection from './components/ProjectsSectionComponent';
import ResumeSection from './components/ResumeSectionComponent';
import './App.css';

function App() {

 const [currSection, setCurrSection] = useState('about');

  const getSection = () => {
    console.log("SETTING SECTION ", currSection);
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
        <h3 className='clean-header font-weight-300'>Noah Carlson</h3>
        <h5 className='clean-header opacity-50 font-weight-300'>Software Engineer</h5>
      </div>
      <div className="screen-container">
        <div className="column-container">
          <div className="column column-left">
            <div className="menu-container">
              <MenuSelection icon="user" title="ABOUT" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="academics" title="ACADEMICS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="projects" title="PROJECTS" setSection={setCurrSection} currSection={currSection}/>
              <MenuSelection icon="resume" title="RESUME" setSection={setCurrSection} currSection={currSection}/>
            </div>
          </div>
          <div className="column column-right">
            <h3 className="left clean-header display-header">{currSection.toUpperCase()}</h3>
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
