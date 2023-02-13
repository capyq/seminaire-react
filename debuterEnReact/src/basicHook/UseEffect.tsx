import { useEffect, useState } from "react";

const UseEffect = () => {
    const [pokemon, setPokemon] = useState<{ name: string }[]>();

    useEffect(() => {

        fetch('/pokemon.json')
            .then(res => res.json())
            .then(json => setPokemon(json as { name: string }[]))
    }, [])
    return (
        <div style={{ textAlign: "left" }}>
            <ul>
                {pokemon?.map(p => <li>{p.name}</li>)}
            </ul>
        </div>
    )
}

export default UseEffect;
