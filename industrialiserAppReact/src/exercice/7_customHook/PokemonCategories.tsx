import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAll, Pokemon } from "../../API";

type ParentProps ={
    type:string
}
const PokemonCategories = ({type}:ParentProps) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    console.log("🚀 QCA :  ~ PokemonCategories ~ pokemons:", pokemons);
    useEffect(() => {
        getAll().then(pok => setPokemons(pok))
    }, [])
    const pokemonFilter = pokemons.filter(p => p.type.includes(type))

    return (
        <div>
            <h1>Pokemons type : {type}</h1>
            <div style={{ maxHeight: "10rem", overflow: "auto" }}>
                {pokemonFilter.map(p => <p key={p.id}>{p.name}</p>)}
            </div>
        </div>
    )
}

export default PokemonCategories;
