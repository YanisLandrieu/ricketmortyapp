import React from 'react'
import '../styles/Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCross, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
     <div className='card_perso'>
            <img src={props.img}></img>
            <p className='card-name'>{(props.status == "Dead") ? <FontAwesomeIcon icon={faCross} /> : ""} {props.name}</p>
            <p className='card-loc'><FontAwesomeIcon  icon={faLocationDot}  /> {props.loc}</p>
            <NavLink to={`/Single/${props.id}`}>
            <div className='bouton'>
              <button>Détails <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
            </NavLink>
              
     </div>
     
  )
}

export default Card
