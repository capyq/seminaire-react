import { useCallback, useEffect, useMemo, useState } from "react";
import { getAll, Pokemon } from "../../../API";

const usePokemonList = (): { pokemon: Pokemon[], filter: (filter: string) => void } => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [filterRegex, setFilterRegex] = useState<string>("");
    const filter = useCallback((filter: string) => {
        setFilterRegex(filter);
    }, []);

    useEffect(() => {
        getAll().then(pok => setPokemon(pok))
    }, [])

    const filterListPokemon = useMemo(
        () => pokemon?.filter(
            item => item.name.toLocaleLowerCase().includes(filterRegex.toLocaleLowerCase())
        ),
        [pokemon, filterRegex]
    )

    return { pokemon: filterListPokemon, filter }

}

export default usePokemonList;