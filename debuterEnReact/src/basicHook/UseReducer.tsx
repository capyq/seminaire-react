import { ChangeEvent, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";

type PokemonType = { name: string };
type ReducerStateType = {
    pokemon: PokemonType[],
    search: string,
}
const initialValue: ReducerStateType = {
    pokemon: [],
    search: "",
}
enum ReducerAction {
    UPDATE_SEARCH,
    INIT_POKEMON
}
type UpdateSearchAction = { type: ReducerAction.UPDATE_SEARCH, searchData: string }
type InitPokemonAction = { type: ReducerAction.INIT_POKEMON, list: PokemonType[] }

const myReducer = (state: ReducerStateType, actions: UpdateSearchAction | InitPokemonAction): ReducerStateType => {
    switch (actions.type) {
        case ReducerAction.INIT_POKEMON:
            return { ...state, pokemon: actions.list }
        case ReducerAction.UPDATE_SEARCH:
            return { ...state, search: actions.searchData }
        default:
            return state;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(myReducer, initialValue);
    const renderCount = useRef<number>(0);
    const [renderCountPokemon, setRenderCountPokemon] = useState<number>(0);
    const [renderCountSearch, setRenderCountSearch] = useState<number>(0);
    const [renderCountHandleChange, setRenderCountHandleChange] = useState<number>(0);
    useEffect(() => {
        fetch('/pokemon.json')
            .then(res => res.json())
            .then(json => {
                const list = json as { name: string }[];
                dispatch({ type: ReducerAction.INIT_POKEMON, list })
            })
    }, [])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log("called");
        dispatch({ type: ReducerAction.UPDATE_SEARCH, searchData: e.target.value })
    }, [dispatch]);

    useEffect(() => {
        renderCount.current++;
    });

    const filterListPokemon = useMemo(() => state.pokemon?.filter(item => item.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())), [state])
    useEffect(() => {
        setRenderCountPokemon(old => old + 1)
    }, [state.pokemon]);
    useEffect(() => {
        setRenderCountSearch(old => old + 1)
    }, [state.search]);
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

export default UseReducer;
