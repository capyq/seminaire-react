import { TextField } from "@mui/material";
import usePokemonList from "./usePokemonList";

const HooksProposition = () => {
    const { pokemon, filter } = usePokemonList();
    return (
        <div>
            <h1>Pokemons</h1>
            <TextField onChange={(e) => filter(e.target.value)}></TextField>
            <div style={{ maxHeight: "30rem", overflow: "auto" }}>
                {pokemon.map(p => <p key={p.id}>{p.name}</p>)}
            </div>
        </div>
    )
}
export default HooksProposition;
