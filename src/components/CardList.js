import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../styles/CardList.scss'
import axios from 'axios'



const CardList = () => {

const [characters, setCharacter] = useState([])

useEffect (() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
  setCharacter(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  })
});
  return (
    <div className='cards'>
      {characters.map((character) => {
        return <Card name={character.name} img ={character.image} loc ={character.location.name} status={character.status} id={character.id}/>
      })}
        
    </div>
  )
}

export default CardList
