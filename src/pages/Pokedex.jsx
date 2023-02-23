import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pokedex/Pagination'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {
    const { nameTrainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()
    const [selectValue, setSelectValue] = useState('allpokemons')

    useEffect(() => {
        if (selectValue === 'allpokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0'
            axios.get(url)
                .then(res=>setPokemons(res.data))
                .catch(error=>console.log(error))
        } else {
            axios.get(selectValue)
                .then(res=> {
                    const results = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({results})
                })
                .catch(error=>console.log(error))
        }
    }, [selectValue])

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ''
    }
    
// ----------------------PAGINACION---------------------------

const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(9)
const initialPoke = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage
const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage) 



// ----------------------PAGINACION---------------------------

  return (
    <div className='pokedex'>
        <Header/>
        <h1 className='pokedex__title'>
            <span className='pokedex__title-name'>Hi {nameTrainer}</span>, here find your favorite pokemon.
        </h1>

        <div className='pokedex__actions'>
            <form className='pokedex__actions__form' onSubmit={handleSubmit}>
                <input className='pokedex__actions__form-input' id="pokemon" type="text" />
                <button className='pokedex__actions__form-btn'>Search</button>
            </form>

            <SelectTypes setSelectValue={setSelectValue} />
        </div>
        <Pagination 
            page={page} 
            maxPage={maxPage}
            setPage={setPage}
        />
        <div className='pokedex__container-pokemon'>
            {
                pokemons?.results.slice(initialPoke, finalPoke).map(pokemon => (
                    <PokeCard
                    key={pokemon.url}
                    pokemon={pokemon}
                    />
                    ))
                }
        </div>
        <br /><br /><br />
        <Pagination 
            page={page} 
            maxPage={maxPage}
            setPage={setPage}
        />
    </div>
  )
}

export default Pokedex