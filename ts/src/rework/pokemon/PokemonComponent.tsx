import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getAll, Pokemon } from "../../API";

const useDebounce = (value: string) => {

    const [textFilterDebounce, settextFilterDebounce] = useState(value);

    useEffect(
        () => {
            const timeout = setTimeout(() => {
                settextFilterDebounce(value);
            }, 400);

            return () => clearTimeout(timeout)
        }
        , [value]
    )

    return { value: textFilterDebounce }
}

const PokemonComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [filterPokemonText, setFilterPokemonText] = useState<string>("");
    console.log("🚀 QCA :  ~ file: PokemonComponent.tsx:11 ~ PokemonComponent ~ filterPokemonText", filterPokemonText);
    const { value } = useDebounce(filterPokemonText)
    const pokemonFilter = useMemo(() => pokemons.filter(p => !value || p.name.indexOf(value) !== -1), [pokemons, value])
    useEffect(() => {
        getAll().then(pok => setPokemons(pok))
    }, [])
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

export default PokemonComponent;
