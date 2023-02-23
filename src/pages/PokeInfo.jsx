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

console.log(poke.moves)

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
                <div className='pokeinfo__top'>
                    <div className='pokeinfo__top-img'>
                        <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                    </div>
                    <div className='pokeinfo__top-title'>
                        <h3>#{poke?.id}</h3>
                        <h1>{poke?.name}</h1>
                    </div>
                    <div className='pokeinfo__top-description'>
                        <div className='pokeinfo__top-description-type'>
                            <h3>Tipo</h3>
                            <div>
                                <p>tipo 1</p>
                                <p>tipo 2</p>
                            </div>
                        </div>
                        <div className='pokeinfo__top-description-hability'>
                            <h3>Habilidades</h3>
                            <div>
                                <p>habilidad 1</p>
                                <p>habilidad 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pokeinfo__botton'>

                </div>
            </div>
          )
    }
    

}

export default PokeInfo