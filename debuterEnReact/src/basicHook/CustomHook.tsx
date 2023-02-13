import { ChangeEvent, useCallback, useDebugValue, useEffect, useMemo, useReducer, useRef, useState } from "react";

type PokemonType = { name: string };

function useDebounce(callback: () => void, dependencies: Array<any> = [], delay = 500) {
    const callbackRef = useRef(callback);
    const [reset, clear] = useTimeout(() => callbackRef.current(), delay);
    useEffect(() => {
        reset()
        callbackRef.current = callback
    }, [...dependencies, reset]);
    useEffect(clear, []);
}

function useTimeout(callback: () => void, delay = 1000) {
    // useRef prevent multiple useEffect triggering with function dependency
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<number>();

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => { timeoutRef.current && clearTimeout(timeoutRef.current); }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return [reset, clear];
}

const usePokemonList = (): { pokemon: PokemonType[], filter: (filter: string) => void } => {
    const [pokemon, setPokemon] = useState<PokemonType[]>([]);
    const [filterRegex, setFilterRegex] = useState<string>("");
    const filter = useCallback((filter: string) => {
        setFilterRegex(filter);
    }, []);

    useEffect(() => {
        fetch('/pokemon.json')
            .then(res => res.json())
            .then(json => {
                const list = json as { name: string }[];
                setPokemon(list)
            })
    }, [])

    const filterListPokemon = useMemo(() => pokemon?.filter(item => item.name.toLocaleLowerCase().includes(filterRegex.toLocaleLowerCase())), [pokemon, filterRegex])

    return { pokemon: filterListPokemon, filter }

}

const useRenderCount = (obj?: unknown[]) => {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current++;
    }, obj);
    return renderCount.current;
}
const CustomHook = () => {
    const [search, setSearch] = useState<string>("");
    const { pokemon, filter: updatePokemonList } = usePokemonList()

    useDebounce(() => {
        updatePokemonList(search)
    }, [updatePokemonList, search])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, []);

    const renderCount = useRenderCount();
    const renderCountPokemon = useRenderCount([pokemon]);
    const renderCountSearch = useRenderCount([search]);
    const renderCountHandleChange = useRenderCount([handleChange]);
    return (
        <div>
            <p>handleChange </p>
            <ul>
                <li>Pokemon {renderCountPokemon} times</li>
                <li>Search {renderCountSearch} times</li>
                <li>HandleChange {renderCountHandleChange} times</li>
                <li>Render {renderCount} times</li>
            </ul>
            <input title="searchField" type="text" onChange={handleChange} />
            <div style={{ textAlign: "left" }}>
                <ul>
                    {pokemon?.map(p => <li key={p.name}>{p.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default CustomHook;
