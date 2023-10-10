import '../stylesheets/MenuSelection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faHammer, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import React from 'react';


function MenuSelection(props) {
    const {icon, title, setSection, currSection} = props;

    const getIcon = () => {
        if(icon === "user"){
            return (
                <FontAwesomeIcon icon={faUser} className='icon'/>
            );
        }
        else if(icon === "academics") {
            return (
                <FontAwesomeIcon icon={faGraduationCap} className='icon'/>
            );
        }
        else if(icon === "projects") {
            return (
                <FontAwesomeIcon icon={faHammer} className='icon'/>
            );
        }
        else if(icon === "resume") {
            return (
                <FontAwesomeIcon icon={faBriefcase} className='icon'/>
            );
        }
    }

    const getSquare1 = () => {
        if(currSection === title.toLowerCase()) {
            return (
                <div className="square-1 rotate-45"></div>
            );
        }
        else {
            return (
                <div className="square-1"></div>
            );
        }
    }

    const getSquare2 = () => {
        if(currSection === title.toLowerCase()) {
            return (
                <div className="square-2 rotate-135"></div>
            );
        }
        else {
            return (
                <div className="square-2"></div>
            );
        }
    }

    const handleClick = () => {
        setSection(title.toLowerCase());
    }

    return (
        
        <div className="menu_selection" >
            {getIcon()}
            <div className="menu-selection-hover" onClick={() => handleClick()}></div>
            <h3 className='clean-header text' onClick={() => handleClick()}>{title}</h3>
            
            {getSquare2()}
            {getSquare1()}

        </div>
    );
}

export default MenuSelection;

