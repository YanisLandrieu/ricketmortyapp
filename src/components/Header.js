import React from 'react';
import logo from '../assets/logo-rick-et-morty.png';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <img src={logo} className='logo_rick'></img>
            <p>Rick et Morty : Aprentissage du react sans prise de tête</p>
        </div>
        
        <div className='logos'>
          <FontAwesomeIcon className='logo_react' icon={faHtml5} color='orange' />
          <FontAwesomeIcon className='logo_react' icon={faCss3Alt} color='blue' />
          <FontAwesomeIcon className='logo_react' icon={faJs} color='yellow' />
          <FontAwesomeIcon className='logo_react' icon={faReact} color='powderblue' />
        </div>
    </div>
  )
}

export default Header
