import React, {useState, useEffect} from 'react';

const PokemonList =() => {
    //declarar constantes
    const [pokemon, SetPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //despues de que se cargue el componente
    useEffect(()=>{
        //solicitud api
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response =>{
            if (!response.ok){
                throw new Error('ocurrio un error');
            }
            return response.json();
        })
        .then (data =>{
            SetPokemon(data.results);
            setLoading(false);
        })
        .catch( error => {
            setError(error);
            setLoading(false);
        });
    },[]); //Array vacio indica ejecuta el hook solo una vez, cuando carga
    if(loading) return <p>Cargando ....</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <div>
            <h1>Lista de pokemones</h1>
            <ul>
                {pokemon.map((poke,index) => (
                    <li key={index}>{poke.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList;