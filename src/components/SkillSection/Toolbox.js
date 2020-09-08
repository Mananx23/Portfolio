import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faHtml5,faCss3,faJs,faSass,faGitAlt,faNodeJs,faReact} from '@fortawesome/free-brands-svg-icons'
 import '../../styles/Skill/Toolbox.scss';
import Skills from './Skills';
import Intrests from './Intrests';

const Toolbox = ()=>(
    <div className="toolbox" style={{marginTop:'80px'}}>
        <h2 style={{color:'white'}} >Toolbox</h2>
        
        <div className="tool-icons">
        <FontAwesomeIcon icon={faHtml5} size="3x" color="white" />
        <FontAwesomeIcon icon={faCss3} size="3x" color="white" />
        <FontAwesomeIcon icon={faJs} size="3x"  color="white"/>
        <FontAwesomeIcon icon={faSass} size="3x" color="white"  />
        <FontAwesomeIcon icon={faGitAlt} size="3x" color="white" />
        <FontAwesomeIcon icon={faNodeJs} size="3x" color="white" />
        <FontAwesomeIcon icon={faReact} size="3x" color="white" />
        </div>
        <Skills/>
        <Intrests/>
    </div>
)

export default Toolbox;