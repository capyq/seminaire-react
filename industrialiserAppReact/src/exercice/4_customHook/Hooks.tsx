import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAll, Pokemon } from "../../API";

const Hooks = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [filterPokemonText, setFilterPokemonText] = useState<string>("");
    const [pokemonFilter, setPokemonFilter] = useState<Pokemon[]>([]);
    useEffect(() => {
        getAll().then(pok => setPokemons(pok))
    }, [])
    useEffect(() => {
        setPokemonFilter(pokemons.filter(p => !filterPokemonText || p.name.indexOf(filterPokemonText) !== -1))
    }, [filterPokemonText, pokemons])

    return (
        <div>
            <h1>Pokemons</h1>
            <TextField value={filterPokemonText} onChange={(e) => setFilterPokemonText(e.target.value)}></TextField>
            <div style={{ maxHeight: "30rem", overflow: "auto" }}>
                {pokemonFilter.map(p => <p key={p.id}>{p.name}</p>)}
            </div>
        </div>
    )
}

export default Hooks;
