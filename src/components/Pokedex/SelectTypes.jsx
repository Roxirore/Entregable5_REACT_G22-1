import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectTypes = ( {setSelectValue} ) => {

const [types, setTypes] = useState()

useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type'
    axios.get(url)
        .then(res=>setTypes(res.data))
        .catch(error=>console.log(error))
}, [])

const handleChange = e => {
    setSelectValue(e.target.value)
}

  return (
    <div>
        <select onChange={handleChange}>
            <option value="allpokemons">all pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectTypes