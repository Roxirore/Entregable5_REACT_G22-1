import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokedex from './Pokedex'
import './styles/pokeinfo.css'

const PokeInfo = ( {pokemon}) => {
  const [hasError, setHasError] = useState(false);

  const { id } = useParams();

  const [poke, setPoke] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPoke(res.data);
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  }, [id]);

  console.log(poke)

  if (hasError) {
    return (
      <div>
        <h1>😞 The pokemon {id} not found 😞 </h1>
        <br />
        <hr />
        <br />
        <Pokedex />
      </div>
    );
  } else {
    return (
      <div className="pokeinfo">
        <div className="pokeinfo__top">
          <div className={`pokeinfo__top-img bg-${poke?.types[0].type.name}`}>
            <img className='pokeinfo__avatar'
              src={poke?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <div className="pokeinfo__top-title">
            <span>#{poke?.id}</span>
            <h1>{poke?.name}</h1>
          </div>
          <div className="pokeinfo__top-description">
            <div className="pokeinfo__top-description-type">
              <h3>Tipo</h3>
              <div className="pokeinfo__top-description-types">
                <p className='type1'>{`${poke?.types[0].type.name}`}</p>
                <p className='type2'>{`${poke?.types[1].type.name}`}</p>
              </div>
            </div>
            <div className="pokeinfo__top-description-hability">
              <h3>Habilidades</h3>
              <div className="pokeinfo__top-description-habilities">
                <p className='hability1'>{`${poke?.abilities[0].ability.name}`}</p>
                <p className='hability2'>{`${poke?.abilities[1].ability.name}`}</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Stats</h3>
            <div className='stat'>
                <div className='stat__name'>
                    <div>
                        <div>{`${poke?.stats[0].stat.name}`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[1].stat.name}`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[2].stat.name}`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[3].stat.name}`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[4].stat.name}`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[5].stat.name}`}</div>
                    </div>

                </div>
                <div className='stat__base'>
                    <div>
                        <div>{`${poke?.stats[0].base_stat}/150`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[1].base_stat}/150`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[2].base_stat}/150`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[3].base_stat}/150`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[4].base_stat}/150`}</div>
                    </div>
                    <div>
                        <div>{`${poke?.stats[5].base_stat}/150`}</div>
                    </div>

                </div>
            </div>
          </div>
        </div>

        <div className="pokeinfo__botton">
          <h3>Movements</h3>
          <div className='moves'>
            <div>{`${poke?.moves[0].move.name}`}</div>
            <div>{`${poke?.moves[1].move.name}`}</div>
            <div>{`${poke?.moves[2].move.name}`}</div>
            <div>{`${poke?.moves[3].move.name}`}</div>
            <div>{`${poke?.moves[4].move.name}`}</div>
            <div>{`${poke?.moves[5].move.name}`}</div>
            <div>{`${poke?.moves[6].move.name}`}</div>
            <div>{`${poke?.moves[7].move.name}`}</div>
            <div>{`${poke?.moves[8].move.name}`}</div>
            <div>{`${poke?.moves[9].move.name}`}</div>
            <div>{`${poke?.moves[10].move.name}`}</div>
            <div>{`${poke?.moves[11].move.name}`}</div>
            <div>{`${poke?.moves[12].move.name}`}</div>
            <div>{`${poke?.moves[13].move.name}`}</div>
            <div>{`${poke?.moves[14].move.name}`}</div>
            <div>{`${poke?.moves[15].move.name}`}</div>
            <div>{`${poke?.moves[16].move.name}`}</div>
            <div>{`${poke?.moves[17].move.name}`}</div>
            <div>{`${poke?.moves[18].move.name}`}</div>
            <div>{`${poke?.moves[19].move.name}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeInfo