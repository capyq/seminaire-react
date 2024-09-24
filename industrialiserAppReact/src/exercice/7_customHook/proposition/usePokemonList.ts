import { useCallback, useEffect, useMemo, useState } from "react";
import { getAll, Pokemon } from "../../../API";

const usePokemonList = (): { pokemon: Pokemon[], filter: (filter: string) => void } => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [filterRegex, setFilterRegex] = useState<string>("");
    const debounceFilter = useDebounce(filterRegex);
    const filter = useCallback((filter: string) => {
        setFilterRegex(filter);
    }, []);

    useEffect(() => {
        getAll().then(pok => setPokemon(pok))
    }, [])

    const filterListPokemon = useMemo(
        () => pokemon?.filter(
            item => item.name.toLocaleLowerCase().includes(debounceFilter.toLocaleLowerCase())
        ),
        [pokemon, debounceFilter]
    )

    return { pokemon: filterListPokemon, filter }

}

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default usePokemonList;