import React from 'react'
import manan from '../../images/manan.png'
import '../../styles/mainLanding/landing.scss'
import Contacts from './Contacts'

const MainLanding = ()=>(

    <div className="container">
        <img className="main-image" src={manan}/>
        <hr style={{width:'80vw'}}/>
        <h2 className="main-text" >Hey, I'm Manan Anand. I am a Web Developer based in Delhi. </h2>
        <Contacts/>

    </div>
);

export default MainLanding;
