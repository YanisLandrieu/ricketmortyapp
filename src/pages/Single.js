import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import '../styles/Single.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Episodes from '../components/Episodes';



const Single = () => {

  const {id} = useParams();

  const [characterEpisodes, setCharacterEpisodes] = useState([]);

  const [characterName, setCharacterName] = useState("");
  const [characterLocation, setCharacterLocation] = useState("");
  const [characterSpecies, setCharacterSpecies] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [characterGender, setCharacterGender] = useState("");

  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      let res = response.data;
    setCharacterEpisodes(res.episode);
    setCharacterName(res.name);
    setCharacterLocation(res.location.name);
    setCharacterSpecies(res.species);
    setCharacterImage(res.image);
    setCharacterGender(res.gender);
    })
    .catch(function (error) {
      console.log(error);
    })
  });

  return (
    <div>
          <Header /> 
          <div className='bg-white'>
            <div className='container'>
              <div className='row'>
                <div className='col-4 p-4'>
                  <img src={characterImage}></img>
                </div>
                <div className='col-6 p-5'>
                    <h2>{characterName}</h2>
                    <p className='text-body'>{characterLocation}</p>
                    <p className='text-body'>{characterName} est un {characterSpecies} de type {characterGender}</p>
                    <hr></hr>
                    <div className='episodes'>
                      <h2>Episodes : </h2>
                      <ul>
                        {characterEpisodes.map((episode) => {
                          return <Episodes ep={episode}/>
                        })}
                      </ul>
                    </div>
                </div>          
              </div> 
            </div>
          </div>
          
            
    </div>
  )
}

export default Single
