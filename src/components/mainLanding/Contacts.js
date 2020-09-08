import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faGoogle,faLinkedinIn,faFacebookF} from '@fortawesome/free-brands-svg-icons'



const Contacts = ()=>(

<div style={{display:'flex',justifyContent:'space-around',zIndex:1000}}>
 <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
 <FontAwesomeIcon icon={faGoogle} size="3x" color="white" />
 <FontAwesomeIcon icon={faLinkedinIn} size="3x" color="white" />
 <FontAwesomeIcon icon={faFacebookF} size="3x" color="white" />
</div>

);

export default Contacts;