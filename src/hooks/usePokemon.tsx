import { useState, useEffect } from "react"

interface Pokemon{
    id: number,
    name: string,
    imageUrl: string
}

interface Props{
    id: number
}

const usePokemon = ({id}:Props) => {

    //**************************************************** Hook: useState (variables de estado) ********/

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    //**************************************************** Métodos ********/

    const getPokemonById = async(id: number)=>{

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')

        const data = await response.json();

        setPokemon(
            {
                id: id,
                name: data.name,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
        )

    }

    
    //**************************************************** Hook: useEffect (efectos) ********/

    //✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ Efecto 1: Petición HTTP  ✈ ✈ ✈ ✈/
        useEffect( ()=>{

         },[])


  return {
    //Properties
    pokemon, 
  }
}

export default usePokemon
