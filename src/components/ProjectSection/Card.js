import React from 'react'

import '../../styles/Project/card.scss';

const Card = (props)=>(

    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
    <img  className="activator" src={props.photo} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text ">{props.title}<i class="material-icons right"></i></span>
      <p><a href="#">Github Repo</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text ">{props.desc}<i class="material-icons right">X</i></span>
      <p>{props.desc}</p>
    </div>
  </div>
            

);

export default Card;