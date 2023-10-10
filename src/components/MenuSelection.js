import '../stylesheets/MenuSelection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faHammer, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import React from 'react';


function MenuSelection(props) {
    const {icon, title, setSection} = props;

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

    const handleClick = () => {
        setSection(title.toLowerCase());
    }

    return (
        
        <div className="menu_selection" >
            {getIcon()}
            <div className="menu-selection-hover" onClick={() => handleClick()}></div>
            <h3 className='clean-header text' onClick={() => handleClick()}>{title}</h3>
            <div className="square-2"></div>
            <div className="square-1"></div>

        </div>
    );
}

export default MenuSelection;

