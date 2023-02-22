import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokedex from './Pokedex'


const PokeInfo = () => {

    const [hasError,setHasError] = useState(false)

    const { id } = useParams()
    
    const [poke, setPoke] = useState()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res=>{
                setPoke(res.data)
                setHasError(false)
            })
            .catch(error=>{
                setHasError(true)
                console.log(error)
            })
    }, [id])

    if (hasError) {
        return (
            <div>
                <h1>😞 The pokemon {id} not found 😞 </h1> 
                <br /><hr /><br />
                <Pokedex />
            </div>)
    } else {
        return (
            <div>
                <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                <h1>{poke?.name}</h1>
            </div>
          )
    }
    

}

export default PokeInfo