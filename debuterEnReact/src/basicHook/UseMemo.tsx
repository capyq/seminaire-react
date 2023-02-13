import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
const UseMemo = () => {
    const [pokemon, setPokemon] = useState<{ name: string }[]>();
    const [search, setSearch] = useState<string>("");
    const renderCount = useRef<number>(0);
    const [renderCountPokemon, setRenderCountPokemon] = useState<number>(0);
    const [renderCountSearch, setRenderCountSearch] = useState<number>(0);
    const [renderCountHandleChange, setRenderCountHandleChange] = useState<number>(0);
    useEffect(() => {
        fetch('/pokemon.json')
            .then(res => res.json())
            .then(json => {
                const list = json as { name: string }[];
                setPokemon(list)
            })
    }, [])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log("called");
        setSearch(e.target.value)
    }, []);

    useEffect(() => {
        renderCount.current++
    });

    const filterListPokemon = useMemo(() => pokemon?.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())), [pokemon, search])
    useEffect(() => {
        setRenderCountPokemon(old => old + 1)
    }, [pokemon]);
    useEffect(() => {
        setRenderCountSearch(old => old + 1)
    }, [search]);
    useEffect(() => {
        setRenderCountHandleChange(old => old + 1)
    }, [handleChange]);
    return (
        <div>
            <p>handleChange </p>
            <ul>
                <li>Pokemon {renderCountPokemon} times</li>
                <li>Search {renderCountSearch} times</li>
                <li>HandleChange {renderCountHandleChange} times</li>
                <li>Render {renderCount.current} times</li>
            </ul>
            <input title="searchField" type="text" onChange={handleChange} />
            <div style={{ textAlign: "left" }}>
                <ul>
                    {filterListPokemon?.map(p => <li key={p.name}>{p.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default UseMemo;
